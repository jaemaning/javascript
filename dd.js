// 순열
let dun = [1, 2, 3, 4, 5]
let result = 0

permutation(dun.length)

function permutation(i) {
    if (i < 1) {
        return false
    } else {
        for (let j = 1; j < i; j++) {
            result++
        }
        for (let j = 1; j < i; j++) {
            permutation(i - 1)
        }

    }

}

console.log(result)

// 4가 4번들어가고

// 3이 3번 들어가고