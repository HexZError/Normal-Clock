function DisplayTime(){
    let myTime = new Date();
    let h = myTime.getHours();
    let m = myTime.getMinutes();
    let s = myTime.getSeconds();
    let session = document.getElementById('session');
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

    if(12 >= h){
        session.innerHTML = "AM";
    }else{
        session.innerHTML = "PM";
    }
    if(h > 12){
        h = h - 12;
    }
}
setInterval(DisplayTime,10);

// Date Section
Mydate = new Date();
let d = Mydate.getDate();
let mo = Mydate.getMonth();
let y = Mydate.getFullYear();

let fullDate = d +"/"+ mo +"/"+ y;
document.getElementById('date').innerHTML = fullDate;
