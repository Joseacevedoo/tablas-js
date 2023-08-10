let data = [
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
    { 'name': 'Isabella', 'age': '25 ', 'birthdate': '11/10/1989',  'address': 'Suite 50' },
    { 'name': 'Benjamín', 'age': '42', 'birthdate': '10/1/1989', 'address': '18th Floor' },
    { 'name': 'Olivia', 'age': '27', 'birthdate': '10/14/1990', 'address': 'PO Box 34699' },
    { 'name': 'Lucas', 'age': '25', 'birthdate': '11/29/1993',  'address': 'Room 1832'},
    { 'name': 'Andrea', 'age': '57', 'birthdate': '3/12/1991',  'address': 'Apt 1092'},
]

const tableBody = document.getElementById("table-body");

data.forEach(item => {
    const row = document.createElement("tr");
    
    const keys = Object.keys(item);
    keys.forEach(key => {
    
    const celda = document.createElement("td");
    celda.textContent = item[key];
    row.appendChild(celda);
    });

    tableBody.appendChild(row);
});
