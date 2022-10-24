const express = require('express');
const app = express();
//const mysql = require('mysql');
const bodyParser = require("body-parser");
var mysqlConf = require('./config').mysql_pool;

app.set("view engine","ejs")
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
	var end_result =mysqlConf.query('INSERT INTO usuarios SET ?',person, function(error,results){
		if(error) throw error
		res.redirect("/");
        console.log(results)
	});
});

// gera tabela usando dados do banco

		


app.get("/usuarios",function(req,res){
	//let linhas
	//mysqlConf.query('select * from usuarios', function(error,rows,fields){
	//	if(error) throw error;
		//let n_campos = 0;
		//let n_colunas= 0;
		//campos.forEach(campo=> n_campos+=1);
		//emails.forEach(email=> n_colunas+=1);
		//console.log('seu resultado é :', ids);
		//console.log('seu resultado é :', emails);
		//console.log('seu resultado é :', senhas);
		//console.log('seu resultado é:', campos);
		//console.log(n_campos);
		//console.log(n_colunas);
		//let ids = rows.map(({id})=>id);
		//let emails = rows.map(({email})=>email);
		//let senhas = rows.map(({senha})=>senha);
		//let campos = fields.map(({name})=>name);
		//linhas = rows;
		res.render("usuarios")
	})
	



app.listen(3000,function(){
	console.log("Server is running on port 3000!");
	});