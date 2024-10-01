const count = document.querySelector('.countC');
const inputText = document.querySelector('.inputtext');

// Event ตอนปล่อยปุ่ม keyboard
inputText.addEventListener('keyup', () => {
    count.innerHTML = inputText.value.length;
});