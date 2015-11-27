Images = new FS.Collection("images", {
        stores: [new FS.Store.GridFS("images")]
});

Projects = new Meteor.Collection('projects');
Projects.attachSchema(new SimpleSchema({
    illustration: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                label: 'Choose file'
            }
        }
    },
    title: {
        type: String,
        label: "title",
        max:50
    },
    description: {
        type: String,
        label: "description",
        max:2500
    },
    pictures: {
        type: [Object],
        minCount: 1,
        maxCount: 6
    },
    "pictures.$.picture": {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                label: 'Choose file'
            }
        }
    },
    "pictures.$.pictureDescription": {
        type: String
    },
    createdBy: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue:function(){ return this.userId }
    },
    created: {
        type: Number,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue:function(){ return Date.now() }
    }
}));

News = new Meteor.Collection('news');
News.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "title",
        max:50
    },
    description: {
        type: String,
        label: "description",
        max:2500
    },
    pictures: {
        type: [Object],
        minCount: 1,
        maxCount: 6
    },
    "pictures.$.picture": {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                label: 'Choose file'
            }
        }
    },
    "pictures.$.pictureDescription": {
        type: String
    },
    createdBy: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue:function(){ return this.userId }
    },
    projectId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: ""
    },
    created: {
        type: Number,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue:function(){ return Date.now() }
    }
}));

