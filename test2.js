function solution(number, limit, power) {
    let answer = [];
    let count = 0;
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= (i ** 0.5); j++) {
            if (i % j === 0) {
                count++
            }
            if (i === 2) {
                count = 1
            }
        }
        if (Number.isInteger(i ** 0.5)) {
            count = count * 2 - 1
        } else {
            count = count * 2
        }
        if (count > limit) {
            count = power
        }
        answer.push(count);
        count = 0;
    }
    return answer;
}


console.log(solution(10, 3, 2))

/// 기사단원의 무기