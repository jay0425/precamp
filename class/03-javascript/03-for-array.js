const fruits = [
  { number: 1, tilte: "레드향" },
  { number: 2, tilte: "샤인머스켓" },
  { number: 3, tilte: "산청딸기" },
  { number: 4, tilte: "한라봉" },
  { number: 5, tilte: "사과" },
  { number: 6, tilte: "애플망고" },
  { number: 7, tilte: "딸기" },
  { number: 8, tilte: "천혜향" },
  { number: 9, tilte: "과일선물세트" },
  { number: 10, tilte: "귤" },
];

for (let count = 0; count < fruits.length; count++) {
  console.log(fruits[count].number + " " + fruits[count].tilte);
}
// VM5154:2 1 레드향
// VM5154:2 2 샤인머스켓
// VM5154:2 3 산청딸기
// VM5154:2 4 한라봉
// VM5154:2 5 사과
// VM5154:2 6 애플망고
// VM5154:2 7 딸기
// VM5154:2 8 천혜향
// VM5154:2 9 과일선물세트
// VM5154:2 10 귤

for (let count = 0; count < fruits.length; count++) {
  console.log(`${fruits[count].number} ${fruits[count].tilte}`);
}
// VM5268:2 1 레드향
// VM5268:2 2 샤인머스켓
// VM5268:2 3 산청딸기
// VM5268:2 4 한라봉
// VM5268:2 5 사과
// VM5268:2 6 애플망고
// VM5268:2 7 딸기
// VM5268:2 8 천혜향
// VM5268:2 9 과일선물세트
// VM5268:2 10 귤

for (let count = 0; count < fruits.length; count++) {
  console.log(
    `과일 차트 ${fruits[count].number}위는 ${fruits[count].tilte}입니다`
  );
}
// VM5340:2 과일 차트 1위는 레드향입니다
// VM5340:2 과일 차트 2위는 샤인머스켓입니다
// VM5340:2 과일 차트 3위는 산청딸기입니다
// VM5340:2 과일 차트 4위는 한라봉입니다
// VM5340:2 과일 차트 5위는 사과입니다
// VM5340:2 과일 차트 6위는 애플망고입니다
// VM5340:2 과일 차트 7위는 딸기입니다
// VM5340:2 과일 차트 8위는 천혜향입니다
// VM5340:2 과일 차트 9위는 과일선물세트입니다
// VM5340:2 과일 차트 10위는 귤입니다
