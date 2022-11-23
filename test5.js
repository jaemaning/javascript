// 프로그래머스 (할인 행사)

function solution(want, number, discount) {
    let reducer = number.reduce((acc, cur, idx) => { return acc += cur; }, 0);
    // 행렬 내 원소들의 합

    let count = 0
    let wantlist = []

    for (idx in want) {
        for (let i = 0; i < number[idx]; i++)
            wantlist.push(want[idx])
    }

    wantlist.sort()

    for (let j = 0; j <= discount.length - reducer; j++) {
        if (discount.slice(j, j + 10).sort().join('') == wantlist.join('')) {
            count++
        }
    }
    // 행렬 비교는 join 으로 문자열로 바꾼 후 비교가 정석

    return count
}
