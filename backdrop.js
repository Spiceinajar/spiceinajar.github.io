let canvas = document.getElementById('login_anim');
let ctx = canvas.getContext('2d');

function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
};

var spots;

const loopTime = 100;
function regen() {
  canvas.width = canvas.clientWidth;
  canvas.height = document.body.scrollHeight;

  spots = [];
  for (let i = 0; i < loopTime; i++) {
    spots.push({x:Math.random() * canvas.width, y:Math.random() * canvas.height, rad:Math.floor(Math.random() * (10 - 5 + 1) + 5), depth:Math.random() * 5});
  };
}
regen()

function updateAnim(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    var x;
    var y;
    var x2;
    var y2;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var s in spots) {
        let spot = spots[s];

        x = (spot.x - ((mouseX / 16) / spot.depth) / 2)
        y = (spot.y - ((mouseY / 16) / spot.depth) / 2)

        drawCircle(ctx, x, y, spot.rad, `rgb(0, 150, 0)`, `rgb(0, 150, 0)`, 1);

        for (var s in spots) {
          let spot = spots[s];

          x2 = (spot.x - ((mouseX / 16) / spot.depth) / 2)
          y2 = (spot.y - ((mouseY / 16) / spot.depth) / 2)

          if ((Math.sqrt((Math.pow(x-x2,2))+(Math.pow(y-y2,2)))) < 200) {
            ctx.beginPath(); // Start a new path
            ctx.moveTo(x, y); // Move the pen to (30, 50)
            ctx.lineTo(x2, y2); // Draw a line to (150, 100)
            ctx.stroke();
          }
        }
    };
};

window.onresize = regen;
document.addEventListener('mousemove', updateAnim);