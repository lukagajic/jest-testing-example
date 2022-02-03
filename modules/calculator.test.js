const { sum } = require('./calculator');

test('sum of 1 and 2 should equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
