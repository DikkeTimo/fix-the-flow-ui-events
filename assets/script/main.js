let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("click", jumpHandler);
frontend.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  frontend.classList.toggle("jump");
}
/----------------------------2----------------------------/;

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("mouseover", rotatehandler);

function rotatehandler() {
  design.classList.toggle("rotate");
}

/--------------------------3------------------------------/;

let and = document.querySelector("a:nth-of-type(3)");

and.addEventListener("dblclick", swipehandler);

function swipehandler() {
  and.classList.toggle("swipe");
}

/------------------------4-------------------------------/;

let key = document.querySelector("a:nth-of-type(4)");

key.addEventListener("keyup", mouseIsMoving);

function mouseIsMoving() {
  key.classList.toggle("mouse");
}

/---------------------5-------------------------------------/;

let vibration = document.querySelector("a:nth-of-type(5)");

vibration.addEventListener("mouseout", mouse);

function mouse() {
  vibration.classList.toggle("vibration");
}

/------------------------------6-----------------------------/;

let faldown = document.querySelector("a:nth-of-type(6)");

faldown.addEventListener("blur", windowup);

function windowup() {
  faldown.classList.toggle("windowmove");
}

/--------------------------------7------------------------------/;

let scale = document.querySelector("a:nth-of-type(7)");

scale.addEventListener("mousewheel", scaleup);

function scaleup() {
  scale.classList.toggle("scale");
}

/--------------------------------8--------------------------------/;

let flow = document.querySelector("a:nth-of-type(8)");

flow.addEventListener("click", slide);

function slide() {
  flow.classList.toggle("slide");
}

/---------------------------------9---------------------------------/;

let flip = document.querySelector("a:nth-of-type(9)");

flip.addEventListener("keydown", flipdown);

function flipdown() {
  flip.classList.toggle("flipup");
}

/--------------------------------10------------------------------------/;

let loopp = document.querySelector("a:nth-of-type(10)");

loopp.addEventListener("click", loopit);

function loopit() {
  loopp.classList.toggle("loop");
}
