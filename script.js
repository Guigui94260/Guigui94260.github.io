//Task1
document.getElementById("first").src = "flower2.png";

//Task2
document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";

//Task3
document.getElementById("great").innerHTML = "You are great !";

//Task4
let image = document.createElement("img");
document.getElementById("new_element").appendChild(image).src = "flower2.png";

//Task5
let spans = document.getElementById("rainbow").querySelectorAll('span');
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
}

//Task6
var changeSrc = function(event) {
  if (event.target.src) {
    let filename = event.target.src.replace(/^.*[\\\/]/, '');
        if (filename === "flower1.png") {
    event.target.src = "flower2.png";
  } 
  else {
        event.target.src = "flower1.png";
    }
  }
};
document.getElementById("event").addEventListener("mouseover", changeSrc);
