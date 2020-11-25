const express =  require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

const PORT  =  3000;
app.get( "/" ,function(request ,response ){
    response.sendFile(__dirname + "/index.html")
});

app.post("/", function(request,response){
    var num1  = Number(request.body.num1) ;
    var num2  = Number(request.body.num2) ;
    var result = num1 + num2 ;
    response.send("result of the number is "+ result );
});

app.listen(PORT,function(err){
    if(err) console.log("error in setup")
    console.log("server is listening  at ",PORT)
});