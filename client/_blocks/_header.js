Template.header.onCreated(function () {
    menu = new ReactiveVar({});
    Session.set('menu', xc.menu.getLinks())
});

Template.header.events({
  "click .header ul li a": function() {
    setTimeout(function(){
        Session.set('menu', xc.menu.getLinks());
    },0)
  }
});

Template.header.helpers({
    currentUserAvatar: function () {
        return xc.currentUser.getPict();
    },
    currentUserId: function () {
        return xc.currentUser.getId();
    },
    menu: function () {
        return Session.get("menu");
    }
});


