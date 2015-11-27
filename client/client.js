Meteor.subscribe("images/get/all");
Meteor.subscribe("news/get/all");
Meteor.subscribe("users/get/allNames");

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});



Template.registerHelper("menu", function (param2) {
    var menu = {
        "home":  FlowRouter.path("home"),
        "projects":  FlowRouter.path("projects"),
        "members":  FlowRouter.path("members"),
        "createProject":  FlowRouter.path("create/project"),
        "profile":  "/profile/"+Meteor.userId()
    }
    return menu;
});

AutoForm.debug();