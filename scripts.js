//step1 create function for display number

// function displayNumber(num){
//  document.querySelector("#input").value+=num
// //    Input.value=num;
//  }

let displayNumber=(num)=>input.value+=num;
// function evaluateExpression(){
//     let res=eval(input.value);
//     input.value=res
// }
let evaluateExpression=()=>input.value=eval(input.value)


let clearBox=()=>input.value=""; 


let removeNumber=()=>input.value=input.value.slice(0,-1)