var express=require("express");
var mysql=require("mysql");
var joi=require("joi");

var empRouter=express();
const connection=mysql.createConnection({
    host :"localhost",
    user :"root",
    password :"manager",
    database:"MyDB"

});

var myData=[];
connection.connect();

function validate(bodycontent)
{
    var schema={
        "id":joi.number().required(),
        "name":joi.string().length(9).required(),
        "address":joi.string().required()
    };

    return joi.validate(bodycontent,schema);
}



empRouter.get("/",function(request,response){
    connection.query("select * from emp",function(err,result){
        if(err==null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
            response.send("something went wrong");

    });
    
});

empRouter.get("/:NO",function(request,response){
    var n=request.params.NO;
    connection.query("select * from emp where id="+n,function(err,result){
        if(err==null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
            response.send("something went wrong");
    });
});

empRouter.post("/",function(request,response){
    let eid=parseInt(request.body.id);
    let ename=request.body.name;
    let eadd=request.body.address;
    
    let query=`insert into emp values(${eid},'${ename}','${eadd}')`;
    connection.query(query,function(err,result){
        
        if(err==null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
            response.send(err);
    });
    
});

empRouter.put("/:NO",function(request,response){
    let eid=parseInt(request.params.NO);
    let ename=request.body.name;
    let eadd=request.body.address;
    
    let query=`update emp set name='${ename}',address='${eadd}' where id=${eid}`;
    connection.query(query,function(err,result){
        
        if(err==null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
            response.send(err);
    });
    
});

empRouter.delete("/:NO",function(request,response){
    let eid=parseInt(request.params.NO);
    
    let query=`delete from emp where id=${eid}`;
    connection.query(query,function(err,result){
        
        if(err==null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
            response.send(err);
    });
    
});

module.exports=empRouter;
