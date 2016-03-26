Template.createBlock.helpers({
    type : function (){
        //get the parent page
        console.log(Template.parentData(3));
        var parentData = Template.parentData(3);
        if(parentData.template == "projectsPage") {
            return "project";
        }
    }
});