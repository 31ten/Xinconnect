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
    avatar: function () {
        var userId = FlowRouter.getParam('id');
        return xc.user.getPict(userId);
    },
    isCurrentUser: function () {
        var pageUserId = FlowRouter.getParam('id');
        if(Meteor.userId() == pageUserId){
            return true;
        }
    },
    userUpdates : function () {
        var userId = FlowRouter.getParam('id');
        return xc.updates.fromUser(userId);
    },
    createBlockData : function () {
        var userId = FlowRouter.getParam('id');
        return result = {
            label : "Edit your Profile",
            id : "profile",
            url : "/profile/"+userId+"/edit"
        }
    }
});

