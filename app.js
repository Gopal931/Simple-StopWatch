let [seconds,minutes,hours]=[0,0,0];
let displayTime=document.querySelector(".displayTime");
let timer=null;
function stopwatcch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    displayTime.innerHTML=hours+":"+minutes+":"+seconds;
}

function watchStart(){
   if(!timer){
    timer= setInterval(stopwatcch,1000);
   }
  
}

function lap(){
    let data=displayTime.innerHTML;
    let ol=document.querySelector("ul");
    let li=document.createElement("li");
    li.style="border-buttom:1px solid white";
    li.innerHTML=data;
    ol.appendChild(li);
}
function reset(){
    if(timer!=null){
        clearInterval(timer);
        timer=null;
          }
          [hours,minutes,seconds]=[0,0,0];
          displayTime.innerHTML="0"+hours+":"+"0"+minutes+":"+"0"+seconds;
          //clear lap field
          let ol = document.querySelector("ul");
    ol.innerHTML = ""; // Clear all lap entries

}
function pause() {
    if (timer) {
        clearInterval(timer);
        timer = null; // Set timer to null so it can be restarted
    }
}