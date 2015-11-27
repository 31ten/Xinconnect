Template.profilePage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var userId = FlowRouter.getParam('id');
        self.subscribe('users/get/all/overview');
    });
});

Template.profilePage.helpers({
    user: function () {
        var userId = FlowRouter.getParam('id');
        var selector = {_id:  userId};
        return Meteor.users.findOne(selector);
    },
    isCurrentUser: function () {
        var pageUserId = FlowRouter.getParam('id');
        if(Meteor.userId() == pageUserId){
            return true;
        }
    },
});

Template.editProfilePage.helpers({
    user: function () {
        var userId = FlowRouter.getParam('id');
        var selector = {_id:  userId};
        return Meteor.users.findOne(selector);
    }
});


Template.editProfilePage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var userId = FlowRouter.getParam('id');
        self.subscribe('users/get/all/overview');
    });
});

Template.editProfilePage.helpers({
    profile: function () {
        var userId = FlowRouter.getParam('id');
        var selector = {_id:  userId};
        return Meteor.users.findOne(selector);
    },
});