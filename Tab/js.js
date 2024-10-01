const tablink = document.querySelectorAll('.tablinks')
const tabcontent = document.querySelectorAll('.content')

for(let i = 0; i < tablink.length; i++){
  tablink[i].addEventListener('click', function(){
    for(let i = 0; i < tablink.length; i++){
      tablink[i].classList.remove('activelink');
    }
    tablink[i].classList.add('activelink');
    for(let i = 0; i < tabcontent.length; i++){
      tabcontent[i].classList.remove('activecontent');
    }
    tabcontent[i].classList.add('activecontent');
  })
}
tablink[0].classList.add('activelink');
tabcontent[0].classList.add('activecontent');