const { shortenSomeText } = require('./string-util');

test('it should shorten a string longer that 10 chars and append ..', () => {
    expect(shortenSomeText('univerzitet')).toEqual('univerzite..');
});

test('it should leave the string untouched if lt 10 chars', () => {
    expect(shortenSomeText('singi')).toEqual('singi');
});

test('it should leave the string as it is if it exactly 10 chars long', () => {
    expect(shortenSomeText('singidunum')).toEqual('singidunum');
});

test('it should throw an error if the string is empty', () => {
    expect(() => shortenSomeText('')).toThrow('The string is empty');
});

test('it should throw an error if the provided type is not string', () => {
    expect(() => shortenSomeText(1)).toThrow('The provided type is not string');
});
