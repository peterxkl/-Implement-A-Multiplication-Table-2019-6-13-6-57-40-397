const isNumberValid = require('../isNumberValid');

it ('should give a start number and a end number when isNumberValid', () => {
    expect(isNumberValid(2, 3)).toBe(true);
});
it ('should give a start number and a end number when isNumberValid', () => {
    expect(isNumberValid(2, 2)).toBe(true);
});
it ('should give a start number and a end number when isNumberValid', () => {
    expect(isNumberValid(3, 2)).toBe(false);
});