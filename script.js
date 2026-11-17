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


// const products = [
//     ["Keyboard", 45],
//     ["Montior", 188],
//     ["Mouse" , 25],
//     ["Headphones", 75],
//     ["USB Cable", 10]
// ];

// function filterProducts(productArr){
// let productArray = [];

// for (const product of productArr){
//     if (product[1] < 50){
//         productArray.push(product[0]);
//     }
// }

// return productArray;

// }

// console.log(filterProducts(products));

// const basket = [
//     ["apple", 0.5, 4],
//      ["bread", 1.5, 2],
//       ["milk", 1.2, 3]
// ]

// function calculateTotal(basketArr){
// let storeCost = 0;

// for (const basketItem of basketArr){


        
//     storeCost += basketItem[1] * basketItem
    
     
// }
// return storeCost;
// }

// console.log(calculateTotal(basket));
// const students = [
//     { name: "Alice", score: 82 },
//     { name: "Bob", score: 45 },
//     { name: "Charlie", score: 67 },
//     { name: "Daisy", score: 91 }
// ];

// function passingStudents(studentArr){
// let studentPassed= []

// for (const student of studentArr){
//     customerTotals[order.customer] = order.total;
//   }
// }}

// for (const [customer, total] of Object.entries(customerTotals)){
//   if (total > highestSpent){
// highestSpent = total;
// topCustomer = customer
//   }
// }
//   return {completeOrders, totalRevenue, topCustomer};
// }
// // console.log(orders[0].status);
// console.log(analyseOrders(orders));

// const employees = [
//     { name: "Alice", department: "Sales", sales: 4500 },
//     { name: "Bob", department: "Marketing", sales: 2000 },
//     { name: "Charlie", department: "Sales", sales: 6200 },
//     { name: "David", department: "Marketing", sales: 3500 },
//     { name: "Emma", department: "Sales", sales: 5100 },
//     { name: "Frank", department: "Support", sales: 1800 }
// ];

// function analyseEmployees(employees){
// let totalSales = 0;
// let salesDepartmentCount = 0;
// let topEmployee = null;
// let highestSales = 0;
// let highPerformers = [];
// let employeeArr = [];

// for (const employee of employees){
//   totalSales += employee.sales;
//    if (employee.sales > 4000){
//   highPerformers.push(employee.name)
//    }

// if (employee.department === "Sales"){
//   salesDepartmentCount++

// }
// if (employee.sales > highestSales){
//   highestSales = employee.sales
//   topEmployee = employee.name

// }
//   }


// return {totalSales, salesDepartmentCount, topEmployee, highPerformers};

// }
// // console.log(employees);
// console.log(analyseEmployees(employees));

const inventory = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 25 },
    { name: "Keyboard", stock: 15 },
    { name: "Monitor", stock: 8 }
];

const sales = [
    { name: "Laptop", quantity: 3 },
    { name: "Mouse", quantity: 5 },
    { name: "Laptop", quantity: 2 },
    { name: "Monitor", quantity: 4 }
];

function updateInventory(inventory, sales){

for (const sale of sales){

for (const item of inventory){
  if (sale.name === item.name){
  item.stock -= sale.quantity 
  }
}
}
return inventory
}


console.log(updateInventory(inventory, sales));