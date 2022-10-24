var mysqlConf = require('config.js').mysql_pool;

    mysqlConf.getConnection(function (err, connection) {
        connection.query('{select * from usuarios}' , function (err, rows,fields) {
            connection.release();   //---> don't forget the connection release.
        });
    });

let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let employees = linhas;

let headers = campos;

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
});