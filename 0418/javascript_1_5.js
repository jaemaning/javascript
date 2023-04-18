const participantNums =  [[1, 3, 2, 2, 1], 
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]

for (const i in participantNums) {
  participantNums[i].sort();
  for (let j=0;j<participantNums[i].length;j+=2) {
    // if (j==participantNums[i].length-1) {
    //   console.log(participantNums[i][j])
    //   break
    // }
    console.log(participantNums[i][j], participantNums[i][j+1])
    if (participantNums[i][j] != participantNums[i][j+1]) {
      console.log(participantNums[i][j])
      break
    }
  }
}

// 3
// 100
// 62