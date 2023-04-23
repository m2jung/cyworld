// 배열 만들기
const blanks = []                            // 비어있는 배열
const numbers = [2, 10, 7, 3.3]              // 숫자들로 이루어진 배열
const classmates = ["철수", "영희", "훈이"]     // 문자들로 이루어진 배열

// 배열의 길이 구하기 _ length
classmates.length          // 3

// 배열의 값 꺼내기
classmates[0]              // "철수"
classmates[1]              // "영희"

// 배열의 맨 뒤에 추가하기 _ push
classmates.push("민지")     // ["철수", "영희", "훈이", "민지"]

// 배열의 맨 마지막 삭제하기 _ pop
classmates.pop()          // ["철수", "영희", "훈이"]

// 배열의 요소 정렬하기, 거꾸로 뒤집기 _ sort
classmates.sort()               // ["영희", "철수", "훈이"]

// 배열이 가지고있는 데이터 확인하기 _ includes
classmates.includes("철수")     // true
classmates.includes("영구")     // false

const classmates1 = ["철수", "영희", "훈이"]
const classmates2 = ["민지", "민수"]

// 배열 2개 연결하기 _ concat
classmates1.concat(classmates2**)     // ["철수", "영희", "훈이", "민지", "민수"]

// 배열을 문자로 만들기 _ join
classmates.join(', ')     // 철수, 영희, 훈이
classmates.join("와 ")    // 철수와 영희와 훈이

// 배열 분리하기 _ splice
const classmates = ["철수", "영희", "훈이"]
classmates.splice(0, 1)     // ["철수"]

// 배열에서 원하는 요소만 뽑아내기 _ filter
classmates.filter((data) => (data === "영희"))     // ["영희"]
classmates.filter((data) => (data !== "영희"))     // ["철수", "훈이"]

// 배열에서 모든 요소 변경하기 _ map
classmates.map((data) => (data + "어린이"))         // ["철수어린이", "영희어린이", "훈이어린이"]

// class/03-javascript/

const classmate = ["은정","혜원","재훈","예봄","정훈"]

classmate[0]
// 결과 은정
classmate[1]
// 결과 혜원
classmate[2]
// 결과 재훈
classmate[3]
// 결과 예봄
classmate[4]
// 결과 정훈

// 없는 데이터 위치를 끄집어내보겠습니다.
classmate[5]
// 결과 undefined

// "다슬" 이라는 데이터를 포함하고 있는지 확인해보겠습니다.
classmate.includes("다슬")
// 결과 false

//"다슬"이라는 데이터를 추가해보겠습니다.
classmate.push("다슬")
// 결과 ["은정","혜원","재훈","예봄","정훈","다슬"]

//"다슬"이라는 데이터를 빼보겠습니다.
classmate.pop()
// 결과 ["은정","혜원","재훈","예봄","정훈"]

//classmate의 길이를 구해보겠습니다.
classmate.length
//결과 5

// 퀴즈 풀이
let developer = ["워라벨","연봉","신분상승","성공","꿈"]
developer[1]
let dream = ["커리어","점프","할수있다"]
developer.concat(dream)

// 문자열(배열)
const classmates1 = "철수"
classmates1[0]     // "철"
classmates1[1]     // "수"

// 문자열 쪼개기
const classmates2 = "철수&영희"
classmates2.split("&")     // ["철수", "영희"]

// 문자열 양쪽 공백 제거하기
const classmates3 = " 철수 & Milk "
classmates3.trim()     // "철수 & Milk"

// 문자열 대소문자 변환하기
classmates3.toUpperCase()     // "철수 & MILK"
classmates3.toLowerCase()     // "철수 & milk"

// 문자열에 빈칸 채우기
const chulsooNumber = "1234"
chulsooNumber.padStart(10, "0")     // "0000001234"
chulsooNumber.padEnd(10, "0")       // "1234000000"
