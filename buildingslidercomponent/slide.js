

//DECLARATION

const slideimg = document.querySelectorAll('.slide')
const leftbtn = document.querySelector('.slider__btn--left')
const rightbtn = document.querySelector('.slider__btn--right')
const dots = document.querySelectorAll('.dot')


//VARIABLE DECLARATION

let maxposition = slideimg.length;
let position = 0
let prevposition = 0

//FUNCTIONS

const gotoslide = function(slide){
    slideimg.forEach((img,index) => {
        img.style.transform = `translateX(${600*(index-slide)}px)`
    })
}

const nextslide = function(){
    if(position === maxposition-1){
        position = 0;
       
    }
    else{
        position++;
       
    }
    gotoslide(position)
    document.querySelector(`.dot--${prevposition}`).classList.remove('active') 
    prevposition = position
    document.querySelector(`.dot--${position}`).classList.add('active') 
   
}

const prevslide = function(){
    if(position == 0){
        position = 2;
       
    }
    else{
        position--;
       
    }
    gotoslide(position)
    document.querySelector(`.dot--${prevposition}`).classList.remove('active') 
    prevposition = position
    document.querySelector(`.dot--${position}`).classList.add('active') 
   
}



//CODE


slideimg.forEach((img,index) => {
    img.style.transition = `all 2s`
})


//INITIAL SLIDE 
gotoslide(0)



// MOUSE CLICK EVENT

rightbtn.addEventListener('click',nextslide)
leftbtn.addEventListener('click',prevslide)


// KEYBOARD CLICK EVENT

document.addEventListener('keydown',function(e){
    if(e.key == "ArrowRight"){
        nextslide();
    }
    else if(e.key == "ArrowLeft"){
         prevslide();
    }
})


// DOT CLICK EVENT


dots.forEach((dot,index) => {
    dot.classList.remove('active')
    document.querySelector(`.dot--${prevposition}`).classList.add('active')
    dot.addEventListener('click',function(){
           document.querySelector(`.dot--${prevposition}`).classList.remove('active')
           position = index
           document.querySelector(`.dot--${position}`).classList.add('active')
           gotoslide(position);
           prevposition = position
    })
})





