Template.createNewsPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var projectId = FlowRouter.getParam('projectId');
        Session.set("newsProjectId",projectId);
    });
});

Template.editNewsPage.helpers({
    news: function () {
        var newsId = FlowRouter.getParam('id');
        var news = News.findOne({_id: newsId});
        return news;
    },
    beforeNewsRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete "' + doc.title + '"?')) {
            this.remove();
            FlowRouter.go("/project/"+doc.projectId);
        }
      }
    }
});

Template.createNewsPage.helpers({
    projectId: function () {
        var projectId = FlowRouter.getParam('projectId');
        return projectId;
    }
});

Template.pictureNewsBlock.helpers({
    picture: function () {
        var pictureId = this.picture;
        var pictureObj = Images.findOne({_id: pictureId});
        return pictureObj;
    }
});

Template.newsBlock.helpers({
    isNewsCreator : function () {
        var newsId = this._id;
        var news = News.findOne({_id: newsId}) || {};
        if(news.createdBy == Meteor.user()._id){
            return true
        }
    }
});


AutoForm.hooks({
    insertNewsForm: {
        before: {
            insert: function (insertDoc) {
                insertDoc.projectId = Session.get("newsProjectId");
                return insertDoc;
            }
        },
        after: {
            insert: function (insertDoc, updateDoc, currentDoc) {
                FlowRouter.go("/project/"+Session.get("newsProjectId"));
            }
        }
    },
    editNewsForm: {
        before: {
            update: function (insertDoc, updateDoc, currentDoc) {
                Session.set("newsProjectId", insertDoc.$set.projectId);
                return insertDoc;
            }
        },
        after: {
            update: function (insertDoc, updateDoc, currentDoc) {
                FlowRouter.go("/project/"+Session.get("newsProjectId"));
            }
        }
    }
});



