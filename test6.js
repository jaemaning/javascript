// 프로그래머스 피로도 (DFS)

let k = 80;
let dungeons = [[80, 20], [50, 40], [30, 10]]
let indungeons = []
for (dungeon of dungeons) {
    indungeons.push(dungeon[0])
}
let mindungeons = Math.min(...indungeons);
let storage = new Array(dungeons.length).fill(true)
let visited = new Array(dungeons.length).fill(false)
let cnt = 0
let result = []

function DFS(k, cnt) {
    result.push(cnt)

    for (let i = 0; i < dungeons.length; i++) {
        if (visited[i] == false && k >= dungeons[i][0]) {
            visited[i] = true;
            console.log(k)
            cnt++
            DFS(k - dungeons[i][1], cnt);
            visited[i] = false;
            cnt--
        }
    }
}

DFS(k, 0)
console.log(result)


// DFS = 한놈만팬다 끝까지 파고들고 반복(재귀함수 사용)
// BFS = 연결된 다음놈을 찾는다 (queue, linkedlist 사용)


//순열로 1개 뽑기 가능하면? return 1
//순열로 2개 뽑기 가능하면? return 2 이런식으로 가자