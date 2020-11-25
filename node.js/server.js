const express = require('express'); 
const app = express(); 
const  PORT = 3000;  //similiar to homepage

app.get("/" , function(request, response){                                 // get request login home directory function callback
	response.send("<h1>hello world </h1>");

});

app.get("/contact" , function(request, response){                                
	response.send("<h1>contact me at :shubhamsugara22@gmail.com </h1>");

});

app.get("/about" , function(request, response){                                 
	response.send(" backend developer and  data analyst");

});

app.get("/hobbies", function(request,response){
	response.send("<ul><li>football</li><li>gaming</li></ul>")
})

app.listen(PORT, function(err){ 
	if (err) console.log("Error in server setup") 
	console.log("Server listening on Port", PORT); 
}) ;
