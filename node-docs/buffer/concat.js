
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);
// Prints: 42

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
const bufB = Buffer.concat([buf1, buf2, buf3]);

console.log(bufA);
// Prints: <Buffer 00 00 00 00 ...>

console.log(bufB);
// Prints: <Buffer 00 00 00 00 ...>

console.log(bufA.length,bufB.length);
// Prints: 42