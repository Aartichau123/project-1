const mongoose = require('mongoose');
//Author model
const authorModel = new mongoose.Schema( {
    firstName:{
        type : String,
        required : true,

    },
    lastName:{
        type : String,
        required : true,
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"]
    },
    emailId:{
        type : String,
        required : true,
        unique :true,
    },
    password: {
        type : String,
        required:true
    },
}, { timestamps: true });

module.exports = mongoose.model('Userdata', authorModel)


/*
{ title: {mandatory}, body: {mandatory}, authorId: {mandatory, refs to author model}, tags: {array of string}, category: {string, mandatory}, subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, createdAt, updatedAt, deletedAt: {when the document is deleted}, isDeleted: {boolean, default: false}, publishedAt: {when the blog is published}, isPublished: {boolean, default: false}}*/