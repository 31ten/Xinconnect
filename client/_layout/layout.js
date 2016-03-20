Template.layout1.onCreated(function() {

});

Template.layout1.onRendered(function () {
    (function($){
        $(function(){
            $('.button-collapse').sideNav();
        });
    })(jQuery);
});

Template.layout1.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('id');
        var project = Projects.findOne({_id: projectId}) || {};
        return project;
    },

});
