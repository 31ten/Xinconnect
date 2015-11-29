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
    }
});