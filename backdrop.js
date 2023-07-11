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

function regen() {
  let loopTime = canvas.clientWidth / 10;
  canvas.width = canvas.clientWidth;
  canvas.height = document.body.scrollHeight;

  spots = [];
  for (let i = 0; i < loopTime; i++) {
    spots.push({x:Math.random() * canvas.width, y:Math.random() * canvas.height, rad:Math.floor(Math.random() * (10 - 5 + 1) + 5), depth:Math.random() * 5, velocity:{x:Math.random() - .5, y:Math.random() - .5}});
  };
}
regen()

function updateAnim() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    var x;
    var y;
    var x2;
    var y2;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var s in spots) {
        let spot = spots[s];

        spots[s].x += spot.velocity.x;
        spots[s].y += spot.velocity.y;

        if (spot.x < 0) {
          spots[s].velocity.x = -spots[s].velocity.x;
        }
        if (spot.y < 0) {
          spots[s].velocity.y = -spots[s].velocity.y;
        }
        if (spot.x > canvas.width) {
          spots[s].velocity.x = -spots[s].velocity.x;
        }
        if (spot.y > canvas.height) {
          spots[s].velocity.y = -spots[s].velocity.y;
        }

        x = spot.x
        y = spot.y

        drawCircle(ctx, x, y, spot.rad, `rgb(0, 100, 0)`, `rgb(0, 100, 0)`, 1);

        for (var s in spots) {
          let spot = spots[s];

          x2 = spot.x
          y2 = spot.y

          if ((Math.sqrt((Math.pow(x-x2,2))+(Math.pow(y-y2,2)))) < 120) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
    };
};

setInterval(updateAnim, 16);

//window.onresize = regen;