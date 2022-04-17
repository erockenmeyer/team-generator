const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Kip', '3', 'kip@test.com', 'IU');

    expect(intern.school).toBe('IU');
});

test('gets intern school', () => {
    const intern = new Intern('Kip', '3', 'kip@test.com', 'IU');

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets intern role', () => {
    const intern = new Intern('Kip', '3', 'kip@test.com', 'IU');

    expect(intern.getRole()).toEqual('Intern');
})