
var test = "test test test";
console.log(test);


var btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = "rgba(" + random(255) + "," + random(255) + "," + random(255) + "," + 0.2 + ")";
  document.body.style.backgroundColor = rndCol;
}




