// const buttonSwitch = document.getElementById("colour");
// const input = document.getElementById("text");



//     input.addEventListener("keypress", function(e){
//             let textInput = input.value;
//             if (e.key === "Enter"){
//             console.log(textInput);}

//     })




// buttonSwitch.addEventListener("click", function() {
//     const randomColour =
//     Math.floor(Math.random()*829139345).toString(16);
// document.body.style.backgroundColor = "#" + randomColour;
//     console.log("click")
    
// });

// const member = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6], 
//   [21, 21], 
//   [78, 9]
// ];


       


// function memberCal (members){
// let arrayResult = [];
// for (let memberArrays of members){
// if (memberArrays[0] >= 55 && memberArrays[1] > 7){
//    arrayResult.push(`Senior`)
// } else{
//   arrayResult.push(`open`)

// }}
// return arrayResult;
// };

// console.log(memberCal(member));



// const scores = [12,45,23,89,34,67];




// function highestNumber(numbers){
// let highest = numbers[0]

//     for (const number of numbers){

// if(number > highest){

//     highest = number
//     console.log(`${number}`);


// }

//     }

// return highest;

// }

// console.log(highestNumber(scores));

// const grades = [34, 67, 89, 45, 50, 72, 21];


// function countPassing(arrGrade){
// let storeGrade = 0;

// for (const grade of arrGrade){
//     if (grade >= 50){
//         storeGrade++
//     }
// }
// return storeGrade
// }

// console.log(countPassing(grades));

// const temperatures = [5, 12, 28, 8, 22, 35];

// function categoriseTemperatures(tempArray){
// let storeTemperature = [];

// for (const temperature of tempArray){

//     if (temperature < 10){
//         storeTemperature.push([temperature, `cold`])
    
// } else if 
// (temperature < 25){
//         storeTemperature.push([temperature, `warm`])
// } else {
//         storeTemperature.push([temperature, `hot`])
//    }
// }
// return storeTemperature;

// }
// console.log(categoriseTemperatures(temperatures));


const products = [
    ["Keyboard", 45],
    ["Montior", 188],
    ["Mouse" , 25],
    ["Headphones", 75],
    ["USB Cable", 10]
];

function filterProducts(productArr){
let productArray = [];

for (const product of productArr){
    if (product[1] < 50){
        productArray.push(product[0]);
    }
}

return productArray;

}

console.log(filterProducts(products));