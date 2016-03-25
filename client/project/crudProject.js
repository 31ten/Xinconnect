Template.editProjectPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var projectId = FlowRouter.getParam('id');
        self.subscribe('projects/get/all');
        self.subscribe('images/get/all');
    });
});

Template.editProjectPage.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId});
        return project;
    },
    beforeProjectRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete "' + doc.title + '"?')) {
            this.remove();
            FlowRouter.go("/projects");
        }
      }
    }
});



AutoForm.hooks({
    insertProjectForm: {
        after: {
            insert: function (insertDoc, updateDoc, currentDoc) {
                if(updateDoc) {
                    FlowRouter.go("/project/"+updateDoc);
                }
            }
        }
    },
    editProjectForm: {
        after: {
            update: function (insertDoc, updateDoc, currentDoc) {
                if(updateDoc) {
                    var projectId = FlowRouter.getParam('id');
                    FlowRouter.go("/project/" + projectId);
                }
            }
        }
    }
});