const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '') {
        super(name);
        this.officeNumber;
    }

    getRole() {};
}

module.exports = Manager;