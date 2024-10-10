const nav = document.querySelector('.nav-container')
const cover = document.querySelector('.cover')


window.addEventListener('scroll', ()=> {
    if(window.scrollY > (cover.offsetHeight)){
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
})