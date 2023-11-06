let arr = ["k", "xa", "sanchai", "bhat", "khayeu?"];
console.log(arr);
let element = arr[3];
console.log(element);

let x = [1, 2, 3, 4, 5];
console.log("Original Array: " + x);

x.push(6);
console.log("After push: " + x);

x.pop();
console.log("After pop: " + x);

x.unshift(1);
console.log("After unshift: " + x);

x.shift();
console.log("After shift: " + x);

console.log("Length of array is: " + x.length);

let detailsArr = ["ram", "sita", "Dhanush", "ayodhya"];
console.log(detailsArr[2]);
let detailsObj = {
  name: "ram",
  budi: "sita",
  kam: "Dhanush",
  address: "ayodhya",
  vai: "laxman",
};
let ramkovai = detailsObj.vai;
console.log(ramkovai);

console.log(detailsObj);

detailsObj.name = "ram lal";
detailsObj.budi = "sita dhakal";
detailsObj.kam = "dhanush khelne";

console.log(detailsObj);

let obj = {
  class: 11,
  section: "D",
  studentsNo: 54,
  marksCalculator: function (a, b, c) {
    let marks = a + b + c;
    return marks;
  },
};

let result = obj.marksCalculator(4, 5, 6);
console.log("result is: " + result);

let func = function (number) {
  return number * number * number;
};

let Roman = func(6);
console.log(Roman);

function dai() {
  console.log("Rijan Dai = boka");
}
dai();
