// 나는 물 -> 스프 -> 면 순서로 넣고 싶다.

console.log("라면 끓이기 : 각 재료가 준비되는데 1~3초 시간이 랜덤으로 걸림")

let aFinished = false; // 물
let bFinished = false; // 스프
let cFinished = false; // 면

setTimeout(() => {
  console.log("A: 물을 넣는다.")
  setTimeout(() => {
    console.log("B: 스프를 넣는다.")
    setTimeout(() => {
      console.log("C: 면을 넣는다.")
      console.log("라면 먹기")
    }, Math.random() * 2000 + 1000);
  }, Math.random() * 2000 + 1000)
}, Math.random() * 2000 + 1000)