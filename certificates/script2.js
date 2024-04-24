const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slide');
const length = images.length;
let slideNum = 1;



const bottom = document.querySelector('.bottom');

for (let i=0; i<length; i++){
  const div = document.createElement('div');
  div.className = 'buttons';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.buttons');
buttons[0].style.backgroundColor = 'grey';

const resetBg = ()=>{
  buttons.forEach((button)=>{
    button.style.backgroundColor = 'transparent';
  })
}

buttons.forEach((button, i)=>{
  button.addEventListener('click', ()=>{
    resetBg();
    slider.style.transform = `translateX(-${i*900}px)`;
    slideNum = i+1;
    button.style.backgroundColor = 'grey';
  });
});

const changeColor = ()=>{
  resetBg();
  buttons[slideNum-1].style.backgroundColor = 'grey'; 
};





const nextSlide = ()=>{
  slider.style.transform = `translateX(-${slideNum*900}px)`;
  slideNum++;
}

const prevSlide = ()=>{
  slider.style.transform = `translateX(-${(slideNum-2)*900}px)`;
  slideNum--;
}

const getFirstSlide = ()=>{
  slider.style.transform = `translateX(0px)`;
  slideNum = 1;
}

const getLastSlide = ()=>{
  slider.style.transform = `translateX(-${(length-1)*900}px)`;
  slideNum = length;
}


left.addEventListener('click',()=>{
    slideNum > 1 ? prevSlide() : getLastSlide();
    changeColor();
  })


right.addEventListener('click',()=>{
    slideNum < length ? nextSlide() : getFirstSlide();
    changeColor();
  })

