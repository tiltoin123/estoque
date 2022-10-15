let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let employees =[
    {nome:'geralda',telefone:'16 99292-1234',endereço:'rua dos caiapós nº511',idade:54,profissão:'servente de pedreiro'},
    {nome:'enzo',telefone:'16 98792-1234',endereço:'avenida wilson savio de mello nº511',idade:20,profissão:'manicure'},
    {nome:'josivaldo',telefone:'16 99292-7673',endereço:'rua do comércio nº2005',idade:30,profissão:'boiadeiro'},
    {nome:'antonio oswaldo',telefone:'16 99452-6734',endereço:'rua água santa nº511',idade:74,profissão:'aposentado'}
]

let headers = [results.usuarios.id,results.usuarios.email,results.usuarios.senha]


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
    usuarios.forEach(usu => {
        let row = document.createElement('tr');
        Object.values(usu).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});