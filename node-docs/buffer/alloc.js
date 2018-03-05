/** 
 * Calling Buffer.alloc() can be significantly slower than the alternative 
 * Buffer.allocUnsafe() but ensures that the newly created Buffer instance
 * contents will never contain sensitive data.
 * A TypeError will be thrown if size is not a number.
*/

const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

const buf1 = Buffer.allocUnsafe(10);
console.log(buf1);
// Prints: (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf1.fill(0);
console.log(buf1);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>