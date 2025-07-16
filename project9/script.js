// const backGround = document.querySelector('body')
// backGround.body.style.

const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
          if (e.target.id == 'gray') {
            body.style.backgroundColor = e.target.id;
            
          }
          if (e.target.id == 'white') {
            body.style.backgroundColor = e.target.id;
            
          }
          if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id;
            
          }
          if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id;
            
          }
          
    }) 
    
})

