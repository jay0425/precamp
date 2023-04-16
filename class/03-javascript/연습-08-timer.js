let time = 10;
// undefined

setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000);

// VM1237:3 10
// VM1237:3 9
// VM1237:3 8
// VM1237:3 7
// VM1237:3 6
// VM1237:3 5
// VM1237:3 4
// VM1237:3 3
// VM1237:3 2
// VM1237:3 1
// VM1237:3 0

//--------------------------------------------------

let time = 180;
// undefined
setInterval(function () {
  if (time >= 0) {
    const min = Math.floor(time / 60);
    const sec = String(time % 60).padStart(2, "0");
    console.log(min + ":" + sec);
    time = time - 1;
  }
}, 1000);

// 3:00
// VM1924:5 2:59
// VM1924:5 2:58
// VM1924:5 2:57
// VM1924:5 2:56
// VM1924:5 2:55
// VM1924:5 2:54
// VM1924:5 2:53
// VM1924:5 2:52
// VM1924:5 2:51
