let isStarted = false;

const number = () => {
  if (isStarted === false) {
    // 타이머가 작동중이 아닐때
    isStarted = true;
    document.getElementById("finish").disabled = false;

    let result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = result;
    document.getElementById("target").style.color = "#" + result;

    let time = 10;
    let timer;
    timer = setInterval(function () {
      if (time >= 0) {
        const min = Math.floor(time / 60);
        const sec = String(time % 60).padStart(2, "0");
        let result = min + ":" + sec;
        document.getElementById("time").innerText = result;
        time = time - 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        console.log("타이머 작동중");
        clearInterval(timer);
      }
    }, 1000);
  } else {
    // 타이머가 작동중일때
  }
};
