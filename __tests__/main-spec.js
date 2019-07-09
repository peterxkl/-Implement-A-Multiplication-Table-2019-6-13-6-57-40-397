const createMultiplicationTable = require('../main');

it ('should give two number when createMultiplicationTable', () => {
    expect(createMultiplicationTable(2, 4)).toBe("2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12  4*4=16  \n");
});
it ('should give two number when createMultiplicationTable', () => {
    expect(createMultiplicationTable(4, 3)).toBe(null);
});
it ('should give two number when createMultiplicationTable', () => {
    expect(createMultiplicationTable(0, 4)).toBe(null);
});