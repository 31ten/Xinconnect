Template.projectPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var projectId = FlowRouter.getParam('id');
        self.subscribe('projects/get/one', projectId);
        self.subscribe('images/get/all');
        self.subscribe('news/get/fromProject', projectId);
    });
});

Template.editProjectPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var projectId = FlowRouter.getParam('id');
        self.subscribe('projects/get/all');
        self.subscribe('images/get/all');
    });
});

Template.projectPage.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        return project;
    },
    illustration: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        var image = Images.findOne({_id: project.illustration});
        return image;
    },
    isProjectCreator : function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        if(project.createdBy == Meteor.user()._id){
            return true
        }
    },
    newsList : function () {
        var projectId = FlowRouter.getParam('id');
        var newsList = News.find({projectId: projectId});
        return newsList;
    }
});

Template.pictureProjectBlock.helpers({
    picture: function () {
        var pictureId = this.picture;
        var pictureObj = Images.findOne({_id: pictureId});
        return pictureObj;
    }
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
