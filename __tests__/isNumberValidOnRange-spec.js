const isNumberOnRange = require('../isNumberOnRange');

it ('The startnumber and the endnumber should be in a range of 1 to 1000 ', () => {
    expect(isNumberOnRange(0, 100)).toBe(false);
});
it ('The startnumber and the endnumber should be in a range of 1 to 1000 ', () => {
    expect(isNumberOnRange(2, 1001)).toBe(false);
});
it ('The startnumber and the endnumber should be in a range of 1 to 1000 ', () => {
    expect(isNumberOnRange(3, 150)).toBe(true);
});