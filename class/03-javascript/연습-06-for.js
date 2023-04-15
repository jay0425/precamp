let persons = [
  { name: "철수", age: 17 },
  { name: "영희", age: 22 },
  { name: "훈이", age: 5 },
  { name: "맹구", age: 65 },
  { NavigationPreloadManager: "도비", age: 3 },
];
// undefined
persons;
// (5) [{…}, {…}, {…}, {…}, {…}]
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log("성인입니다");
  } else {
    console.log("미성년자입니다");
  }
}
// VM3811:5 미성년자입니다
// VM3811:3 성인입니다
// VM3811:5 미성년자입니다
// VM3811:3 성인입니다
// VM3811:5 미성년자입니다
// undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log(persons[count].name + "성인입니다");
  } else {
    console.log(persons[count].name + "미성년자입니다");
  }
}
// VM3953:5 철수미성년자입니다
// VM3953:3 영희성인입니다
// VM3953:5 훈이미성년자입니다
// VM3953:3 맹구성인입니다
// VM3953:5 도비미성년자입니다

//-------------------------------------------------
// 수학 객체

Math.floor(Math.random() * 1000000);
// 204625

String(Math.floor(Math.random() * 1000000));
// '773978'

String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '087691'

let result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// undefined
result;
// '519003'
result;
// '519003'
result;
// '519003'
