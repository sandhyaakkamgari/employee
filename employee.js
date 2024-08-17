// Array to store employee data
let employees = [];

// Function to add a new employee
function addEmployee(firstName, lastName, email) {
    const employee = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        email: email,
    };

    employees.push(employee);
    updateEmployeeList();
}

// Function to update the employee list
function updateEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach((employee) => {
        const employeeItem = document.createElement('div');
        employeeItem.className = 'employee-item';
        employeeItem.innerHTML = `
            <p>Name: ${employee.firstName} ${employee.lastName}</p>
            <p>Email: ${employee.email}</p>
            <!-- Add other employee details here -->
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeItem);
    });
}

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter((employee) => employee.id !== id);
    updateEmployeeList();
}

// Function to search for employees by name
function searchEmployees(query) {
    const filteredEmployees = employees.filter(
        (employee) =>
            employee.firstName.toLowerCase().includes(query.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(query.toLowerCase())
    );
    updateEmployeeList(filteredEmployees);
}

// Event listener for adding an employee
document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    addEmployee(firstName, lastName, email);
});

// Event listener for searching employees
document.getElementById('search-button').addEventListener('click', function () {
    const searchQuery = document.getElementById('search-input').value;
    searchEmployees(searchQuery);
});

// Initial employee list display
updateEmployeeList();
