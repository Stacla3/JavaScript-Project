const inputText = document.querySelector('.inputtext');
const counter = document.querySelector('.counter');

inputText.addEventListener('keyup', () => {
    let world = inputText.value.toLowerCase();
    let vowelcount = 0;
    for(let i = 0; i < world.length; i++){

        //ใช้ function match ในการจับตัวใน array
        if(world[i].match(/[aeiou]/)){
            vowelcount ++; 
        }
    }
    counter.innerText = `${vowelcount}`;
})