const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;
 const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits.lastIndexOf("Apple") + 1;

document.getElementById("demo1").innerHTML = "Apple is found in position " + position1;
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Display Object
  document.getElementById("demo2").innerHTML = person;
  const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  document.getElementById("demo3").innerHTML = cars;
  const cars2 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo4").innerHTML = cars2[0];