const startWord = () => {
  let myWord = document.getElementById("myword").value; // 입력값
  let word = document.getElementById("word").innerText; // 제시어

  let lastWord = word[word.length - 1]; //제시어의 마지막 글자
  let firstWord = myWord[0]; //입력값의 첫글자

  if (firstWord === lastWord) {
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = myWord;
    document.getElementById("myword").value = "";
  } else {
    document.getElementById("result").innerText = "땡!";
    document.getElementById("myword").value = "";
  }
};
