let secss = 0
function timersetup(){
    let month = "February"
    let year = "2026";
    let space = " "
    let specialevent = "Valentine's has happened recently";
    const monthyear = month + space + year;
        document.getElementById("time1").innerHTML = monthyear;
    document.getElementById("specialthing").innerHTML = specialevent;
    let ff = 1;
    while (ff===1){
secss = secss + 1;
document.getElementById("seconds").innerHTML = secss;
    };
    }
