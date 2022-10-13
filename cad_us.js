let usuarios = [];

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
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click',add_usuario)
});