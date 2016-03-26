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
    },
    createBlockData : function () {
        return result = {
            label : "Create project",
            id : "project",
            url : "/create/project"
        }
    }
});
