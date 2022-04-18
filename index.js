const inquirer = require('inquirer');
let teamArray = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What kind of employee are you entering?',
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email for the employee.');
                    return false;
                }
            }
        }
    ])
};

const getEmployeeInfo = (employee) => {
    if (employee.type === 'Engineer') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: username => {
                    if (username) {
                        return true;
                    } else {
                        console.log('Please enter a username.');
                        return false;
                    }
                }
            }
        ])
            .then(engineerInfo => {
                employee.github = engineerInfo.github;
                teamArray.push(employee);
            });
    } else if (employee.type === 'Intern') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: `What school does ${employee.name} attend?`,
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the school.');
                        return false;
                    }
                }
            }
        ])
            .then(internInfo => {
                employee.school = internInfo.school;
                teamArray.push(employee);
            });
    } else {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
                validate: number => {
                    if (number) {
                        return true;
                    } else {
                        console.log('Please enter their office number.');
                        return false;
                    }
                }
            }
        ])
            .then(managerInfo => {
                employee.officeNumber = managerInfo.officeNumber;
                teamArray.push(employee);
            });
    }
};

const newEmployeeCheck = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
        .then(check => {
            if (check.newEmployee) {
                return promptUser;
            } else {
                return teamArray;
            }
        })
}

promptUser()
    .then(getEmployeeInfo)
    .then(newEmployeeCheck);