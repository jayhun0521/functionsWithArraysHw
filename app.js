//#1
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// let newArray= arr.splice(1, 4);
// // Only change code above this line
// console.log(arr);


//#4


// var arr = ["sand storm", "hurricane", "tornado", "tsunami", "drought", "famine", "earthquake", "fire", "volcano eruption", "avalanche"]

// addToArray = (arr, val) => {
//     arr.push(val);
//     return arr;
// }

// console.log(addToArray(arr, "wild fire"));


//#5 

// const jerkyTypes= [["mild", "spicy", "teriyaki"], ["Mingua", "Jacks Links"]];

// jerkyTypes.push(["Slim Jim"]);

// console.log(jerkyTypes);


var spittingDistance= [10, 20, 30, 40, 50]
var unit= "sq ft"

function totalDistance(spittingDistance, unit){
let 

}







// function forecast(arr) {
//     // Only change code below this line
//     return arr.slice(2,4);
//   }
//   // Only change code above this line
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  //#7
  var jerkyType= ["mild", "spicy", "teriyaki", "pepper"];
  var myArr2= ["Mingua", "Jack Links", "Slim Jim"];
  
  addToArray = (arr, val) => {
    arr.push(val);
    return arr;
  }
  console.log(addToArray(jerkyType, "original"));


  spliceFunc = (arr) =>{
    arr.splice(3);
    return arr;
  }

  console.log(spliceFunc(jerkyType));

  sliceOfJerky = (arr) => {
    let newArr = arr.slice(1,4);
    return newArr;
  }

  console.log(sliceOfJerky(myArr2));