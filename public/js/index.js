
document.getElementById("agregarItem").addEventListener("click", function () {
  window.location.href = "agregar.html";



});



const storedData = JSON.parse(localStorage.getItem('form_data'));

const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableHeaderRow = document.createElement('tr');
const nameHeader = document.createElement('th');

nameHeader.textContent = 'Name';
tableHeaderRow.appendChild(nameHeader);
const priceHeader = document.createElement('th');

priceHeader.textContent = 'Price';
tableHeaderRow.appendChild(priceHeader);
const categoryHeader = document.createElement('th');

categoryHeader.textContent = 'Category';
tableHeaderRow.appendChild(categoryHeader);

const editHeader = document.createElement('th');
editHeader.textContent = "Editar";
tableHeaderRow.appendChild(editHeader)
  
const actionsHeader = document.createElement('th');
actionsHeader.textContent = 'Actions';
tableHeaderRow.appendChild(actionsHeader);




tableHeader.appendChild(tableHeaderRow);
table.appendChild(tableHeader);



const tableBody = document.createElement('tbody');
for (let i = 0; i < storedData.length; i++) {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = storedData[i].name;
  row.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.textContent = storedData[i].price;
  row.appendChild(priceCell);

  const categoryCell = document.createElement('td');
  categoryCell.textContent = storedData[i].category;
  row.appendChild(categoryCell);

  const editCell = document.createElement("td")
  const editButton = document.createElement("button")
  editButton.textContent = "EDITAR";

  const actionsCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'ELIMINAR';



  deleteButton.onclick = function () {
    storedData.splice(i, 1);
    localStorage.setItem('storedData', JSON.stringify(storedData));
    tableBody.removeChild(row);
  };

  editCell.appendChild(editButton)
  actionsCell.appendChild(deleteButton);
  row.appendChild(editCell)
  row.appendChild(actionsCell);
  tableBody.appendChild(row);
  

  


  

}
table.appendChild(tableBody);
document.body.appendChild(table);





document.getElementById("salir").addEventListener("click", function () {
  window.location.href = "index.html";
});
