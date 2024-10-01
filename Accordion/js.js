const header = document.querySelectorAll('.header');
const content = document.querySelectorAll('.content');

for(let i = 0; i < header.length; i++){
    header[i].addEventListener('click', function(){
        header[i].classList.toggle('active');
        content[i].classList.toggle('active-content');
    })
}