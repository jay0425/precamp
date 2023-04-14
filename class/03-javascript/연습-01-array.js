let classmates = ["철수", "영희", "훈이"];
// undefined;
classmates;
// (3)[("철수", "영희", "훈이")];
classmates[0];
// ("철수");
classmates[1];
// ("영희");
classmates[2];
// ("훈이");

classmates.includes("훈이");
// true;
classmates.includes("맹구");
// false;
classmates.length;
// 3;
classmates.push("맹구");
// 4;
classmates.includes("맹구");
// true;
classmates;
// (4)[("철수", "영희", "훈이", "맹구")];
classmates.length;
// 4;
classmates.pop();
("맹구");
classmates.length;
// 3;
classmates;
// (3)[("철수", "영희", "훈이")];

//----------------------------------------------

let developer = ["그릿", "타자", "의지", "끈기", "지능"];
// undefined
developer;
// (5) ['그릿', '타자', '의지', '끈기', '지능']
developer[0];
// '그릿'
developer[3];
// '끈기'
let dream = ["커리어 점프", "성공", "할 수 있다."];
// undefined
developer.push(dream);
// 6
developer;
// (6) ['그릿', '타자', '의지', '끈기', '지능', Array(3)]
developer.pop();
// (3) ['커리어 점프', '성공', '할 수 있다.']
developer.concat(dream);
// (8) ['그릿', '타자', '의지', '끈기', '지능', '커리어 점프', '성공', '할 수 있다.']
let result = developer.concat(dream);
// undefined
result;
// (8) ['그릿', '타자', '의지', '끈기', '지능', '커리어 점프', '성공', '할 수 있다.']
