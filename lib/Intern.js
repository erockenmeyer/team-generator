const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '') {
        super(name);
        this.school;
    }

    getSchool() {};

    getRole() {};
}

module.exports = Intern;