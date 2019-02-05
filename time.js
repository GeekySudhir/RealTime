
function interv() {
  var data = new Date();
  var hour = data.getHours();
  var sec = data.getSeconds();
  var min = data.getMinutes();

  let ampm = "",day="";
  if (data.getHours() >= 12) {
    ampm = "PM";
    day="Night"
  } else {
    ampm = "AM";
    day="day";
  }

if(hour==0){
  hour=12;
}
if(hour>12){
  hour=hour-12;
}


hour=(hour<10)?"0"+hour:hour;
min=(min<10)?"0"+min:min;
sec=(sec<10)?"0"+sec:sec;
  document.getElementById("clock").innerHTML = '<span>' + hour + '</span>'
                    + '<span>' + min + '</span>'
                    + '<span>' + sec + '</span>'
                    +'<span>' + ampm + '</span>';
              
                 setTimeout(interv, 1000);
}
interv();