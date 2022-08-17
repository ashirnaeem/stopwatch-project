//global variable
let hr=0;
let min=0;
let sec=0;
let msec=0;
let count=1;

let pTimer={};
let timer = false;
const result=[];
//start function
 function start(){
    timer=true;
    const pause=document.getElementById('pause');
    pause.style.display="block";
    const start=document.getElementById('start');
    start.style.display="none";
    start.style.backgroundColor='#18A69D'
   
    const reset=document.getElementById('reset');
    reset.style.backgroundColor='';
    reset.style.color='#AAAAAA';
    pause.style.color='white';
    pause.style.backgroundColor='#FB657F';
    const split=document.getElementById('split');
    split.style.color='#AAAAAA';
    split.style.backgroundColor='';
    stopwatch();
}
//  pause function
function pause(){
    const pause=document.getElementById('pause');
    pause.style.display="none";
    const start=document.getElementById('start');
    start.style.display="block";
    timer=false;
    pause.style.backgroundColor='#FB657F';
    pause.style.color='white';
    start.style.color='white';
    
}
//split function
function split(){
 document.getElementById('hr').style.display='block';
    //for text color
    const split1=document.getElementById('split');
    split1.style.backgroundColor='#F29E26';
    split1.style.color='white';
    //for split timer screen
   const spShow=document.getElementById('splitShow');
   if(hr,min,sec<=9){
   spShow.innerHTML=`${"0" +hr} : ${"0" + min} : ${"0" + sec} . ${msec}`;
   }else{
    spShow.innerHTML=`${hr} : ${min} : ${sec} . ${msec}`;
}
  //for split display
  const shower=document.getElementById('show');
  const split={hr:hr,min:min,sec:sec,msec:msec};
  // result.push(split);
 // timeEntry();
if(JSON.stringify( pTimer)!==JSON.stringify(split)  ){
  
if(hr,min,sec<=9){
    shower.innerHTML+=`<div class="split3"><span  class="counter">#${count }</span>  <span class=splitTime3 > ${"0" + hr} : ${"0" + min} : ${"0" + sec} . ${ msec}</span><span class=status> ${status?"split":"split"}   </span> </div>`
    count++;
    pTimer=split;
}
else{
    shower.innerHTML+=`<div class="split3"><span class="counter">#${count }</span>  <span class=splitTime3> ${ + hr} : ${ + min} : ${ + sec} . ${ msec}</span><span class=status> ${status?"split":"split"}   </span> </div>`
    count++;
    pTimer=split;
}

}
}
//reset function
function reset(){
document.getElementById('hour').innerText="00";
document.getElementById('minutes').innerText="00";
document.getElementById('seconds').innerText="00";
document.getElementById('msec').innerText="00";
document.getElementById('show').innerText="";
document.getElementById('splitShow').innerText="";
count=1;
const reset=document.getElementById('reset');
reset.style.backgroundColor='#4487D0';
reset.style.color='white';
const start=document.getElementById('start');
start.style.backgroundColor='';
start.style.color='#AAAAAA';
const pause=document.getElementById('pause');
pause.style.backgroundColor='';
const split=document.getElementById('split');
split.style.color='#AAAAAA';
split.style.backgroundColor='';
document.getElementById('hr').style.display='none';

}
//stopwatch function
function stopwatch(){
    if(timer==true){
   msec=msec+1;

if(msec>99){
    sec=sec+1;
    msec=0;
}
if(sec>59){
    min=min+1;
    sec=0;
}
if(min>59){
    hr=hr+1;
    min=0;
    sec=0;
}



//mille seconds//
if(msec<=9){
    var up_msec=msec==0 ? "00" : "0"+msec;
}else{
    up_msec=msec;
}




//seconds//
if(sec<=9){
    var up_sec="0"+sec;
    
}else{
    up_sec=sec;
}


//minutes//
if(min<=9){
    var up_min="0"+min;
}
else{
    up_min=min;
}


//hours//
if(hr<=9){
    var up_hr="0"+hr;
}else{
    up_hr=hr;
}



document.getElementById('msec').innerHTML=up_msec;
document.getElementById('seconds').innerHTML=up_sec;
document.getElementById('minutes').innerHTML=up_min;
document.getElementById('hour').innerHTML=up_hr;
        setTimeout(stopwatch,10);
    }
}