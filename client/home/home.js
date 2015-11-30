/*
- [X] CHECK : members, news and project has all the same createdAt field
- [ ] get all the news and output them in order
- [ ] get all the project and output them in order
- [ ] get all the members and output them in order
- [ ] create a listing of all the objects classified by createdAt
 */

Template.homePage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('projects/get/all');
        self.subscribe('images/get/all');
        self.subscribe('news/get/all');
        self.subscribe('users/get/all/overview');
    });
});

Template.homePage.helpers({
    homeUpdates : function () {
        var news = News.find().fetch();
        for (i = 0; i < news.length; ++i){
            news[i].type = "news";
        };

        var projects = Projects.find().fetch();
        for (j = 0; j < projects.length; ++j){
            projects[j].type = "project";
        };

        var users = Meteor.users.find().fetch();
        for (k = 0; k < users.length; ++k){
            users[k].type = "user";
        };

        var result = news.concat(projects,users);

        function compare(a,b) {
            if (a.createdAt < b.createdAt)
                return 1;
            if (a.createdAt > b.createdAt)
                return -1;
            return 0;
        }
        result.sort(compare);
        return result;
    }
});

Template.homeUpdatesBlock.helpers({
    userAvatar : function () {
        var userId = this.createdBy;
        var selector = {_id:  userId};
        var user = Meteor.users.findOne(selector);
        var pictureObj = Images.findOne({_id: user.profile.avatar});
        return pictureObj;
    }
});