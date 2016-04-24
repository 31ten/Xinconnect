Meteor.publish('images/get/all', function(){
  return Images.find();
});
Meteor.publish("projects/get/all", function () {
    return Projects.find();
});
Meteor.publish("projects/get/one", function (id) {
    return Projects.find({_id: id});
});
Meteor.publish("users/get/all/overview", function () {
    return Meteor.users.find({},{
        fields:
        {
            _id:1,
            username:1,
            profile:1,
            createdAt:1
        }
    });
});
Meteor.publish("user/get/all", function () {
    return News.find();
});
Meteor.publish("news/get/one", function (id) {
    return News.find({_id: id});
});
Meteor.publish("news/get/fromProject", function (projectId) {
    return News.find({projectId: projectId});
});
Meteor.methods({
    "userExists": function(username){
        return !!Meteor.users.findOne({username: username});
    },
    "user/subscribe/project":function (uid,pid){
        //check if the user has filled its profile, if not, redirect to it
        console.log("user/subscribe/project " + uid + " - "+pid);
        user = Meteor.users.findOne({_id: uid});
        if(typeof user.profile.bio == 'undefined' || typeof user.profile.status == 'undefined'){
            return "profile_to_fill";
        }

        //only subscribe if the relationship does not exist both in the user and project document
        project_res = Projects.find({usersSubscribed:{$elemMatch: {userId: uid}}}).fetch();
        user_res = Meteor.users.find({'profile.projectsSubscribed':{$elemMatch: {projectId: pid}}}).fetch();

        if(typeof project_res[0] == 'undefined' || typeof user_res[0] == 'undefined'){
            console.log(uid + " subscribed to the project "+pid);
            Projects.update(pid,{$push: {usersSubscribed: {userId:uid}}});
            Meteor.users.update(uid,{$push: {'profile.projectsSubscribed': {projectId:pid}}});
        }else{
            console.log(uid + " already subscribed to the project "+pid+" do nothing");
            return "already_subscribed";
        }        
    }
});
Meteor.startup(function () {

});

