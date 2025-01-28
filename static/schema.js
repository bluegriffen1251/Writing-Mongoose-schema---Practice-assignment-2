const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    Title:{
        type:String,
        Unique : true,
        minlength:[5,'Title must me at least 5 characters long'],

    },
    Content:{
        type:String,
        required:true,
        minlength:[50,'Content must be at least 50 characters long'],

    },
    Author:{
        type:String,
    },
    Tags:{
        type:[String],
        default:['tech', 'coding'],
    },
    Category:{
        type:String,
        default: "General",
    },
    Likes:{
        type:[String],
    },
    CreatedAt:{
        type:Date,
        default:Date.now,
        immutable:true,

    },
    UpdatedAt:{
        type:Date,
    },
    comments:{
        username:{
            type:String,
        },
        Message:{
            type:String,
            required:true,
        },
        CommentedAt:{
            type:Date,
            default:Date.now,
            immutable:true,
        }
    }
})
module.exports = mongoose.model('user',newUser);