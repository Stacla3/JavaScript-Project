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
let sumInt = 0;

function calculateBtn(value){
  switch (value){
    case '%':
      if(operator === '%'){
        sumInt %= parseFloat(sum) % parseFloat(concatNumber)
        result.innerHTML = sumInt
        operator = '%%'
        concatNumber = ''
        break
      }else if (operator === '++' || operator === '--' || operator === 'xx' || operator === '//' || operator === '%%'){
        sumInt %= parseFloat(concatNumber)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }
      result.innerHTML = `%${concatNumber}`
      concatNumber = ''
      operator = '%'
      break
    case 'CE':
      result.innerHTML = "0"
      sum = '';
      concatNumber = ''
      operator = ''
      sumInt = 0
      break
    case 'C':
      result.innerHTML = "0"
      sum = '';
      concatNumber = ''
      operator = ''
      sumInt = 0
      break
    case 'X': result.innerHTML = "X"
      break
    case '1/x':
      sumInt = 1 / parseFloat(concatNumber)
      result.innerHTML = sumInt
      break
    case 'x^2':
      sumInt = Math.pow(parseFloat(concatNumber), 2)
      result.innerHTML = sumInt
      break
    case 'x^1/2':
      sumInt = Math.pow(parseFloat(concatNumber), 1/2)
      result.innerHTML = sumInt
      break
    case '/':
      if(operator === '/'){
        sumInt /= parseFloat(sum) / parseFloat(concatNumber)
        result.innerHTML = sumInt
        operator = '//'
        concatNumber = ''
        break
      }else if (operator === '++' || operator === '--' || operator === 'xx' || operator === '//' || operator === '%%'){
        sumInt /= parseFloat(concatNumber)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }
      result.innerHTML = `/${concatNumber}`
      concatNumber = ''
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
      if(operator === 'x'){
        sumInt *= parseFloat(sum) * parseFloat(concatNumber)
        result.innerHTML = sumInt
        operator = 'xx'
        concatNumber = ''
        break
      }else if (operator === '++' || operator === '--' || operator === 'xx' || operator === '//' || operator === '%%'){
        sumInt *= parseFloat(concatNumber)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }
      result.innerHTML = `x${concatNumber}`
      concatNumber = ''
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
      if(operator === '-'){
        sumInt -= parseFloat(sum) - parseFloat(concatNumber)
        result.innerHTML = sumInt
        operator = '--'
        concatNumber = ''
        break
      }else if (operator === '++' || operator === '--' || operator === 'xx' || operator === '//' || operator === '%%'){
        sumInt -= parseFloat(concatNumber)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }
      result.innerHTML = `-${concatNumber}`
      concatNumber = ''
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
      if(operator === ''){
        sum += '2'
      }
      result.innerHTML = concatNumber
      break
    case '3':
      concatNumber += '3'
      if(operator === ''){
        sum += '3'
      }
      result.innerHTML = concatNumber
      break
    case '+':
      if(operator === '+'){
<<<<<<< Updated upstream
        sumInt += parseFloat(sum) + parseFloat(concatNumber)
        result.innerHTML = sumInt
        operator = '++'
        concatNumber = ''
        break
      }else if (operator === '++' || operator === '--' || operator === 'xx' || operator === '//' || operator === '%%'){
        sumInt += parseFloat(concatNumber)
        result.innerHTML = sumInt
        concatNumber = ''
        break
=======
        let sumInt = parseFloat(sum)
        result.innerHTML = `${sumInt += copy}`
        operator = ''
        break;
>>>>>>> Stashed changes
      }
      result.innerHTML = `+${concatNumber}`
      concatNumber = ''
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
      let copyConcat = concatNumber
      if(operator === '+' || operator === '++'){
        sumInt = parseFloat(sum) + parseFloat(copyConcat)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }else if(operator === '-' || operator === '--'){
        sumInt = parseFloat(sum) - parseFloat(copyConcat)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }else if(operator === 'x' || operator === 'xx'){
        sumInt = parseFloat(sum) * parseFloat(copyConcat)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }else if(operator === '/' || operator === '//'){
        sumInt = parseFloat(sum) / parseFloat(copyConcat)
        result.innerHTML = sumInt
        concatNumber = ''
        break
      }
  }
}