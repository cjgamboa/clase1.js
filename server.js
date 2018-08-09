console.log("hola");

    var express= require("express");
    var app= express();
    
    app.get("/",function(req,res){
        res.send("Hola!!!")
});
app.get("/hola",function(req,res){
    res.send("viva colombia HP")
});

    app.listen(3000,function(){
        console.log ("funcione!");
    });


    
