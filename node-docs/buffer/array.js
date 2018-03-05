
// This will share the memory of array with buffer
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);


const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

// Shares memory with `arr` , This will not create a new memory for buffer
const buf2 = Buffer.from(arr.buffer);

console.log(buf2);
// Prints: <Buffer 88 13 a0 0f>

// Changing the original Uint16Array changes the Buffer also
arr[1] = 6000;

console.log(buf2);
// Prints: <Buffer 88 13 70 17>

/**
 * The optional byteOffset and length arguments specify a memory range 
 * within the arrayBuffer that will be shared by the Buffer.
 */

const ab = new ArrayBuffer(10);
const buf1 = Buffer.from(ab, 0, 2);

// Prints: 2
console.log(buf1.length);

/**
 * Copies the passed buffer data onto a new Buffer instance.
 * Creates a new Buffer containing the given JavaScript string string.
 * If provided, the encoding parameter identifies the character encoding of string.
 */

const buf3 = Buffer.from('this is a tést');
const buf4 = Buffer.from(buf3);

console.log(buf3);
console.log(buf4);

buf3[0] = 0x61;

//This shows that it creates a new buffer
console.log(buf3);
console.log(buf4);

console.log(buf3.toString());
// Prints: auffer

console.log(buf4.toString());
// Prints: buffer

console.log(buf4.toString('ascii'));
// Prints: this is a tC)st

const buf5 = Buffer.from('7468697320697320612074c3a97374', 'hex');

// Prints: this is a tést
console.log(buf5.toString());
console.log(buf5.toString('hex'));
console.log(buf5.toString('ascii'));