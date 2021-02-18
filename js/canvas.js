var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

x1 = 90;
y1 = 400;
dx1 = 1;
dy1 = 2;
x2 = 1000;
y2 = 299;
dx2 = 2;
dy2 = 3;
x3 = 300;
y3 = 100;
dx3 = 3;
dy3 = 4;

function anim() {
  requestAnimationFrame(anim);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x1, y1, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.stroke();

  if (x1 + 25 >= canvas.width || x1 - 25 <= 0) {
    dx1 = -dx1;
  }
  if (y1 + 25 >= canvas.height || y1 - 25 <= 0) {
    dy1 = -dy1;
  }

  x1 += dx1;
  y1 += dy1;

  ctx.beginPath();
  ctx.arc(x2, y2, 35, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#FEED00";
  ctx.fill();
  ctx.stroke();

  if (x2 + 35 >= canvas.width || x2 - 35 <= 0) {
    dx2 = -dx2;
  }
  if (y2 + 35 >= canvas.height || y2 - 35 <= 0) {
    dy2 = -dy2;
  }

  x2 += dx2;
  y2 += dy2;

  ctx.beginPath();
  ctx.arc(x3, y3, 62, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#2E00EA";
  ctx.fill();
  ctx.stroke();

  if (x3 + 62 >= canvas.width || x3 - 62 <= 0) {
    dx3 = -dx3;
  }
  if (y3 + 62 >= canvas.height || y3 - 62 <= 0) {
    dy3 = -dy3;
  }

  x3 += dx3;
  y3 += dy3;
}

anim();
