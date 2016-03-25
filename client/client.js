Meteor.subscribe("images/get/all");
Meteor.subscribe("news/get/all");
Meteor.subscribe("users/get/allNames");


AutoForm.debug();
AutoForm.setDefaultTemplate('materialize');

Template.layout1.onRendered(function () {
  (function($){
        $(function(){
            $('.button-collapse').sideNav({
                closeOnClick: true
            });

            $(".nav-wrapper ul li a").click(function(){
                console.log("woooop1");
                //console.log($("#sidenav-overlay"));
                /*
                setTimeout(function() {
                     console.log("woooop1");
                    $("#sidenav-overlay").addClass("hidden");
                    $("#sidenav-overlay").trigger("click");
                    $("#sidenav-overlay").each(function(){
                        console.log("test");
                    });
                 }, 100);
                ('.button-collapse').sideNav('hide');
                */
            });
        });
    })(jQuery);
});




AccountsTemplates.configure({
    defaultLayout: 'layout1',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: false,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    //homeRoutePath: '/dashboard',
    redirectTimeout: 5000,

    // Hooks
    //onLogoutHook: myLogoutFunc,

    // Texts
    texts: {
        button: {
            signUp: "Register"
        },
        title: {
            forgotPwd: "Recover Your Password"
        }
    }
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});


AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('verifyEmail');

//console.log(AccountsTemplates);