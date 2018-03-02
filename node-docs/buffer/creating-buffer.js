
// Creates a zero-filled Buffer of length 10.
// A TypeError will be thrown if size is not a number.
const buf1 = Buffer.alloc(10);
console.log(buf1);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe(10);
console.log(`Buffer 3 with old data`);
console.log(buf3);
buf3.fill(3);
console.log("Buffer 3 after filling new data ");
console.log(buf3);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf5 = Buffer.from('tést');

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'latin1');

console.log(buf4,buf5,buf6);

//Passing an ArrayBuffer or a SharedArrayBuffer returns a Buffer that 
//shares allocated memory with the given array buffer.
const buf7 = Buffer.from(buf4);
console.log(buf7);