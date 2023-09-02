var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");
var rotatevalue = circle.style.transform || "rotate(0deg)";
var rotateSum;

upbtn.onclick = function() {
    rotateSum = rotatevalue + " rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;
};

downbtn.onclick = function() {
    rotateSum = rotatevalue + " rotate(90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;
};
