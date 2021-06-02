const stopwatch = document.getElementById('timer');
const list = document.getElementById('list')
let seconds=0;
let minutes=0;
let hours=0;
let working = false;

function clock(){
    if(working==true){
        seconds=parseInt(seconds);
        minutes=parseInt(minutes);
        hours=parseInt(hours);
        seconds= seconds + 1;
    
    if (seconds == 60){
        seconds = 0;
        minutes = minutes + 1; 
    }
    if (minutes == 60){
        minutes = 0;
        hours = hours + 1; 
    }
    if(seconds<10 || seconds==0){
        seconds = '0'+seconds;
    }
    if(minutes<10 || minutes==0){
        minutes = '0'+minutes;
    }
    if(hours<10 || hours==0){
        hours = '0'+hours;
    }
    stopwatch.innerText=hours + ':' + minutes + ':' + seconds;
    setTimeout("clock()", 1000);
}
}
function start(){
if(working == false){
    working = true;
    clock();
}}
function stop(){
if(working==true){
    working = false;
}
}
function reset(){
 working == false;
 seconds=0;
 minutes=0;
 hours=0;
 stopwatch.innerText='00:00:00';
 for (let i = 0; i < 5; i++) {
     list.children[i].innerText="";
     
 }
}
function lap(){
    for (let i = 0; i < 5; i++) {
        if (list.children[i].innerText=='') {
            list.children[i].innerText=stopwatch.innerText;
            break;
        }
        
    }
}
