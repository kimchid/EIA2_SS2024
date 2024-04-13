"use strict";
window.addEventListener("load", handleload);
function handleload(_event) {
    document.addEventListener("mousemove", setinfobox);
    document.body.addEventListener("click", loginfo);
    document.body.addEventListener("keyup", loginfo);
    let divs = document.querySelectorAll("div");
    console.log(divs);
    divs[0].addEventListener("click", loginfo);
    divs[0].addEventListener("keyup", loginfo);
    divs[1].addEventListener("click", loginfo);
    divs[1].addEventListener("keyup", loginfo);
}
function setinfobox(_event) {
    let x = _event.pageX;
    let span = document.querySelector("span");
    let y = _event.pageY;
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.innerHTML = "mousposition: " + x + " " + y + " " + "target: " + _event.target;
}
function loginfo(_event) {
    console.log(_event);
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
}
//# sourceMappingURL=eventinspector.js.map