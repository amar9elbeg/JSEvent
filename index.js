//Task 1

//Write function to show person's friends. Your answer should be the text of story
// example nicholas friends with uugnaa and jeje
function friend() {
  const story = document.getElementById("story");
  const firstPerson = document.getElementById("person").value;
  const firstfriend = document.getElementById("friend1").value;
  const secondfriend = document.getElementById("friend2").value;

  story.innerHTML = `${firstPerson} friends with ${firstfriend} and ${secondfriend}`;
}

const button = document.getElementById("lib-button");
button.addEventListener("click", friend);

// Task 2
//  write function find square number of square input, it should console log the answer,
// for example "The result of squaring the number  4 is  16" and  display the answer in in resolution div
function square() {
  const input = document.getElementById("square-input").value;
  console.log(input * input);
}

const squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", square);

//  write function find half number of half input, it should console log the answer,
// for example "Half of  30  is  15" and  display the answer in in resolution div
function half() {
  const input = document.getElementById("half-input").value;
  console.log(input / 2);
}

const halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", half);

//  write function find given percent of given whole number , it should console log the answer,
// for example "5 is  20%% of 25" and  display the answer in in resolution div

function percent() {
  const fractioninput = document.getElementById("percent1-input").value;
  const wholeinput = document.getElementById("percent2-input").value;
  console.log(`${(fractioninput / wholeinput) * 100} %`);
}

const fractionbutton = document.getElementById("percent-button");
fractionbutton.addEventListener("click", percent);

//  write function find area circle of given radius , it should console log the answer,
// for example "The area of circle with radius 10 is 314.1592653589793" and  display the answer in in resolution div

function areaFiner() {
  const areainput = document.getElementById("area-input").value;
  console.log(areainput * areainput * 3.14);
}
const areabutton = document.getElementById("area-button");
areabutton.addEventListener("click", areaFiner);
//Task 3
// write a function to change the statusReport. when click on Take off button, status should be "Houston! We have liftoff!".
// when click on abort mission button, it will alert "Aborting the mission" and status should be "We are aborting the mission"
const report = document.getElementById("statusReport");

function liftReport() {
  return (report.innerHTML = "Houston! We have liftoff!");
}
function abortButtonReport() {
  alert((report.innerHTML = "We are aborting the mission"));
  return (report.innerHTML = "We are aborting the mission");
}

const liftbutton = document.getElementById("liftoffButton");
liftbutton.addEventListener("click", liftReport);
const abortbutton = document.getElementById("abortMission");
abortbutton.addEventListener("click", abortButtonReport);

// Task 4
const KEYCODES = {
  f: 70,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const bmoState = {
  speed: 100,
  showing: true,
  facingRight: true,
  top: 0,
  left: 0,
};
//  when teacher button is clicked, broadcast an alert saying "i like event."
function teacherAlerct() {
  alert("i like event.");
}
const teacherbutton = document.getElementById("teacherButton");
teacherbutton.addEventListener("click", teacherAlerct);

//  when student button is clicked, make bmo disappear (use the opacity property)

function bmoDisappear() {
  const bmo = document.getElementById("bmo");
  if (bmoState.showing == true) {
    bmo.style.opacity = 0;
    bmoState.showing = false;
  } else {
    bmo.style.opacity = 1;
    bmoState.showing = true;
  }
}
const studentbutton = document.getElementById("studentButton");
studentbutton.addEventListener("click", bmoDisappear);
// me: when the space bar is pressed, bmo should flip from right to left, then inside that function add movement to bmo if you press any of up and down, left,right, it will move that direction
//hint event has keyCode property if the key code equals to KEYCODES up property, it will decrease top as same speed as bmoState speed.
//bmoState.top -= bmoState.speed;
// bmoEl.style.top = bmoState.top + "px";

// you: make the flipping action toggle as well.

// me: up arrow moves bmo up by 10px (toPx)
// hint: bmo is absolutely positioned, so you can use the top, right, bottom & left properties at will.

// you: give bmo 4 directions of movement
const bmo = document.getElementById("bmo");
function handleEvent(event) {
  if (event.keyCode === KEYCODES.f) {
  
    if (bmoState.facingRight === true) {
      bmo.style.transform = "rotateY(180deg)";
      bmoState.facingRight = false;
    } else {
      bmo.style.transform = "rotateY(0deg)";
      bmoState.facingRight = true;
    }
  }
}

window.addEventListener("keydown", handleEvent);
