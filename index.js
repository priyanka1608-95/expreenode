var config=require("config");
var express=require("express");
var emp=require("./emp");

const port = parseInt(config.get("port"));

var app=express();
app.use(express.json());
app.use("/employee",emp);

app.listen(port,function(){
    console.log("server is listening from"+port);
});

