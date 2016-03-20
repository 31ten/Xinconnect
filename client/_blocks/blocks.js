Template.pictureBlock.helpers({
    picture : function() {
        return Images.findOne({_id: this.picture});
    }
});

Template.registerHelper("menu", function () {
    var menu = {
        "home":  FlowRouter.path("home"),
        "projects":  FlowRouter.path("projects"),
        "members":  FlowRouter.path("members"),
        "createProject":  FlowRouter.path("create/project"),
        "profile":  "/profile/"+Meteor.userId(),
        "login":  "/sign-in",
        "logout":  FlowRouter.path("logout")
    }
    return menu;
});