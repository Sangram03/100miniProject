// const backGround = document.querySelector('body')
// backGround.body.style.

const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click' , function(e){
          console.log(e.target);
          
    }) 
    
})

