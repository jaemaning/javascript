let x = 1

if (x == 1) {
  let x = 2
  console.log(x)
}

console.log(x)


if (x == 1) {
  var y = 3
}
console.log(y)

const s1 = "안녕 \n하세요"
console.log(s1)

// TEmplate literals 
const name = `재
만 ${s1}`
console.log(name)


function myfunc(n) {
  console.log(n)
}

myfunc(5)

const myfunc2 = function new_func(n) {
  console.log(n)
  if (n <= 1) {
    return 1
  }

  return n * new_func(n - 1)
}

const a = myfunc2(4)
console.log(a)
const b = 1

if (b == true) {
  console.log("yes")
} else {
  console.log("no")
}


const arr = [4, 5, 6, 7]
const my_dict = {
  1 : "a",
  2 : "b",
  3 : "c",
}

for (const i of arr) {
  console.log(i)
  if (i==5) {
    break
  }
}

for (const i in my_dict) {
  console.log(my_dict[i])
  if (my_dict[i] == "b") {
    break
  }
}

arr.forEach(function (element) {
  console.log(element)
})

let new_arr = [1, 2, 3, ...arr]
console.log(new_arr)

new_arr[0] = 3
console.log(new_arr)