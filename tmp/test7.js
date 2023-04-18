//프로그래머스 게임 맵 최단거리
let maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]
let visited = new Array(5)
for (let i = 0; i < 5; i++) {
    visited[i] = new Array(5).fill(false)
}
let cnt = 1
let result = []

console.log(visited[0][0])

// 처음 위치 maps[0][0]

// function DFS(maps, visited, x, y) {
//     if (x == 4 && y == 4) {
//         result.push(cnt)
//         visited = new Array(5)
//         for (let i = 0; i < 5; i++) {
//             visited[i] = new Array(5).fill(false)
//         }
//         return
//     }
//     if (x < 0 | y < 0 | x > 4 | y > 4) {
//         //cnt = 0
//         return
//     } else if (visited[x][y] | maps[x][y] == 0) {
//         //cnt = 0
//         return
//     } else {
//         visited[x][y] = true;
//         cnt++
//         DFS(maps, visited, x - 1, y)   // 상
//         DFS(maps, visited, x + 1, y)   // 하
//         DFS(maps, visited, x, y - 1)   // 좌
//         DFS(maps, visited, x, y + 1)   // 우
//     }
// }


// DFS(maps, visited, 0, 0)
// console.log(cnt)
// console.log(result)


// BFS 로 풀이
// queue이기 때문에 선입선출, shift()를 사용한다.

let n = maps[0].length - 1
let m = maps.length - 1
console.log(n, m)
let dx = [-1, 1, 0, 0]   // 상하좌우
let dy = [0, 0, -1, 1]   // 상하좌우
function BFS(x, y) {
    let queue = [[x, y]]
    while (queue) {
        let xy = queue.shift()
        if (xy == undefined) {
            return -1
        }
        x = xy[0]
        y = xy[1]

        if (x == n && y == m) {
            return maps[n][m]
        }
        for (let i = 0; i < 4; i++) {
            nx = x + dx[i]
            ny = y + dy[i]
            if (nx < 0 | ny < 0 | nx > n | ny > m) {
                continue;
            } else if (maps[nx][ny] == 0 | visited[nx][ny] == true) {
                continue;
            } else if (maps[nx][ny] == 1 && visited[nx][ny] == false) {
                maps[nx][ny] = maps[x][y] + 1
                queue.push([nx, ny])
                visited[nx][ny] = true
            }
        }

    }
}

console.log(BFS(0, 0))
