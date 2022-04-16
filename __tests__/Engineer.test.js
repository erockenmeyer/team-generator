const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Vash', '2', 'vash@email.com', 'vash');

    expect(engineer.github).toBe('vash');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Vash', '2', 'vash@email.com', 'vash');

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test('gets engineer role', () => {
    const engineer = new Engineer('Vash', '2', 'vash@email.com', 'vash');

    expect(engineer.getRole()).toEqual('Engineer');
})