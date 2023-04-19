const colors = ['red', 'blue', 'green']

const printFunc = function (color) {
  console.log(color)
}

// forEach return 없음
colors.forEach(printFunc)

colors.forEach((element, index) =>
  console.log(element, index)
);


// 함수를 다른 함수의 인자로 넣기(콜백 함수)
const numbers = [1, 2, 3]

const doubleFunc = function (num) {
  return num * 2
}

const doubleNumbers = numbers.map(doubleFunc)
console.log(doubleNumbers) // [2, 4, 6]

const doubleNumbers2 = numbers.map(function (number) {
  return number * 2
})

console.log(doubleNumbers2)