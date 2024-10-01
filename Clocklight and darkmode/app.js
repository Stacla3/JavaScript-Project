const timeEl = document.querySelector('.time');

function setTime(){

    const time = new Date();
    const hours = time.getHours();
    const miniutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    //เวลาเดินอัตโนมัติ
    timeEl.innerHTML = `${hours}:${miniutes < 10 ? `0${miniutes}`: miniutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}
setTime();
setInterval(setTime, 1000);

const btn = document.querySelector('.toggle');
const colorb = document.querySelector('.container');

btn.addEventListener('click', (event) => {
    
    if(colorb.classList.contains('darkmode')){
        // กลางวัน
        colorb.classList.remove('darkmode');
        event.target.innerHTML = "Dark Mode";
    }else {
        // กลางคืน
        colorb.classList.add('darkmode');
        event.target.innerHTML = "Light Mode";
    }

});