const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

let text = "";
for (const x of C) {
  text += x;
}
console.log(C);