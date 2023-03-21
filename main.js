
let header = document.querySelector(".header");
let xBut = document.querySelector('.X_but');
let xSpan1 = document.querySelector(".span1")
let xSpan2 = document.querySelector(".span2")

// xBut.addEventListener("click", addClass(header, 'header_de')
xBut.addEventListener("click", ()=>{
    header.classList.toggle('header_de')
    xSpan1.classList.toggle('X_active_1')
    xSpan2.classList.toggle('X_active_2')



}
)



