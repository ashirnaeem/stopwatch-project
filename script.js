//global variable
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let shr = 0;
let sMin = 0;
let sSec = 0;
let sMsec = 0;
let count = 1;

let pTimer = {};
let timer = false;
// const result = [];
//start function
function start() {
  timer = true;
  //pause prop
    PauseProperties();
  // const pause = document.getElementById("pause");
  // pause.style.display = "block";
  // pause.style.color = "white";
  // pause.style.backgroundColor = "#FB657F";
  //start prop
  StartDisplayNone();
  // const start = document.getElementById("start");
  // start.style.display = "none";
  // start.style.backgroundColor = "#18A69D";
  // reset prop
  ResetDisableProperties();
  // const reset = document.getElementById("reset");
  // reset.style.cursor = "pointer";
  // reset.style.cursor = "not-allowed";
  // reset.style.backgroundColor = "";
  // reset.style.color = "#AAAAAA";

  //split prop
  SplitProperties();
  // const split = document.getElementById("split");
  // split.style.backgroundColor = "#F29E26";
  // split.style.color = "white";
  // split.style.cursor = "pointer";
  stopwatch();
  //split timer prop
  splitSHOW();
}

//  pause function
function pause() {
  timer = false;


  PauseDisable();
  // const pause = document.getElementById("pause");
  // pause.style.display = "none";
  // pause.style.backgroundColor = "#FB657F";
  // pause.style.color = "white";
  // const start = document.getElementById("start");
  // start.style.display = "block";
  // start.style.color = "white";
  StartDisplayBlock();
  
  if (timer === false) {
    ResetDisplayProperties();
    // const reset = document.getElementById("reset");
    // reset.style.backgroundColor = "#4487D0";
    // reset.style.cursor = "pointer";
    // reset.style.color = "white";
    SplitBlockProperties( );
    // const split = document.getElementById("split");
    // split.style.color = "#AAAAAA";
    // split.style.backgroundColor = "";
    // split.style.cursor = "no-drop";

  }
}
//split function
function split() {
  //for split timer screen
  //    const spShow=document.getElementById('splitShow');
  //    if(hr,min,sec<=9){
  //    spShow.innerHTML=`${"0" +hr} : ${"0" + min} : ${"0" + sec} . ${msec}`;
  //    }else{
  // spShow.innerHTML=`${hr} : ${min} : ${sec} . ${msec}`;
  // }

  if (timer === true) {
    //for text color
    //  const split1=document.getElementById('split');
    //  split1.style.backgroundColor='#F29E26';
    //  split1.style.color='white';
    document.getElementById("hr").style.display = "block";
    const splitTimerShower = document.getElementById("split-table-show");
    const splitTimer = { shr: shr, sMin: sMin, sSec: sSec, sMsec: sMsec };
    // result.push(split);

    if (JSON.stringify(pTimer) !== JSON.stringify(splitTimer)) {
      if ((shr, sMin, sSec <= 9)) {
        splitTimerShower.innerHTML += `<div class="split3"><span  class="counter">#${count}</span>  <span class=splitTime3 > ${
          "0" + shr
        } : ${"0" + sMin} : ${
          "0" + sSec
        } . ${sMsec}</span><span class=status> ${
          status ? "split" : "split"
        }   </span> </div>`;
        count++;
        pTimer = split;
      } else {
        splitTimerShower.innerHTML += `<div class="split3"><span class="counter">#${count}</span>  <span class=splitTime3> ${shr} : ${sMin} : ${sSec} . ${sMsec}</span><span class=status> ${
          status ? "split" : "split"
        }   </span> </div>`;
        count++;
        pTimer = split;
      }
    }
    //for split timer value
    shr = 0;
    sSec = 0;
    sMin = 0;
    sMsec = 0;
  }
  //for split time

  //split timer
}
//reset function
function reset() {
  if (timer === false) {
    // const reset = document.getElementById("reset");
    document.getElementById("hr").style.display = "none";
    document.getElementById("split-table-show").innerText = "";
    document.getElementById("hour").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("msec").innerText = "00";
    
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;

    // for split timer
    //  document.getElementById("s-hour").innerText = "00";
    //  document.getElementById("s-minutes").innerText = "00";
    //  document.getElementById("s-seconds").innerText = "00";
    //  document.getElementById("s-msec").innerText = "00";

    //for split timer value
    shr = 0;
    sSec = 0;
    sMin = 0;
    sMsec = 0;

    //counter
    count = 1;
  }
  // if (timer === true) {
  // const reset = document.getElementById("reset");

  // const start=document.getElementById('start');
  // start.style.backgroundColor='';
  // start.style.color='#AAAAAA';
  // const pause = document.getElementById("pause");
  // pause.style.backgroundColor = "";
  // const split = document.getElementById("split");
  // split.style.color = "#AAAAAA";
  // split.style.backgroundColor = "";
  // start.style.display='block';
  // pause.style.display = "none";
  // start.style.backgroundColor='#18A69D';
  // start.style.color='white'
  // }
}
//stopwatch function
function stopwatch() {
  if (timer == true) {
    msec = msec + 1;

    if (msec > 99) {
      sec = sec + 1;
      msec = 0;
    }
    if (sec > 59) {
      min = min + 1;
      sec = 0;
    }
    if (min > 59) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    //mille seconds//
    if (msec <= 9) {
      var up_msec = msec == 0 ? "00" : "0" + msec;
    } else {
      up_msec = msec;
    }

    //seconds//
    if (sec <= 9) {
      var up_sec = "0" + sec;
    } else {
      up_sec = sec;
    }

    //minutes//
    if (min <= 9) {
      var up_min = "0" + min;
    } else {
      up_min = min;
    }

    //hours//
    if (hr <= 9) {
      var up_hr = "0" + hr;
    } else {
      up_hr = hr;
    }

    document.getElementById("msec").innerHTML = up_msec;
    document.getElementById("seconds").innerHTML = up_sec;
    document.getElementById("minutes").innerHTML = up_min;
    document.getElementById("hour").innerHTML = up_hr;
    setTimeout(stopwatch, 1);
  }
}
//split show function
function splitSHOW() {
  if (timer == true) {
    sMsec = sMsec + 1;

    if (sMsec > 99) {
      sSec = sSec + 1;
      sMsec = 0;
    }
    if (sSec > 59) {
      sMin = sMin + 1;
      sSec = 0;
    }
    if (sMin > 59) {
      shr = shr + 1;
      sMin = 0;
      sSec = 0;
    }
  }
  if (sMsec <= 9) {
    var up_sMsec = "0" + sMsec;
  } else {
    up_sMsec = sMsec;
  }
  if (sSec <= 9) {
    var up_sSec = "0" + sSec;
  } else {
    up_sSec = sSec;
  }
  if (sMin <= 9) {
    var up_sMin = "0" + sMin;
  } else {
    up_sMin = sMin;
  }
  if (shr <= 9) {
    var up_shr = "0" + shr;
  } else {
    up_sMin = sMin;
  }

  document.getElementById("split-Timer-Text").style.display = "none";
  const splitTime = document.getElementById("split-Timer");
  splitTime.style.display = "block";
  document.getElementById("s-hour").innerHTML = up_shr;
  document.getElementById("s-minutes").innerHTML = up_sMin;
  document.getElementById("s-seconds").innerHTML = up_sSec;
  document.getElementById("s-msec").innerHTML = up_sMsec;
  setTimeout(splitSHOW, 2);
}

function PauseProperties(){
      const pause = document.getElementById("pause");
  pause.style.display = "block";
  pause.style.color = "white";
  pause.style.backgroundColor = "#FB657F"; 
}
function StartDisplayNone(){
  const start = document.getElementById("start");
  start.style.display = "none";
  start.style.backgroundColor = "#18A69D";
}
function ResetDisableProperties(){
  const reset = document.getElementById("reset");
  reset.style.cursor = "pointer";
  reset.style.cursor = "not-allowed";
  reset.style.backgroundColor = "";
  reset.style.color = "#AAAAAA";
}
function SplitProperties(){
  const split = document.getElementById("split");
  split.style.backgroundColor = "#F29E26";
  split.style.color = "white";
  split.style.cursor = "pointer";
}
function PauseDisable(){
  const pause = document.getElementById("pause");
  pause.style.display = "none";
  pause.style.backgroundColor = "#FB657F";
  pause.style.color = "white";
}
function StartDisplayBlock(){
  const start = document.getElementById("start");
  start.style.display = "block";
  start.style.color = "white";
}
function ResetDisplayProperties(){
  const reset = document.getElementById("reset");
    reset.style.backgroundColor = "#4487D0";
    reset.style.cursor = "pointer";
    reset.style.color = "white";
}
function SplitBlockProperties(){
  const split = document.getElementById("split");
    split.style.color = "#AAAAAA";
    split.style.backgroundColor = "";
    split.style.cursor = "no-drop";

}