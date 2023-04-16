const number = () => {
  let result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("target").innerText = result;
  document.getElementById("target").style.color = "#" + result;

  let time = 180;

  setInterval(function () {
    if (time >= 0) {
      const min = Math.floor(time / 60);
      const sec = String(time % 60).padStart(2, "0");
      let result = min + ":" + sec;
      document.getElementById("time").innerText = result;
      time = time - 1;
    } else {
      document.getElementById("finish").disabled = true;
    }
  }, 1000);
};
