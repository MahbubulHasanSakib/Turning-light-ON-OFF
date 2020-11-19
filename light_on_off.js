/*Author:Mahbubul Hasan Sakib*/


var Switch = document.querySelector('#switch_off');
var c=1;
Switch.addEventListener("click",function()
{
    var audio = new Audio('switch-1.mp3');
    audio.play();
    if (c % 2 != 0) {
        document.getElementById("heading").innerHTML = "<b>LIGHT ON&#128578<b>";
        document.getElementById("heading").style.color = "#f6d334";
        document.getElementById('light_off').src = "light_on.png";
       // document.getElementById('light_off').style.backgroundColor = "lightyellow";
        document.getElementById('light_off1').src = "light_on.png";
        //document.getElementById('light_off1').style.backgroundColor = "lightyellow";
        document.getElementById('light_off2').src = "light_on.png";
        //document.getElementById('light_off2').style.backgroundColor = "lightyellow";
        document.getElementById('switch_off').src = "switch_on.JPG";
    }
    else {
        document.getElementById("heading").innerHTML = "LIGHT OFF&#128577"
        document.getElementById("heading").style.color = "grey";
        document.getElementById('light_off').src = "light_off.png";
       // document.getElementById('light_off').style.backgroundColor = "lightgrey";
        document.getElementById('light_off1').src = "light_off.png";
        //document.getElementById('light_off1').style.backgroundColor = "lightgrey";
        document.getElementById('light_off2').src = "light_off.png";
        //document.getElementById('light_off2').style.backgroundColor = "lightgrey";
        document.getElementById('switch_off').src = "switch_off.JPG";
    }
    c++;
})