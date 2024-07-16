// const employees = [];

// document.getElementById('add-employees-btn').addEventListener('click', function () {
//   const firstName = prompt('Enter first name:');
//   const lastName = prompt('Enter last name:');
//   const salary = parseFloat(prompt('Enter salary:'));

//   if (firstName && lastName && !isNaN(salary)) {
//     const employee = {
//       firstName: firstName.trim(),
//       lastName: lastName.trim(),
//       salary: salary.toFixed(2)
//     };
//     employees.push(employee);

//     const continueAdding = confirm('Do you want to add another employee?');
//     if (!continueAdding) {
//       employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

//       const tableBody = document.getElementById('employee-table');
//       tableBody.innerHTML = '';

//       employees.forEach(employee => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//           <td>${employee.firstName}</td>
//           <td>${employee.lastName}</td>
//           <td>${employee.salary}</td>
//         `;
//         tableBody.appendChild(row);
//       });

//       const totalSalary = employees.reduce((acc, curr) => acc + parseFloat(curr.salary), 0);
//       console.log('Total Salary:', totalSalary.toFixed(2));
//     }
//   } else {
//     alert('Invalid input. Please enter valid data.');
//   }
// });




// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    const salary = parseFloat(prompt('Enter salary:'));

    if (firstName && lastName && !isNaN(salary)) {
      const employee = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        salary: salary.toFixed(2)
      };
      employees.push(employee);

      continueAdding = confirm('Do you want to add another employee?');
    } else {
      alert('Invalid input. Please enter valid data.');
    }
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((acc, curr) => acc + parseFloat(curr.salary), 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log('Total Salary:', totalSalary.toFixed(2));
  console.log('Average Salary:', averageSalary.toFixed(2));
};

// Select and congratulate a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log('Congratulations to:', randomEmployee.firstName, randomEmployee.lastName, 'our random drawing winner!');
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/
const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  if (employees.length > 0) {
    console.table(employees);
    displayAverageSalary(employees);
    console.log('==============================');
    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  } else {
    console.log('No employees were added.');
  }
};

addEmployeesBtn.addEventListener('click', trackEmployeeData);
