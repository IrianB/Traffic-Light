const btn = document.querySelectorAll(".buttons button");
const box = document.getElementById("box");
const active = document.getElementById("active");
const notActive = document.getElementById("not-active");

active.addEventListener("click", () =>{
    btn.forEach(btn => btn.disabled = false);
});

notActive.addEventListener("click", () =>{
    btn.forEach(btn => btn.disabled = true);
});

btn[0].addEventListener("click",red);
btn[1].addEventListener("click",yellow);
btn[2].addEventListener("click",green);
btn[3].addEventListener("click",off);


function red(){
    box.style.background = "radial-gradient(rgb(228, 56, 56),rgb(139, 0, 0))";
}

function yellow(){
    box.style.background = "radial-gradient(rgb(210, 224, 81),rgb(243, 239, 10))";
}

function green(){
    box.style.background = "radial-gradient(rgb(119, 253, 78),rgb(5, 151, 5))";
}

function off(){
    box.style.background = "radial-gradient(#444, #111)";
}
