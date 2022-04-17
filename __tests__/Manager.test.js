const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Yaoulth', '4', 'yaoulth@test.com', '2');

    expect(manager.officeNumber).toBe('2');
});

test('gets manager role', () => {
    const manager = new Manager('Yaoulth', '4', 'yaoulth@test.com', '2');

    expect(manager.getRole()).toEqual('Manager');
});