window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = ["#60d394","#6ca8c4","#bfda4a","#d360a3","#9f60d3","#4755d4"];


 //Sound here
 pads.forEach((pad,index) =>{
    pad.addEventListener('click',function(){
        sounds[index].currentTime=0;
        sounds[index].play();
        createBubbles(index);
    });
 });  
 
 
 //function that add visual on clicking pad

 const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener('animationend',function(){
        visual.removeChild(this)
    });
 };
});


