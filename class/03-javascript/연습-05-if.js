// 데이터 타이브 연산자 실습 

1+1
//2
1+"만원"
//'1만원'
1+"1"
//'11'
1 - "1"
//0
"코드" + "캠프"
//'코드캠프'
"123" == 123
//true
"123" === 123
//false
true && true
//true
true && false
//false
true || true
//true
true || false
//true


//조건문 실습
if (1+1 === 2){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
//VM779:2 정답입니다.
//undefined
if (true){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
//VM809:2 정답입니다.
//undefined
if (!true){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
//VM821:4 틀렸습니다.
//undefined
if (0){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
//VM840:4 틀렸습니다.
//undefined
if (1){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
//VM850:2 정답입니다.

//조건문 실습2 

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐 초등학교"
}

if (profile.age >= 20) {
    console.log("성인입니다.")
} else if (profile.age > 8) {
    console.log ("학생입니다.")
} else if (profile.age > 0 ){
    console.log("어린이 입니다.")
} else {
    console.log("잘못 입력하였습니다.")
}

//수학 객체 
Math.floor(Math.random() * 1000000)
//658322
String (Math.floor(Math.random() * 1000000))
//'881668'
String (Math.floor(Math.random() * 1000000)).padStart(6,"0")
//'903200'
let result = String (Math.floor(Math.random() * 1000000)).padStart(6,"0")
//undefined
result
//'162770'
result
//'162770'