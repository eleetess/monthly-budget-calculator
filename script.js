// //get values from the input fields
// let bun = "hello world";
// console.log(bun);
// let myForm = document.getElementById;
// let incomeAmount = document.getElementById;
// let rent = document.getElementById;
// let electric = document.getElementById;
// let water = document.getElementById;
// let gas = document.getElementById;
// let internet = document.getElementById;
// let insurance = document.getElementById;
// let groceries = document.getElementById;
// let childcare = document.getElementById;

// //
// let input = [
//   "incomeAmount",
//   "rent",
//   "electric",
//   "water",
//   "groceries",
//   "internet",
//   "insurance",
//   "childcare",
//   "gas",
// ];

function calculate(event) {
    let inputElements = document.querySelectorAll('input.deductions');
    event.preventDefault();
    console.log('income', event.target.monies.value);
    console.log(inputElements);
    let monies = event.target.monies.value;
    let live = document.getElementById('live').value;
    //use a for loop to loop through input elements, rename vari. to deductionElements
    //as you loop through the deductionsElements subtract each elements value from the monies vari
    //
  
    inputElements.forEach(element => {
      monies -= deductionElements.value;
    });
  
    document.getElementById('total').innerHTML = '$' + monies;
  }


//check if the inputs are valid numbers
//calculate the remaining balance
//display the result
