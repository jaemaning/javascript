const test = [90, 90, 80, 76]

const sum = test.reduce((total, x) => {
  return total + x
}, 0)

console.log(sum)