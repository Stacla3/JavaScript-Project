const counters = document.querySelectorAll('.counter');

// function การนับไปเรื่อยๆให้ถึง target
counters.forEach(counters => {
    counters.innerText = "0";
    const updatecounter = () => {
        const target = Number(counters.getAttribute('data-target'));
        const start = Number(counters.innerText);
        const increment = 100;
        if(start < target){
            counters.innerText = `${start+increment}`;
            setTimeout(updatecounter, 1);
        }else {
            counters.innerText = target;
        }
    };
    updatecounter();
});