const images = document.querySelectorAll('.container-image img')
const modalImg = document.querySelector('.modal')

images.forEach(img => {
    img.addEventListener('click', ()=> {
        modalImg.classList.add('open-img')
    })
});

const imgPopup = document.querySelector('.modal')
imgPopup.addEventListener('click', (event)=> {
    if(event.target.classList.contains('modal')){
        modalImg.classList.remove('open-img')
    }
})