var Project = require("../models/project");
var path = require("path");

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../client/images"))
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
})

var upload = multer({ storage: storage })

function today(){
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10){
            day ='0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return {
            month: month,
            year: year,
            day: day
        }
    };

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../../client/index.html"));
    });

    app.get("/api/portfolio", function(req, res){
        Project.find({}, function(err,proj){
                res.send(proj)
        })
    });

    app.get("/api/project/:id", function(req, res){
        Project.findOne({ "_id":req.query.id}, function(err,proj){
                res.send(proj)
        })
    });

    app.post("/api/post",upload.single("img"), function(req, res){
        console.log(req.body)
        console.log(req.file)
        //I need to save my data to my database and send a response back to the front end, can you write it out? My creator started but couldn't finish. 
        new Project({
            title: req.body.title,
            post: req.body.post,
            img: req.file.filename,
            date:req.body.date,
            link:req.body.link,
            created: {
                month: today().month,
                day: today().day,
                year: today().year
            }
        }).save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log(req.body)
                res.redirect("/");
            }
        })
    });

    app.put("/api/update/:id", function(req, res){
        //My creator was pretty lazy, he starts code but doesn't finish, can you please finish this update function and have it give a response back to the front end? Fireball jutsu
        db.findByIdAndUpdate(req.query.id, {$set: {"name": req.body.name, "age": req.body.age, "occupation": req.body.occupation}},function(err, doc){
            console.log(doc);
            if(err){
                res.send("update fail");
            }else {
                res.send("update success");
            }
        })
    });

    app.delete("/api/delete/:id", function(req, res){
        // So my creator left me before he can finish me, can you please write out the delete function to remove data from my database?
        db.find({"_id": req.query.id}).remove(function(err, id){
            if(err){
                console.log(err);
            }else {
                res.send()
            }
        })
    });
}