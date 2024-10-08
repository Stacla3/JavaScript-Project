const btn = document.querySelectorAll('.btn')
let result = document.querySelector('.result')

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', ()=> {
    calculateBtn(btn[i].value)
  });
}

let concatNumber = ''
let sum = '';
let operator = ''
let checkNum = false

function calculateBtn(value){
  let copy
  switch (value){
    case '%':
      copy = concatNumber
      concatNumber = ''
      result.innerHTML = concatNumber
      if(operator === '%'){
        result.innerHTML = `${parseFloat(sum) % parseFloat(copy) }`
        sum += ''
        copy += ''
        operator = ''
        checkNum = true
      }
      operator = '%'
      break
    case 'CE':
      result.innerHTML = "0"
      break
    case 'C':
      result.innerHTML = "0"
      sum = '';
      concatNumber = ''
      operator = ''
      copy = ''
      checkNum = false
      break
    case 'X': result.innerHTML = "X"
      break
    case '1/x': result.innerHTML = "1/x"
      break
    case 'x^2': result.innerHTML = "x^2"
      break
    case 'x^1/2': result.innerHTML = "x^1/2"
      break
    case '/':
      copy = concatNumber
      concatNumber = ''
      result.innerHTML = concatNumber
      if(operator === '/'){
        result.innerHTML = `${parseFloat(sum) / parseFloat(copy) }`
        operator = ''
        checkNum = true
      }
      operator = '/'
      break
    case '7':
      concatNumber += '7'
      if(operator === '' || checkNum === true){
        sum += '7'
      }
      result.innerHTML = concatNumber
      break
    case '8':
      concatNumber += '8'
      if(operator === '' || checkNum === true){
        sum += '8'
      }
      result.innerHTML = concatNumber
      break
    case '9':
      concatNumber += '9'
      if(operator === '' || checkNum === true){
        sum += '9'
      }
      result.innerHTML = concatNumber
      break
    case 'x':
      copy = concatNumber
      concatNumber = ''
      result.innerHTML = concatNumber
      if(operator === 'x'){
        result.innerHTML = `${parseFloat(sum) * parseFloat(copy) }`
        operator = ''
        checkNum = true
      }
      operator = 'x'
      break
    case '4':
      concatNumber += '4'
      if(operator === '' || checkNum === true){
        sum += '4'
      }
      result.innerHTML = concatNumber
      break
    case '5':
      concatNumber += '5'
      if(operator === '' || checkNum === true){
        sum += '5'
      }
      result.innerHTML = concatNumber
      break
    case '6':
      concatNumber += '6'
      if(operator === '' || checkNum === true){
        sum += '6'
      }
      result.innerHTML = concatNumber
      break
    case '-':
      copy = concatNumber
      concatNumber = ''
      result.innerHTML = concatNumber
      if(operator === '-'){
        result.innerHTML = `${parseFloat(sum) - parseFloat(copy) }`
  
        operator = ''
        checkNum = true
      }
      operator = '-'
      break
    case '1':
      concatNumber += '1'
      if(operator === '' || checkNum === true){
        sum += '1'
      }
      result.innerHTML = concatNumber
      break
    case '2':
      concatNumber += '2'
      if(operator === '' || checkNum === true){
        sum += '2'
      }
      result.innerHTML = concatNumber
      break
    case '3':
      concatNumber += '3'
      if(operator === '' || checkNum === true){
        sum += '3'
      }
      result.innerHTML = concatNumber
      break
    case '+':
      copy = parseFloat(concatNumber)
      concatNumber = ''
      result.innerHTML = concatNumber
      if(operator === '+'){
        let sumInt = parseFloat(sum)
        result.innerHTML = `${sumInt += copy}`
        operator = ''
        checkNum = true
      }
      operator = '+'
      break
    case '+/-': result.innerHTML = "+/-"
      break
    case '0':
      concatNumber += '0'
      sum += '0'
      result.innerHTML = concatNumber
      break
    case '.':
      break
    case '=':
      operator = '='
      result.innerHTML = parseFloat(sum)+parseFloat(copy)
      break
  }
}