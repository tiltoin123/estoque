import {mysql} from mysql;

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'loja',
  port:3306
});
/*
const sql = 'desc usuarios';

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    connection.query(sql, (err, results, fields) => {
    if (err) {
    return console.error(err.message);
    }
    console.log(results);
    connection.end(); 
    });
    
  });


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
*/

/*--------------criação do banco----------------------------/
create database loja;

create table usuarios(
id int PRIMARY KEY AUTO_INCREMENT,
email varchar(255) not null,
senha varchar(25) not null,
unique(email)
);


delimiter $$
create trigger email_repetido
before insert on usuarios for each row
begin
if new.email = email
then signal sqlstate "45000"
	set message_text = "email ja cadastrado";
	end if;
	end;
	$$
delimiter ;*/