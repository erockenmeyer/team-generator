const Employee = require('../lib/Employee');

test('creates Employee object', () => {
    const employee = new Employee('Emil', '1', 'emil@email.com');

    expect(employee.name).toBe('Emil');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('emil@email.com');
});

test('gets Employee name', () => {
    const employee = new Employee('Emil', '1', 'emil@email.com');

    expect(employee.getName()).toEqual(employee.name);
});

test('gets employee id', () => {
    const employee = new Employee('Emil', '1', 'emil@email.com');
    
    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    const employee = new Employee('Emil', '1', 'emil@email.com');

    expect(employee.getEmail()).toEqual(employee.email);
}); 

test('gets employee role', () => {
    const employee = new Employee('Emil', '1', 'emil@email.com');

    expect(employee.getRole()).toEqual('Employee');
});