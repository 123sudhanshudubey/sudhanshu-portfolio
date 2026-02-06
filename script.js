// typing animation
const roles=["AI ML Developer","Web Developer","Software Developer"];
let i=0,j=0,current="",isDeleting=false;

function type(){
current=roles[i];

if(!isDeleting){
document.querySelector(".typing").textContent=current.substring(0,j++);
if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
}else{
document.querySelector(".typing").textContent=current.substring(0,j--);
if(j<0){isDeleting=false;i=(i+1)%roles.length;}
}
setTimeout(type,100);
}
type();

// particles background
particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
move:{speed:1},
line_linked:{enable:true}
}
});

// scroll animation
window.addEventListener("scroll",()=>{
document.querySelectorAll("section").forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.style.opacity="1";
sec.style.transform="translateY(0)";
}
});
});
