// 프로그래머스 피로도 (DFS)

let k = 80;
let dungeons = [[80, 20], [50, 40], [30, 10]]
let indungeons = []
for (dungeon of dungeons) {
    indungeons.push(dungeon[0])
}
let mindungeons = Math.min(...indungeons);
// let storage = new Array(dungeons.length).fill('false')
let cnt = 0
let result = []


for (i of dungeons) {
    if (i[0] > k) {
        result.push(0)
    } else {
        cnt++
        k = k - i[1]
        dungeonandfighter(k, dungeons, i)
    }
}


function dungeonandfighter(k, dungeons, i) {
    for () {
        dungeonandfighter()
        if (k <= mindungeons) {
            result.push(cnt);
            cnt = 0
            return;
        }
    }








// for (let i in dungeons) {
//     if (dungeons[i][0] <= k && storage[i] == 0) {
//         cnt++
//         k = k - dungeons[i][1]
//         storage[i] = 1
//         dungeonandfighter(k, dungeons, storage)
//         console.log(cnt)
//         //console.log(1)
//     } else if (dungeons[i][0] > k && storage[i] == 0) {
//         storage[i] = 1
//         dungeonandfighter(k, dungeons, storage)
//         //console.log(2)
//     } else if (storage[i] == 1) {
//         i++
//         //console.log(3)
//     }
//     if (storage == new Array(dungeons.length.fill(1))) {
//         result.push(cnt);
//     }
// }

// return result
// }
// console.log(dungeonandfighter(k, dungeons, storage))

// DFS = 한놈만팬다 끝까지 파고들고 반복(재귀함수 사용)
// BFS = 연결된 다음놈을 찾는다 (queue, linkedlist 사용)











//순열로 1개 뽑기 가능하면? return 1
//순열로 2개 뽑기 가능하면? return 2 이런식으로 가자