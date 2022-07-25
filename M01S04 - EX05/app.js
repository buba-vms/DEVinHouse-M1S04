let array1 = [1, 3, 4, 5, 3, 7];
let array2 = [1, 2, 6, 4, 8, 5];
let array3 = array1.concat(array2);
console.log(array3);

let array4 = array3.filter(function (value, index) {
  return array3.indexOf(value) === index;
});
array4.sort();
// console.log(array4.reverse());
console.log(array4);
