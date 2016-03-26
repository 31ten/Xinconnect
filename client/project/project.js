Template.projectPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var projectId = FlowRouter.getParam('id');
        self.subscribe('projects/get/one', projectId);
        self.subscribe('images/get/all');
        self.subscribe('news/get/fromProject', projectId);
    });
});

//xc.updates.fromProject
//xc.updates.from

Template.projectPage.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        return project;
    },
    projectUpdates: function(){
        var updates = xc.updates.fromProject(FlowRouter.getParam('id'));
        console.log(updates);
        return updates;
    },
    illustration: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        var image = Images.findOne({_id: project.illustration});
        return image;
    },
    createBlockData : function () {
        return result = {
            label : "news",
            id : "news",
            url : "/create/news/"+FlowRouter.getParam('id')
        }
    }
});


