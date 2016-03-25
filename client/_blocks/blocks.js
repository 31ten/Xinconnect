Template.pictureBlock.helpers({
    picture : function() {
        return Images.findOne({_id: this.picture});
    }
});

Template.header.helpers({
    avatar: function () {
        return xc.currentUser.getPict();
    },
});


Template.registerHelper("menu", function () {
    var menu = {
        "home":  FlowRouter.path("home"),
        "projects":  FlowRouter.path("projects"),
        "members":  FlowRouter.path("members"),
        "createProject":  FlowRouter.path("create/project"),
        "profile":  "/profile/"+Meteor.userId(),
        "login":  "/sign-in",
        "signup":  "/sign-up",
        "logout":  FlowRouter.path("logout")
    }
    return menu;
});