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
    },
    currentUserBelongsToProject : function () {
        if(xc.currentUser.getId()){
            return xc.user.belongsToProject(xc.currentUser.getId(),this._id);
        }
        return false;
    }
});

Template.projectBlock.events({
    "click .ACTION_subscribe_project": function() {
        xc.user.subscribeToProject(xc.currentUser.getId(),FlowRouter.getParam('id'));
    }
});