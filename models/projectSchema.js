const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name: {
        type: String, 
        minlength:2, 
        validate:{
            validator: function(value) {
                return value.length > 3
            },
            message:'Minimum length should be 4'
        },
        required:true
    },
    alias: {type:String, unique:true, required:true},
    tags : [String],
    description:String,
    githubUrl : {type:String, trim:true},
    imageUrl: String,
    relatedProjects : [{name: String, link:String}],
    createdOn : {type: Date, default: Date.now()},
    updatedOn : {type: Date}
});

module.exports = mongoose.model('projects', projectSchema);