// 1번
/*
`map` : 배열 내에 각각의 원소에 대한 연산을 진행하여 새로운 배열을 만들 수 있다.


`filter` : 배열 내의 필터를 걸어 해당 필터를 통과하는 (true 값) 인 원소들만 추릴 수 있다.

`find` : 배열 내에서 원하는 조건을 만족하는 값 하나를 찾아 리턴 해줍니다. 값은 왼쪽부터 검사하고 조건을 만족하는 값을 찾으면 바로 리턴되어 종료됨.

`every` : 배열 안의 모든 요소가 주어진 조건을 모두 만족하는지 검사하고 true, false 값을 리턴합니다.

`some` : every 와 반대되는 개념으로 배열 안의 요소가 주어진 조건을 만족하는지 검사하고 한 가지의 요소라도 조건을 만족하면 true, 아니라면 false 값을 리턴합니다.

`reduce` : callback 함수와, 초기값 initailValue 를 인자로 가지고 있으며,
해당 callback 함수 에는 4 가지 인자를 추가로 받을 수 있다.
4가지 인자로는 
accumulator : 콜백 반환값을 누적
currentValue : 처리할 현재 요소
currentIndex : 처리할 현재 요소의 인덱스
array : reduce를 호출한 배열

위 값들로 추가적인 연산을 진행 하여 원하는 값을 리턴 시킬 수 있다.
*/

// 2번
//방법 1
const nums = [1, 2, 3, 4]
let new_nums = []

for (let i in nums) {
  new_nums[i] = nums[i] ** 3
}

console.log(new_nums)

// 방법 2
const new_nums2 = nums.map(x => x**3)
console.log(new_nums2)