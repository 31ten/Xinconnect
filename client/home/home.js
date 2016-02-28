Template.homePage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('projects/get/all');
        self.subscribe('news/get/all');
        self.subscribe('users/get/all/overview');
        self.subscribe('images/get/all');
    });
});


Template.homePage.helpers({
    homeUpdates : function () {
        var news = News.find().fetch();
        for (i = 0; i < news.length; ++i){
            news[i].newsTpl = 1;
            news[i].typeLabel = " has updated the project ";
        }

        var projects = Projects.find().fetch();
        for (j = 0; j < projects.length; ++j){
            projects[j].projectTpl = 1;
            projects[j].typeLabel = " created a new project '";
        }

        var users = Meteor.users.find().fetch();
        for (k = 0; k < users.length; ++k){
            users[k].userTpl = 1;
            users[k].typeLabel = " has just joined Xinconnect!";
        }

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
    newsProject : function () {
        if(this.projectId){
            return Projects.findOne({_id: this.projectId});
        }
    },
    newsPicture : function () {
        return Images.findOne({_id: this.pictures[0].picture});
    },
    illustration : function () {
        return Images.findOne({_id: this.illustration});
    },
    createdAtReadable : function() {
        console.log(this);
        return moment(this.createdAt).format("MMMM Do YYYY h:mm a");
    }
});