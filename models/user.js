const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:String,
    tel:String,
    img:String,
    adm:{
        type:Boolean,
        default: false
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);