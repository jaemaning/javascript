// 매개변수보다 인자의 개수가 적을 경우(매개 변수와 인자의 불일치 허용)
const threeArgs = function (arg1, arg2, arg3) {
  return [arg1, arg2, arg3]
}

console.log(threeArgs())

// Spread syntax (Rest parameters)
const restArgs = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, ...restArgs]
}

console.log(restArgs(1, 2, 3))

// Arrow function
const arrow1 = function(name) {
  return `hello ${name}`
}

// 1. function 키워드 생략 가능
const arrow2 = (name) => {return `hello ${name}`}

// 2. arguments 가 1개면 () 생략 가능
const arrow3 = name => {return `hellow ${name}`}

// 3. 함수 body가 return 을 포함한 표현식 1개인 경우 return {} 생략 가능
const arrow4 = name => `hellow ${name}`

console.log(arrow4('jm'))

// this
console.log(this)

const myFunc = () => {console.log(this)}

myFunc()

const myObj = {
  data: [1,2],
  myFunc() {
    console.log(this)
    this.data.forEach((number) => {
      console.log(number)
      console.log(this)
    })
  }
}

myObj.myFunc()


// tihs 2
let x = 1

function new1 () {
  let x = 10 
  new2()
  const new3 = () => {
    console.log(x)
  }
  new3()
}

function new2() {
  console.log(x)
}

new1()
new2()
