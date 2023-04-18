words = ['level', 'noon', 'mom', 'happy', 'ssafy', 'life']

function palindrome(word) {
    // word가 회문인지 아닌지 판별
    const lenWord = word.length
    const t = parseInt(lenWord/2)
    for (let i=0;i<t;i++) {
      if (word[i] != word[lenWord-i-1]) {
        return false
      }
    }
    return true
  }
  
for (const word of words) {
  console.log(palindrome(word))
}

// 출력 예시
// true
// true
// true
// false
// false
// false