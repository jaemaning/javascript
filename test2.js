function solution(number, limit, power) {
    let answer = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        for (let ii = 1; ii <= i; ii++) {
            if (i % ii === 0) {
                count++
            }
        }
        if (count > limit) {
            count = power
        }
        answer += count
        count = 0;
    }
    return answer;
}


/// 기사단원의 무기