let firstName = document.querySelector('input[name=firstName]')
let lastName = document.querySelector('input[name=lastName]')
let telePhone = document.querySelector('input[name=telphone]')
let emails = document.querySelector('input[name=email]')

function submitData(){
    let genders = document.querySelector('input[name=gender]:checked')
    let checkErorBtnSubmit = document.querySelector('.checkbtnSubmit')
    try {
        let userData = {
            firstname: firstName.value,
            lastname: lastName.value,
            telphone: telePhone.value,
            email: emails.value,
            gender: genders.value
        }
        if(userData.firstname == null || userData.lastname == null || userData.email == null || userData.gender == null){
            checkErorBtnSubmit.innerHTML = 'can\'t not submit.'
        }else if(userData.telphone != 'ชาย'|| userData.telphone != 'หญิง' || userData.telphone != 'ไม่ระบุ'){
            checkErorBtnSubmit.innerHTML = 'can\'t not submit.'
        }
    }catch(error){
        checkErorBtnSubmit.innerHTML = 'can\'t not submit.'
        throw new Error("cannot submit data.")
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