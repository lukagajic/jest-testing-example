// It should shorten string if it's longer that 10 characters
// And add .. to the end
const shortenSomeText = (text) => {
    if (typeof text !== 'string') {
        throw new Error('The provided type is not string');
    }
    
    if (text.length === 0) {
        throw new Error('The string is empty');
    }

    return text.length <= 10 ? text : text.slice(0, 10) + "..";
}

module.exports.shortenSomeText = shortenSomeText;
