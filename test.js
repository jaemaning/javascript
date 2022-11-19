function solution(food) {
    let arr = food.map((a, i) => {
        if (i > 0) {
            return new Array(parseInt(a / 2)).fill(i)                    // [i]*(a%2)
        }
    })
    let rev_arr = [...arr].reverse();
    arr.push(0);
    var answer = String(arr.concat(rev_arr));
    result = answer.replace(/\,/g, '');
    return result;
}

// 프로그래머스 lv1 푸드파이터 대회