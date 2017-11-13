var mongoose = require("mongoose");

var project = new mongoose.Schema({
    title: String, 
    post: String,
    img: String,
    date:String,
    link:String,
    created: {
        month: String,
        day: String,
        year: String
    },
});

module.exports = mongoose.model("project", project);