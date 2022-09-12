const strokes = document.querySelectorAll("#heart path");

for (var i = 0; i < strokes.length; i++) {
  var stroke = strokes[i],
    length = strokes[i].getTotalLength();
  stroke.style.strokeDasharray = length;
  stroke.style.strokeDashoffset = length;
  stroke.style.animation = `line-animation 3s ease forwards ${i * 0.2}s, fill-animation 1s ease forwards ${strokes.length * 0.2 + 0.5}s `;
  stroke.style.filter = "drop-shadow(0px 0px 2px red)";
}
