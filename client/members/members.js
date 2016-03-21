Template.membersPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('users/get/all/overview');
    });
});

Template.membersPage.helpers({
    users: function () {
        var users = Meteor.users.find();
        return users;
    }
});

Template.userBlock.helpers({
    userAvatar : function () {
        return Images.findOne({_id: this.profile.avatar});
    }
});

