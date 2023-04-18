let k = 4
let m = 3
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
let count_arr = []
let price = 0

for (let i = 1; i <= k; i++) {
    let result = score.filter(score => score == i);
    count_arr.push(result.length)
}

console.log(count_arr)

// k = 최고점수
// m = 한상자 개수
// score = 행렬
// count_arr.length = 점수
// count_arr.pop() = 최고점수 갯수



let wow = count_arr.length
let res = 0
let box = 0

console.log(wow)

for (let j = 0; j < wow; j++) {
    let apple_cnt = count_arr.pop();
    apple_cnt += res;
    res = 0;
    box = parseInt(apple_cnt / m);
    res += apple_cnt % m;
    price += box * (wow - j) * m;
}

console.log(price)

/// apple_cnt/m  몫 => 바로 점수화
/// apple_cnt%m 나머지  => 다음거에 더해 