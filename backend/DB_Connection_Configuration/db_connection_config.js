const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'EmployeeData.json');

function readEmployees() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

// function addEmployee(newEmployee) {
//   const employees = readEmployees();
//   employees.push(newEmployee);

//   try {
//     fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
//     console.log("Employee added successfully.");
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// }


function addEmployee(newEmployee) {
  const employees = readEmployees();
///test only
//   const nextId = employees.length > 0 
//     ? Math.max(...employees.map(emp => emp.id || 0)) + 1 
//     : 1;
  const nextId = employees.length > 0 
    ? Math.max(...employees.map(emp => emp.id || 0)) + 1 
    : 1;
  const employeeWithId = { id: nextId, ...newEmployee };
  employees.push(employeeWithId);

  try {
    fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
    console.log("Employee added successfully.");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

function deleteEmployeeById(idToDelete) {
  const employees = readEmployees();

//   const employeeExists = employees.some(emp => emp.id === idToDelete);
    console.log("employees => ", employees)
  const employeeExists = employees.some(emp => emp.id === Number(idToDelete));
    console.log("employeeExists => ", employeeExists)

  
  if (!employeeExists) {
    console.log(`Employee with ID ${idToDelete} not found.`);
    return false;
  }

  const updatedEmployees = employees.filter(emp => emp.id !== Number(idToDelete));

  try {
    fs.writeFileSync(filePath, JSON.stringify(updatedEmployees, null, 2));
    console.log(`Employee with ID ${idToDelete} deleted successfully.`);
    return true;
  } catch (err) {
    console.error("Error writing file:", err);
    return false;
  }
}

function updateEmployee(id, updatedFields) {
  const employees = readEmployees();
  const index = employees.findIndex(emp => emp.id === id);

  if (index === -1) {
    console.log("Employee not found.");
    return;
  }

  employees[index] = { ...employees[index], ...updatedFields };

  try {
    fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
    console.log("Employee updated successfully.");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

module.exports = {
    readEmployees,
    addEmployee,
    deleteEmployeeById
}