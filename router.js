// ROUTER SYSTEM
FlowRouter.route('/',{
    name: 'home',
    action: function() {
        BlazeLayout.render('layout1',{ main: "homePage" });
    }
});
FlowRouter.route('/members',{
    name: 'members',
    action: function() {
        BlazeLayout.render('layout1',{ main: "membersPage" });
    }
});
FlowRouter.route('/login',{
    name: 'login',
    action: function() {
        BlazeLayout.render('layout1',{ main: "loginPage" });
    }
});

FlowRouter.route('/logout',{
    name: 'logout',
    action: function() {
        BlazeLayout.render('layout1',{ main: "logoutPage" });
    }
});

FlowRouter.route('/projects',{
    name: 'projects',
    action: function() {
        BlazeLayout.render('layout1',{ main: "projectsPage"});
    }
});
FlowRouter.route('/project/:id',{
    name: 'project',
    action: function() {
        BlazeLayout.render('layout1',{ main: "projectPage"});
    }
});

FlowRouter.route('/create/project', {
    name: 'create/project',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render('layout1',{ main: "createProjectPage"});
    }
});

FlowRouter.route('/project/:id/edit', {
    name: 'edit/project',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render('layout1',{ main: "editProjectPage"});
    }
});

FlowRouter.route('/create/news/:projectId', {
    name: 'createNews',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render('layout1',{ main: "createNewsPage"});
    }
});

FlowRouter.route('/news/:id/edit', {
    name: 'editNews',
    loadingTemplate: 'loading',
    action: function() {
        BlazeLayout.render('layout1',{ main: "editNewsPage"});
    }
});

FlowRouter.route('/profile/:id', {
    name: 'profile',
    action: function() {
        BlazeLayout.render('layout1',{ main: "profilePage"});
    }
});


FlowRouter.route('/profile/:id/edit', {
    name: 'editProfilePage',
    action: function() {
        BlazeLayout.render('layout1',{ main: "editProfilePage"});
    }
});

FlowRouter.route('/processPicts', {
    name: 'processPicts',
    action: function() {
        console.log("Processing thumbnails pictures creation...");
        Images.find().forEach(function (fileObj) {
            var readStream = fileObj.createReadStream('images');
            var writeStream = fileObj.createWriteStream('images');
            gm(readStream).swirl(180).stream().pipe(writeStream);
        });
    }
});

FlowRouter.route('/mdl', {
    name: 'mdl',
    action: function() {
        BlazeLayout.render("mdl");
    }
});

//FS.debug = true;
