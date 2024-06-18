function opensidebar(){
document.getElementById("openav").style.height="100%";
document.getElementById("closenav").style.height="100%";
document.getElementById("nodisplay").style.display="none";
document.getElementById("displayit").style.display="block";
}

function closesidebar(){
document.getElementById("openav").style.height="0%";
document.getElementById("closenav").style.height="0%";
document.getElementById("nodisplay").style.display="block";
document.getElementById("displayit").style.display="none";
}

function opennotice(){
document.getElementById("notice").style.height="100%";
}
function closenotice(){
document.getElementById("notice").style.height="0%";
}