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
    let incomeAmount=document.getElementById("monies").value
    let rent=document.getElementById("live").value
    let electric=document.getElementById("lights").value
    let gas=document.getElementById("delta").value
    let water=document.getElementById("htwoo").value
    let internet=document.getElementById("wireless").value
    let insurance=document.getElementById("etc").value
    let food=document.getElementById("food").value
    let childCare=document.getElementById("babySitter").value
    let total=incomeAmount-rent-electric-gas-water-internet-insurance-food-childCare
    inputElements.forEach(element => {
      monies -= element.value;
    });
    console.log(total)
    document.getElementById('total').innerHTML = '$' + total;
  }


//check if the inputs are valid numbers
//calculate the remaining balance
//display the result
