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
        var selector = {_id:  userId};
        var user = Meteor.users.findOne(selector);
        var pictureObj = Images.findOne({_id: user.profile.avatar});
        return pictureObj;
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
    }
});

AutoForm.hooks({
    editProfileForm: {
        after: {
            update: function (insertDoc, updateDoc, currentDoc) {
                if(updateDoc) {
                    var profileId = FlowRouter.getParam('id');
                    FlowRouter.go("/profile/" + profileId);
                }
            }
        }
    }
});

