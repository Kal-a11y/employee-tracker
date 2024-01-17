//Import dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log(`Connected to the company_db database.`)
);

const mainPrompt = [
    {
        type: 'list',
        message: 'what would you like to do?',
        name: 'mainTodo',
        choices: [
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ]
    },
];

const addDepartmentPrompt = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'departmentName',
    },
];
const addRolePrompt = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary',
    },
    {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: 'departmentList',
        choices: [
            //call array of departments dynamiclly
        ]
    },
];
const addEmployeePrompt = [
    {
        type: 'input',
        message: 'What is the first name of the employee?',
        name: 'employeeFirstName',
    },
    {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'employeeLastName',
    },
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'roleList',
        choices: [
            //call array of roles dynamiclly
            'Example option 1',
            'Example option 2',
        ]
    },
    {
        type: 'list',
        message: "who is the employee's manager?",
        name: 'roleList',
        choices: [
            //call array of roles dynamiclly
            'Example option 1',
            'None',
        ]
    },
]
const updateEmployeePrompt = [
    {
        type: 'list',
        message: "Which employee's role do you want to update?",
        name: 'employeeList',
        choices: [
            //call array of employees dynamiclly
            'Example option 1',
            'None',
        ]
    },
    {
        type: 'list',
        message: "Which role do you want to assign the seledcted employee?",
        name: 'roleList',
        choices: [
            //call array of roles dynamiclly
            'Example option 1',
            'None',
        ]
    },
]

let askPrompts = true;
async function init() {
    //Use the company database
    db.query('USE company_db', (err, results) => {
        if (err) {
            console.log(err);
        }
    });
    while (askPrompts) {
        //Choose a todo
        const data = await inquirer.prompt(mainPrompt);
        console.log(data)
        switch (data.mainTodo) {
            case 'View all departments':
                //show departments
                break;
            case 'Add a department':
                //add departments
                break;
            case 'View all roles':
                //show roles
                break;
            case 'Add a role':
                //add role
                break;
            case 'View all employees':
                //show employees
                break;
            case 'Add an employee':
                //add employee
                break;
            case 'Update an employee role':
                //update employee
                break;
            case 'Quit':
                askPrompts = false;
                break;
        }

    }
    process.exit()
}

init();