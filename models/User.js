const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema; both expressions are equivalent

const userSchema = new Schema({
    googleId: String,
    credits: {type: Number, default: 0}
});

mongoose.model("users", userSchema); //new collection 
