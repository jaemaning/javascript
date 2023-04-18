const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
	// 작성해 주세요
  // 무승부
  if (p1_choice == p2_choice) {
    return 0
  }
  // 다를경우 승/패 유무 확인
  if (p1_choice < p2_choice) {
    if (p1_choice=="p" && p2_choice=="s") {
      return 2
    } else {
      return 1
    }
  } else {
    if (p1_choice=="s" && p2_choice=="p") {
      return 1
    } else {
      return 2
    }
  }
}

for (let i in p1) {
  console.log(playGame(p1[i][0], p2[i][0]))
}

// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2
