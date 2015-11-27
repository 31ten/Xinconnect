Meteor.publish('images/get/all', function(){
  return Images.find();
});
Meteor.publish("projects/get/all", function () {
    return Projects.find();
});
Meteor.publish("projects/get/one", function (id) {
    return Projects.find({_id: id});
});
Meteor.publish("users/get/allNames", function () {
    return Meteor.users.find({},{fields:{username:1}});
});
Meteor.publish("news/get/all", function () {
    return News.find();
});
Meteor.publish("news/get/one", function (id) {
    return News.find({_id: id});
});
Meteor.publish("news/get/fromProject", function (projectId) {
    return News.find({projectId: projectId});
});
Meteor.methods({

});



Meteor.startup(function () {

});

