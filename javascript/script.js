let previousInput='0'
let currentInput='0'
let calculationOperator=''
const initialize=()=>
{
  previousInput='0'
  currentInput='0'
  calculationOperator=''
}
const inputNumber=(number)=>
{
  if(currentInput==='0')
  {
    currentInput=number;
  }
  else
  {
  currentInput+=number;
  }
}
const calculatorScreen= document.querySelector(".calculator-screen")
const updateScreen=(number)=>
{
  calculatorScreen.value=number
}

const numbers=document.querySelectorAll(".number")

numbers.forEach((number)=>
{
  number.addEventListener("click",(event)=>{
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })
})
const decimalPoint=document.querySelector(".decimal")

  decimalPoint.addEventListener("click",(event)=>{
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })

const inputOperator =(operator)=>
  {
    prevInput=currentInput
    calculationOperator=operator;
    currentInput='0'
  }

const operators=document.querySelectorAll(".operator")

operators.forEach((operator)=>
{
  operator.addEventListener("click",(event)=>{
    inputOperator(event.target.value)
  })
})

const percent=()=>
{
  calculationOperator='%'
}
const calculate=()=>
{
  let result=0
  switch(calculationOperator)
  {
    case '+':
    result=parseInt(prevInput)+parseInt(currentInput)
    break
    case '-':
    result=parseInt(prevInput)-parseInt(currentInput)
    break
    case '*':
    result=parseInt(prevInput)*parseInt(currentInput)
    break
    case '/':
    result=parseInt(prevInput)/parseInt(currentInput)
    break
    case '%':
    result=parseInt(currentInput)/100
    break
    default:
    return;
  }
  currentInput=result.toString();
  calculationOperator='';
}
const allClear=document.querySelector(".all-clear")

allClear.addEventListener("click",(event)=>{
  initialize()
  updateScreen(currentInput)
})
const percentage=document.querySelector(".percentage")

percentage.addEventListener("click",(event)=>{
  percent()
})
const equalSign=document.querySelector(".equal-sign")

equalSign.addEventListener("click",(event)=>{
  calculate()
  updateScreen(currentInput)
})
