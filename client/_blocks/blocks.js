Template.pictureBlock.helpers({
    picture : function() {
        return Images.findOne({_id: this.picture});
    }
});

Template.header.helpers({
    avatar: function () {
        console.log(Meteor.user());
        var userId = Meteor.user();
        var user = Meteor.users.findOne(userId);
        var pictureObj = Images.findOne({_id: user.profile.avatar});
        console.log(pictureObj);
        if(!pictureObj) {
            pictureObj = {
                'url' : "images/profile.png"
            }  
        }
        return pictureObj ;
    },
});


Template.registerHelper("menu", function () {
    var menu = {
        "home":  FlowRouter.path("home"),
        "projects":  FlowRouter.path("projects"),
        "members":  FlowRouter.path("members"),
        "createProject":  FlowRouter.path("create/project"),
        "profile":  "/profile/"+Meteor.userId(),
        "login":  "/sign-in",
        "logout":  FlowRouter.path("logout")
    }
    return menu;
});