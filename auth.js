Images.allow({
    insert: function(userId, doc){
        return !! userId;
    },
    update: function(userId, doc, fieldNames, modifier){
        return !! userId;
    },
    download: function(userId){
        return true;
    }
});

Projects.allow({
    'insert':function(userId, doc){
        if(userId){
            return true
        }
    },
    'update':function(userId, doc){
        if(userId == doc.createdBy){
            return true
        }
    },
    'remove':function(userId, doc){
        if(userId == doc.createdBy){
            return true
        }
    }
});

News.allow({
    'insert':function(userId, doc){
        if(userId == doc.createdBy){
            return true
        }
    },
    'update':function(userId, doc){
        if(userId == doc.createdBy){
            return true
        }
    },
    'remove':function(userId, doc){
        if(userId == doc.createdBy){
            return true
        }
    }
});

Meteor.users.allow({
    'insert':function(userId, doc){
        if(userId == doc._id){
            return true
        }
    },
    'update':function(userId, doc){
        if(userId == doc._id){
            return true
        }
    }
});
