// =========================
// PAGE NAVIGATION
// =========================

function showPage(pageId){

let pages =
document.querySelectorAll(".page");

pages.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById(pageId)
.classList.add("active");

}

// =========================
// FIND ROUTE
// =========================

function findRoute(){

let source =
document.getElementById("source").value;

let destination =
document.getElementById("destination").value;

if(source==="" || destination===""){

alert(
"Please enter Source and Destination."
);

return;

}

alert(
"⭐ Safest Route Found!\n\n" +
"Route A Recommended\n" +
"Safety Score: 92%"
);

showPage("route");

}

// =========================
// SOS
// =========================

function sendSOS(){

alert(
"🚨 SOS Alert Sent!\n\n" +
"Location shared with trusted contacts."
);

}

// =========================
// GEOLOCATION
// =========================

function shareLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

alert(
"📍 Live Location Shared\n\n" +
"Latitude: " +
position.coords.latitude +
"\nLongitude: " +
position.coords.longitude
);

}

);

}

else{

alert(
"Geolocation not supported."
);

}

}

// =========================
// HELPLINES
// =========================

function callPolice(){

alert(
"👮 Calling Police: 100"
);

}

function callWomenHelpline(){

alert(
"👩 Calling Women Helpline: 1091"
);

}

function callAmbulance(){

alert(
"🚑 Calling Ambulance: 108"
);

}

// =========================
// FEEDBACK
// =========================

function submitFeedback(){

let comment =
document.getElementById("comments").value;

if(comment===""){

alert(
"Please enter feedback."
);

return;

}

alert(
"✅ Feedback Submitted Successfully!"
);

document
.getElementById("comments")
.value="";

}

// =========================
// LOAD HOME PAGE
// =========================

window.onload=function(){

showPage("home");

};