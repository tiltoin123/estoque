let usuarios = [];
import { connection } from "connection.js";

const add_usuario = (ev)=>{
    ev.preventDefault();
    let usuario ={
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    usuarios.push(usuario);
    document.forms[0].reset();

    console.log('added' , {usuarios}    );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(usuarios, '\t' ,2); 

    connection.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!");  
        var sql = "INSERT INTO usuarios (email,senha) VALUES ?";  
        connection.query(sql, [usuarios[usuarios.length-1]], function (err, result) {  
        if (err) throw err;  
        console.log("Number of records inserted: " + result.affectedRows);  
        });  
        }); 
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click',add_usuario)});