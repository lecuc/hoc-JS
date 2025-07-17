function createIterator() {
  let count = 0;
  return {
    next: function () {
      count++;
      if (count <= 3) {
        return { value: count, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const it = createIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());