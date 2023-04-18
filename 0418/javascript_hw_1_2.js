// 1번
const nums = [1,2,3,4,5,6,7,8]

/* 
for 문 에서 i 를 계속 증가시키면서 동작하는데 const로 선언하면
값을 재할당 시켜줄 수 없기 때문에 에러가 발생함.

정상 작동 시키려면 const 가 아닌 let 으로 선언하면 가능.
*/
for (let i = 0; i < nums.length; i++) {
  console.log('nums[' + i + ']: ' + nums[i])
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 2번
for (num in nums) {
  /* 
  for in 구문에서 들어오는 값은 string 탑으로 들어오므로 
  number 와 parseInt 같은 숫자형으로 형 변환을 해주면 typeof 를 출력하였을 때
  number로 표기 되게 할 수 있음.
  */
  num = parseInt(num)
  console.log(num, typeof num)
}

// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string
