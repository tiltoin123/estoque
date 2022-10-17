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
	var end_result =connection.query('INSERT INTO usuarios SET ?',person, function(error,results){
		if(error) throw error
		res.redirect("/");
        console.log(results)
	});
});

app.get("/usuarios",function(req,res){
	connection.query('SELECT count(*) as colunas FROM information_schema.columns WHERE table_name = "usuarios"', function(error,rows,fields){
		if(error) throw error;
		console.log('numero de colunas :', rows[0].colunas);
		n_colunas = rows[0].colunas;
	});

	connection.query('select count(*) as linhas from usuarios', function(error,rows,fields){
		if(error) throw error;
		console.log('numero de linhas :', rows[0].linhas);
		n_linhas = rows[0].linhas;
	});
	connection.query('select * from usuarios', function(error,rows,fields){
		if(error) throw error;
		let id = rows.map(({id})=>id);
		let email = rows.map(({email})=>email);
		let senha = rows.map(({senha})=>senha);
		console.log('seu resultado é :', id);
		console.log('seu resultado é :', email);
		console.log('seu resultado é :', senha);
		
		res.render("usuarios");
	});
});



app.listen(3000,function(){
	console.log("Server is running on port 3000!");
	});