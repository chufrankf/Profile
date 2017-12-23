module.exports = function(app){
    //Set path of views directory
    var views = __dirname + '/public/views/';

    //Home
    app.get("/",function(req,res){res.sendFile(views + "index.html")});
    app.get("/projects",function(req,res){res.sendFile(views + "projects.html")});

    //Links
    //app.get("/signin",function(req,res){res.sendFile(views + "login_signin.html")});
}