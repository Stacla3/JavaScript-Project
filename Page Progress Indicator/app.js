//Event scroll
window.onscroll = () => {
    scrollProgress();
}

const containerBar = document.querySelector('.scroll-indicator');
const progressBar = document.querySelector('.progress-bar');

function scrollProgress(){

    //ความสูงของ document
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    //window.innerHeight == document.documentElement.clientHeight;

    //ความสูงตอนกำลังscrollออกมาเรื่อยๆ
    const result = (scrollTop / pageHeight)*100;

    containerBar.style.opacity = 1;
    progressBar.style.width = `${result}%`;
}