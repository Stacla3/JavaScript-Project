let firstName = document.querySelector('input[name=firstName]')
let lastName = document.querySelector('input[name=lastName]')
let telePhone = document.querySelector('input[name=telphone]')
let emails = document.querySelector('input[name=email]')
let genders = document.querySelectorAll('input[name=gender]')

function submitData(){
    let checkErorBtnSubmit = document.querySelector('.checkbtnSubmit')
    let checkGender = ''
    for(let i = 0; i < genders.length; i++){
        if(genders[i].checked){
            checkGender = genders[i].value
        }
    }
    let userData = {
        firstname: firstName.value,
        lastname: lastName.value,
        telphone: telePhone.value,
        email: emails.value,
        gender: checkGender
    }
    console.log(userData)
    if(userData.firstname == '' || userData.lastname == '' || userData.telphone == '' || userData.email == '' || userData.gender == ''){
        checkErorBtnSubmit.innerHTML = 'can\'t not submit.'
    }
}

let checkErorFirstName = document.querySelectorAll('.checkErorFirstName')
firstName.addEventListener('keyup', ()=> {
    let checkEror = 0
    if(firstName.value.length != 0){
        for(let i = 0; i < firstName.value.length; i++){
            let char = firstName.value[i]
            if(!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')){
                checkErorFirstName[0].innerHTML = 'please enter a character only.'
                checkEror = 1
            }
        }
        if(checkEror == 0){
           checkErorFirstName[0].innerHTML = ''
        } 
    }else{
        checkErorFirstName[0].innerHTML = ''
    }
})
let checkErorLastName = document.querySelectorAll('.checkErorLastName')
lastName.addEventListener('keyup', ()=> {
    let checkEror = 0
    if(lastName.value.length != 0){
        for(let i = 0; i < lastName.value.length; i++){
            let char = lastName.value[i]
            if(!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')){
                checkErorLastName[0].innerHTML = 'please enter a character only.'
                checkEror = 1
            }
        }
        if(checkEror == 0){
            checkErorLastName[0].innerHTML = ''
        } 
    }else{
        checkErorLastName[0].innerHTML = ''
    }
})

let checkErortelphone = document.querySelectorAll('.checkErorTelphone')
telePhone.addEventListener('keyup', ()=> {
    let checkEror = 0
    if(telePhone.value.length != 0){
        for(let i = 0; i < telePhone.value.length; i++){
            let char = telePhone.value[i]
            if(!(Number.parseInt(char)) && char != '0'){
                checkErortelphone[0].innerHTML = 'please enter a number only.'
                checkEror = 1
            } 
        }
        if(checkEror == 0){
            checkErortelphone[0].innerHTML = ''
        }
    }else{
        checkErortelphone[0].innerHTML = ''
    }
})