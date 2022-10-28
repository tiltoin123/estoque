const express = require('express');
const app = express();
//const mysql = require('mysql');
const bodyParser = require("body-parser");
var config = require('./config');
app.set("view engine","ejs")
//app.use(express.static(__dirname + "/src"));
const path = require("path");
app.use(bodyParser.urlencoded({extended: true}));

//const connection = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
    //password: 'fatec123*',
//    database: 'loja',
 //   port:3306
  //});

  


app.get("/",function(req,res){
//	let q = 'select * from usuarios';
//	connection.query(q, function(error,results){
//		if(error) throw error;
		res.render("home");
//		console.log(results)
	});
//});

app.post("/register",function(req,res){
	var person = {email:req.body.email,
                  senha:req.body.senha
				 };
		config.query('INSERT INTO usuarios SET ?',person, function(error,results){
		if(error) throw error
		res.redirect("/");
        console.log(results)
	});
});

// gera tabela usando dados do banco

		


app.get("/usuarios",(req,res)=>{
		config.query('select * from usuarios' ,  (err,results) =>{
			//let campos = fields.map(({name})=>name);
		if(err) throw err;
		//console.log(results)
		res.render("usuarios",{ linhas: results })
	});
	});
	



app.listen(3000,function(){
	console.log("Server is running on port 3000!");
	});