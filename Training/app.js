console.log("Hello World");

// prompt("Your name");

//basic javascript ทบทวน!!!!
//การทำงานของ javascript จะทำงานจากบนลงล่าง

//1. String
let name = "Nickel";
const idcard = 3456;

//2. Number
let age = 30;
let height = 1.64;

//3. boolean
let check = true;

// let ages = prompt("ใส่อายุของคุณ");
// if (ages == 25) {
//   console.log("Pass");
// } else {
//   console.log("Not Pass");
// }

//4. array

let car = ["ferrari", "Ford", "Lambogini"];
if (car.includes("Ford")) {
  console.log("Nickel");
}

//5. object
let student = {
  name: "Nickel",
  age: 19,
  grade: 3.33,
};

let num = [2, 3, 4, 5];
console.log(student.grade);

let doubleNum = num.map((a) => {
  return a * 2;
});

doubleNum.forEach((s) => {
  console.log(s);
});

let ford = car.filter((s) => {
  if (s == "Ford") {
    return true;
  }
});

// console.log(num);
ford.forEach((s) => {
  console.log(s);
});

// const firstName = document.getElementById("firstName");
// const nickel = document.getElementsByClassName("showText");
// const clickButton = document.getElementsByClassName("clickme");
// clickButton[0].addEventListener("click", () => {
//   nickel[0].innerHTML = "<p>hello Nickel welcome back!</p>";
// });
// console.log(firstName.type);

// function changeGender(value){
//   console.log("changeGender: "+value)

//   let inputGenders = document.querySelectorAll('input[name="gender"]')
//   for(let i = 0;i < inputGenders.length; i++){
//     if(inputGenders[i].checked == true){
//       console.log(inputGenders[i].value)
//     }
//   }
// }

// const btnInterest = document.querySelector('.btnInterest')
// btnInterest.addEventListener('click', ()=>{
//   const inputBox = document.querySelectorAll('input[name="interesting"]')
//   let content = '<ul>'
//   for(let i = 0; i < inputBox.length; i++){
//     if(inputBox[i].checked){
//       content += '<li>'+inputBox[i].value+'</li>'
//     }
//   }
//   content += '</ul>'
//   const contents = document.querySelector('.contents')
//   contents.innerHTML = content
// })
const linkGoogle = document.querySelector('#linkToGoogle')
console.log(linkGoogle.getAttribute('href'))
linkGoogle.setAttribute('href', 'https://youtube.com')

function clicked(event){
  let dome = event.target
  dome.style.backgroundColor = 'blue'
}

let count = 0
let text = " Hello "
let nummber = 123
console.log(`${count} is a zero.`)
text = " nickel "
console.log(parseInt(text))
console.log(text.toUpperCase())
console.log(text.trim())
console.log(text == "nickel" ? "nickel" : "false")
console.log(Math.round(Math.random()*10))