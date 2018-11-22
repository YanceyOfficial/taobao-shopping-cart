const arr = [1, 2, 3, 4, 5];

Array.prototype.multiply = Array.prototype.multiply || function () {
  this.map((value) => {
    this.push(value ** 2);
  });
  return this;
};

arr.multiply();

console.log(arr);
