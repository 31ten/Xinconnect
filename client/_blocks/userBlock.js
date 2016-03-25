Template.userBlock.helpers({
    user : function () {
        return Meteor.users.findOne(xc.updates.getUserId(this));
    },
    userAvatar : function () {
        return xc.user.getPict(xc.updates.getUserId(this));
    },
    userLabel : function (){
        return xc.user.getLabel(xc.updates.getUserId(this));
    },
    userActionLabel : function (){
        if(this.isUser){
            return "Has joined Xinconnect";
        }
        if(this.isProject){
            return "Created the project <a href='/project/"+this._id+"'>"+this.title+"</a>";
        }
        if(this.isNews){
            var label = "Posted <a href='/project/"+this.projectParent._id+"'>"+this.title+"</a>";
            label += "<br/>";
            label += "In project <a href='/project/"+this.projectParent._id+"'>"+this.projectParent.title+"</a>";
            return label;
        }
    }
});