const buf = Buffer.from([1, 2, 3]);

console.log("iterating using for of loop");
for (const b of buf) {
  console.log(b);
}

console.log("\niterating using map function(ES6)");
buf.map(b=>{
  console.log(b);
})

/**
 * Additionally, the buf.values(), buf.keys(), and buf.entries() methods can 
 * be used to create iterators.
 * So add these method later.
 */