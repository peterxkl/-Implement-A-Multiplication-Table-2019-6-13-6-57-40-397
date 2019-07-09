const getMultiplicationEquation = require('../getMultiplicationEquation');

it ('should give x and y when getMultiplicationEquation', () => {
    expect(getMultiplicationEquation(2, 3)).toBe("2*3=6");
});