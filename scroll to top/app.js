const btnToTop = document.querySelector('.go-to-up')
const rootElement = document.documentElement
document.addEventListener('scroll', showBtn)

function showBtn(){
    let resultScrollHeight = (rootElement.scrollHeight - rootElement.clientHeight)
    const result = (rootElement.scrollTop / resultScrollHeight)*100
    // window.scrollY == rootElement.scrollTop
    // window.innerHeight == rootElement.clientHeight ความสูง viewport
    if(result >= 40){
        btnToTop.classList.add('show-btn')
    }else{
        btnToTop.classList.remove('show-btn')
    }
}

btnToTop.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0
    })
})
