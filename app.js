const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'loja',
    port:3306
  });



app.get("/",function(req,res){
	let q = 'select * from usuarios';
	connection.query(q, function(error,results){
		if(error) throw error;
		res.render("home");
		console.log(results[0].id,
            results[0].email,
            results[0].senha);
        console.log(results[1].id,
            results[1].email,
            results[1].senha)
	});
});

app.post("/register",function(req,res){
	var person = {email:req.body.email,
                  senha:req.body.senha
				 };
	var end_result =connection.query('INSERT INTO usuarios SET ?',person, function(error,results){
		if(error) throw error
		res.redirect("/");
        console.log(results)
	});
});

app.get("/usuarios",function(req,res){
	var q = 'select * from usuarios';
	connection.query(q, function(error,results){
        var resultados = {results}
		if(error) throw error;
		res.render("usuarios");
		console.log(resultados)
	});
});

app.listen(3000,function(){
	console.log("Server is running on port 3000!");
	});