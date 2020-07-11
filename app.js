var minutes=0;
var second=0;
var msec=0;
var minhead= document.getElementById("minutes");
var sechead= document.getElementById("second");
var msechead= document.getElementById("msec");
var interval;

function time(){
    msec++
msechead.innerHTML=msec;
if(msec >= 100){
second++
sechead.innerHTML=second;
msec=0;
}
else if( second >= 60){
minutes++
minhead.innerHTML=minutes;
second=0;
}
}
function start(){
document.getElementById("abc").disabled=true;
interval=setInterval(time,10)
}
function stop(){
    document.getElementById("abc").disabled=false;
    clearInterval(interval);
}
function reset(){
    minutes=00;
    second=00;
    msec=00;
    minhead.innerHTML=minutes;
    sechead.innerHTML=second;
    msechead.innerHTML=msec;
    stop()
}
function record(){
    var rec=document.getElementById("recordings");
    var w="<ul><li>";
    var x= "</li></ul>";
    var y= "<h2>" + w + minutes + " : " + second + " : " + msec + x + "</h2>";
    rec.innerHTML += y;

}