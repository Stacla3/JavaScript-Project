const opendetail = document.querySelector('.openDetail');
const closebtn = document.querySelector('.closeBtn');
const content_container = document.querySelector('.modal-container');

//เปิด content
opendetail.addEventListener('click', () => {
    content_container.classList.add('show');
});

//ปิด content
closebtn.addEventListener('click', () => {
    content_container.classList.remove('show');
});