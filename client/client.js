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



AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('verifyEmail');

console.log(AccountsTemplates);