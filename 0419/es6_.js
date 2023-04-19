// key 값 동적 할당
const key = '나라'
const value = ['한국', '일본', '중국']

const myObj = {
  [key]: value,
}

console.log(myObj)
console.log(myObj.나라)

// 구조 분해 할당
const userInformation = {
  name: '김재만',
  userId: 'ssafygood',
  email: 'ssafy@ssafy.com',
}

const { name, userId, email } = userInformation

console.log(name, userId, email)