xc = new ReactiveVar({});
xc.vars = {};
xc.utils = {};
xc.menu = {};
xc.updates = {};
xc.user = {};
xc.currentUser = {};

//
// UPDATES
//

xc.updates.all = function(){
    var news = News.find().fetch();
    for (i = 0; i < news.length; ++i){
        news[i].isNews = 1;
        news[i].projectParent = Projects.findOne({_id: news[i].projectId});
    }

    var projects = Projects.find().fetch();
    for (j = 0; j < projects.length; ++j){
        projects[j].isProject = 1;
    }

    var users = Meteor.users.find().fetch();
    for (k = 0; k < users.length; ++k){
        users[k].isUser = 1;
    }

    var result = news.concat(projects,users);

    result = xc.utils.sortByDate(result);

    console.log(result);
    
    return result;
};

xc.updates.fromProject = function(projectId){
    // get the project news
    var news = News.find({projectId: projectId}).fetch();
    for (i = 0; i < news.length; ++i){
        news[i].isNews = 1;
    }

    // get the users joined
    var result = news;

    result = xc.utils.sortByDate(result);

    console.log(result);

    return result;
};

xc.updates.fromUser = function(uid){
    var news = News.find({createdBy: uid}).fetch();
    for (i = 0; i < news.length; ++i){
        news[i].isNews = 1;
        news[i].projectParent = Projects.findOne({_id: news[i].projectId});
    }

    var projects = Projects.find({createdBy: uid}).fetch();
    for (j = 0; j < projects.length; ++j){
        projects[j].isProject = 1;
    }

    var users = Meteor.users.findOne({_id: uid});
    for (k = 0; k < users.length; ++k){
        users[k].isUser = 1;
    }

    var result = news.concat(projects,users);

    result = xc.utils.sortByDate(result);

    console.log(result);
    
    return result;
};

xc.updates.getUserId = function (update){
    if(!update.isUser) return update.createdBy;
    return update._id;
}

//
// USER
//

xc.user.getPict = function (uid) {
    if(!uid) return false;

    var user = Meteor.users.findOne(uid);

    defaultPict = { 'url' : "/images/profile.png" } 

    if(user.profile){
        var pictureObj = Images.findOne({_id: user.profile.avatar});
        if(pictureObj) return pictureObj ;  
    }

    console.log("xc.user.getPict : no picture found for the UID "+uid);

    return defaultPict ;
}

xc.user.getLabel = function (uid){
    var user = Meteor.users.findOne(uid);
    if(user.username) return user.username;
    if(user.profile.firstName && user.profile.lastName) return user.profile.firstName+" "+user.profile.lastName;
    if(user.profile.firstName ) return user.profile.firstName ;
    if(user.profile.lastName ) return user.profile.lastName ;
}

xc.user.belongsToProject = function (uid,pid){
    user_check = Meteor.users.find({'profile.projectsSubscribed':{$elemMatch: {projectId: pid}}}).fetch();
    console.log(user_check);
    if(typeof user_check[0] == 'undefined'){
        console.log("xc.user.belongsToProject "+uid+" - "+pid +" : false");
        return false;
    }else{
        console.log("xc.user.belongsToProject "+uid+" - "+pid +" : true");
        return true;
    }
}

xc.user.subscribeToProject = function (uid,pid){
    var confirm_subscription_message = "Do you want to subscribe to this project? An introduction email will be sent to the current project members to welcome you!";

    if (confirm(confirm_subscription_message)) {
        console.log("1");
        Meteor.call("user/subscribe/project",uid,pid,function(err,res){
            if(res == "profile_to_fill"){
                FlowRouter.go('/profile/'+uid+'/edit');
                alert("As we will send an email of introduction of you to all the current members of that project,please fill your bio and status before subscribing to a project.");
            }
            else if(res == "already_subscribed"){
                alert("you already subscribed to the project");
            }
            else{
                alert("you successfully subscribed to the project! Check your mailbox for updates on the project");
            }
        });
    }else{
        console.log("2");
    }
}


//
// CURRENT USER
//
xc.currentUser.getPict = function () {
    var currentUser = Meteor.user();
    if(currentUser) return xc.user.getPict(currentUser._id);
    return false;
}

xc.currentUser.get = function () {
    var currentUser = Meteor.user();
    if(currentUser) return currentUser;
    return false;
}

xc.currentUser.getId = function () {
    var currentUser = Meteor.user();
    if(currentUser) return currentUser._id;
    return false;
}

//
// UTILS
//

xc.utils.formatDate = function (date) {
    return moment(date).format("MMMM Do YYYY h:mm a");
}

xc.utils.sortByDate = function (list) {
    function compare(a,b) {
        if (a.createdAt < b.createdAt)
            return 1;
        if (a.createdAt > b.createdAt)
            return -1;
        return 0;
    }
    return list.sort(compare);
}

//
// MENU
//

xc.menu.itemState = function(itemName){
    // get the current route name
    var currentRouteName = FlowRouter.current().route.name;

    // if belong to projects groupe route && current item is projects
    var projectsRoutes = ["projects","project","create/project","edit/project","createNews","editNews"];
    if(itemName == "projects" && projectsRoutes.indexOf(currentRouteName) != -1){
        return "active";
    }

    // if belong to projects groupe route && current item is projects
    var membersRoutes = ["members","profile","editProfilePage"];
    if(itemName == "members" && membersRoutes.indexOf(currentRouteName) != -1){
        return "active";
    }

    return false;
}

xc.menu.getLinks = function(){
    var menu = {
        "home":  {
            "url" : FlowRouter.path("home"),
        },
        "projects":  {
            "url" : FlowRouter.path("projects"),
        },
        "members":  {
            "url" : FlowRouter.path("members"),
        },
        "createProject":  {
            "url" : FlowRouter.path("create/project"),
        },
        "profile":  {
            "url" : "/profile/"+Meteor.userId(),
        },
        "login":  {
            "url" : "/sign-in",
        },
        "signup":  {
            "url" : "/sign-up",
        },
        "logout":  {
            "url" : FlowRouter.path("logout")
        }
    }

    for (var item in menu) {
        menu[item]["state"] = xc.menu.itemState(item);
    };

    console.log(menu);

    return menu;
}

console.log(xc);