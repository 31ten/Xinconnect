Template.newsBlock.helpers({
    userAvatar : function () {
        return xc.user.getPict({_id: this.createdBy});
    },
    userLabel : function (){
        return xc.user.getPict(this._id);
    },
    user : function () {
        return Meteor.users.findOne({_id: this.createdBy});
    },
    newsProject : function () {
        if(this.projectId){
            return Projects.findOne({_id: this.projectId});
        }
    },
    newsPicture : function () {
        return Images.findOne({_id: this.pictures[0].picture});
    },
    illustration : function () {
        return Images.findOne({_id: this.illustration});
    },
    createdAtReadable : function() {
        return xc.utils.formatDate(this.createdAt);
    }
});