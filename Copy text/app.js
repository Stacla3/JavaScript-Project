const btn = document.querySelector('.btn');
const inputtext = document.querySelector('.Inputtext');

// copy text function
btn.addEventListener('click', () => {

    inputtext.select();
    inputtext.setSelectionRange(0, 999999999);
    navigator.clipboard.writeText(inputtext.value);
    btn.textContent = 'คัดลอกสำเร็จแล้ว!';

    setTimeout(() => {
        btn.textContent = 'คัดลอก';
    }, 3000);
});