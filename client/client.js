Meteor.subscribe("images/get/all");
Meteor.subscribe("news/get/all");
Meteor.subscribe("users/get/allNames");

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});


Template.registerHelper("menu", function () {
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
AutoForm.setDefaultTemplate('materialize');

Template.layout1.onRendered(function () {
  (function($){
        $(function(){
            $('.button-collapse').sideNav();
        });
    })(jQuery);
});