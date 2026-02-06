// typing effect
const roles=["MCA Student","Web Developer","AI Enthusiast","Frontend Designer"];
let i=0,j=0,current="",deleting=false;

function type(){
let el=document.getElementById("typing");

if(!deleting && j<=roles[i].length){
current=roles[i].substring(0,j++);
}
else if(deleting && j>=0){
current=roles[i].substring(0,j--);
}

el.innerHTML=current;

if(j==roles[i].length) deleting=true;
if(j==0 && deleting){
deleting=false;
i++;
if(i==roles.length) i=0;
}

setTimeout(type,deleting?50:120);
}

type();


// particles background
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true},
color:{value:"#3b82f6"}
}
});
