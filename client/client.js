Meteor.subscribe("images/get/all");
Meteor.subscribe("news/get/all");
Meteor.subscribe("users/get/allNames");



AutoForm.debug();
AutoForm.setDefaultTemplate('materialize');

Template.layout1.onRendered(function () {
  (function($){
        $(function(){
            $('.button-collapse').sideNav();
        });
    })(jQuery);
});

