const form = document.getElementsByTagName("form")[0];
let table = document.getElementById("table");
var row = null;
let chk=document.getElementById("btn");
let inc=0;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form["name"].value;
  const email = form["email"].value;
  const gpa = form["gpa"].value;
  const age = form["age"].value;
  const degree = form["degree"].value;

  if (row == null) {
    
    inc++;
    const tableRow = document.createElement("tr");
    const idCell=document.createElement("td");
    idCell.innerText=inc;
    const nameCell = document.createElement("td");
    nameCell.innerText = name;
    const emailCell = document.createElement("td");
    emailCell.innerText = email;
    const gpaCell = document.createElement("td");
    gpaCell.innerText = gpa;
    const ageCell = document.createElement("td");
    ageCell.innerText = age;
    const degreeCell = document.createElement("td");
    degreeCell.innerText = degree;
    const actionCell = document.createElement("td");
    actionCell.innerHTML = `<button onclick="edit(this)"><img width="15px" src="./Assets/edit 1.png"></button>
                            <button onclick="dlt(this)"><img width="15px" src="./Assets/trash-2 1.png"</button>`;

    tableRow.append(
        idCell,
      nameCell,
      emailCell,
      gpaCell,
      ageCell,
      degreeCell,
      actionCell
    );
    table.appendChild(tableRow);
    console.log(table.length);
    form.reset();
  } else {
    update();
    form.reset();
  }
});
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[1].innerHTML;
  document.getElementById("email").value = row.cells[2].innerHTML;
  document.getElementById("gpa").value = row.cells[3].innerHTML;
  document.getElementById("age").value = row.cells[4].innerHTML;
  document.getElementById("degree").value = row.cells[5].innerHTML;
  chk.innerText="Edit Student";
}
function update() {
  row.cells[1].innerHTML = document.getElementById("name").value;
  row.cells[2].innerHTML = document.getElementById("email").value;
  row.cells[4].innerHTML = document.getElementById("gpa").value;
  row.cells[3].innerHTML = document.getElementById("age").value;
  row.cells[5].innerHTML = document.getElementById("degree").value;
  chk.innerText="Add Student";
  row = null;
}
function dlt(td) {
    let ans=confirm("Delete!!!");
    if(ans==true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("gpa").value="";
        document.getElementById("age").value="";
        document.getElementById("degree").value="";
    }
}

