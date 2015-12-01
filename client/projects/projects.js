Template.projectsPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('projects/get/all');
    });
});

Template.projectsPage.helpers({
    projects: function () {
        var projects = Projects.find({}, {sort: {createdAt: -1}});
        return projects;
    }
});

Template.projectBlock.helpers({
    illustration: function () {
        var image = Images.findOne({_id: this.illustration});
        return image;
    },
    userAvatar : function () {
        if(this.createdBy){
            var userId = this.createdBy;
        }else{
            var userId = this._id;
        }
        var user = Meteor.users.findOne({_id:  userId});
        return Images.findOne({_id: user.profile.avatar});
    },
    user : function () {
        return Meteor.users.findOne({_id: this.createdBy});
    },
});