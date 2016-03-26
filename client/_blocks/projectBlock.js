Template.projectBlock.helpers({
    userAvatar : function () {
        return xc.user.getPict(this.createdBy);
    },
    user : function () {
        return Meteor.users.findOne({_id: this.createdBy});
    },
    illustration : function () {
        return Images.findOne({_id: this.illustration});
    },
    createdAtReadable : function() {
        return xc.utils.formatDate(this.createdAt);
    },
    isProjectCreator : function() {
        if(xc.currentUser.getId() == this.createdBy) return true;
        return false;
    }
});