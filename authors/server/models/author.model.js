const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "an author must have a name."],
        minlength: [3, "Name but be at least 3 chars."]
    },

    bookOne:{
        type: String,
        default: ""
    },

    bookTwo:{
        type: String,
        default: ""
    },
    
    bookThree:{
        type: String,
        default: ""
    }

},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

//be sure to change the word ACTION to a more fitting name 