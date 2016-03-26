Template.pictureBlock.helpers({
    picture : function() {
        return Images.findOne({_id: this.picture});
    }
});
