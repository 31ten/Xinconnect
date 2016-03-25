Template.membersPage.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('projects/get/all');
        self.subscribe('news/get/all');
        self.subscribe('users/get/all/overview');
        self.subscribe('images/get/all');
    });
});

Template.membersPage.helpers({
    usersUpdates: function(){
       return xc.updates.all();
    }
});
