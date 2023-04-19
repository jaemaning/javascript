const test = [90, 90, 80, 76]

const sum = test.reduce((total, x) => {
  return total + x
}, 0)

console.log(sum)

const fruits = ["apple", "banana", "banana", "banana", "apple", "melon"]

const f_count = fruits.reduce((cnt, fruit)=>{
  if (fruit === "apple") {
    cnt ++
  }
  return cnt
}, 0)

console.log(f_count)

const f_count2 = fruits.reduce((cnt, fruit)=>{
  if (fruit in cnt) {
    cnt[fruit]++
  } else {
    cnt[fruit] = 1
  }
  return cnt
}, {})

console.log(f_count2)