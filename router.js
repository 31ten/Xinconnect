// ROUTER SYSTEM
FlowRouter.route('/',{
    name: 'home',
    action: function() {
        BlazeLayout.render("homePage");
    }
});
FlowRouter.route('/members',{
    name: 'members',
    action: function() {
        BlazeLayout.render("membersPage");
    }
});
FlowRouter.route('/projects',{
    name: 'projects',
    action: function() {
        BlazeLayout.render("projectsPage");
    }
});
FlowRouter.route('/project/:id',{
    name: 'project',
    action: function() {
        BlazeLayout.render("projectPage");
    }
});

FlowRouter.route('/create/project', {
    name: 'create/project',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render("createProjectPage");
    }
});

FlowRouter.route('/project/:id/edit', {
    name: 'edit/project',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render("editProjectPage");
    }
});

FlowRouter.route('/create/news/:projectId', {
    name: 'createNews',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render("createNewsPage");
    }
});

FlowRouter.route('/news/:id/edit', {
    name: 'editNews',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render("editNewsPage");
    }
});

FlowRouter.route('/profile/:id', {
    name: 'profile',
    action: function() {
        BlazeLayout.render("profilePage");
    }
});

FlowRouter.route('/profile/:id/edit', {
    name: 'editProfilePage',
    action: function() {
        BlazeLayout.render("editProfilePage");
    }
});

//FS.debug = true;