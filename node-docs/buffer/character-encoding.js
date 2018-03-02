
const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64

console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(buf.toString('ascii'));
//Guess What??