const mongoose = require('mongoose'); 
const userSchema = new mongoose.Schema({
    name : {
        type:"String",
        require:true
        },
    email : {
        type:"String",
        require:true,
        unique: true
    },
    password : {
        type:"String",
        require:true
    },
    blogs: [
        {type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"}
    ]
})

module.exports = mongoose.model('User', userSchema);