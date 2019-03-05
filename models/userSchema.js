const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



let userSchema = new Schema({
    name: String,
    email :{type:String, required:true, unique:true},
    password: {type: String},
    mobile: Number,
    createdOn: {type:Date, default:Date.now()}
})

// pre middleware

userSchema.pre('save', function(next) {
    this.password = this.encryptPass(this.password)
    next();
})

// instance method
userSchema.methods = {
    encryptPass : function (plainTextPass) {
        if(!plainTextPass)
            return
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPass, salt)
    },
    decrypt : function (plainTextPass) {
        return bcrypt.compareSync(plainTextPass, this.password)
    }
}




module.exports = mongoose.model('users', userSchema)