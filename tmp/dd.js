// 연습장
let maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]
let visited = new Array(5)
for (let i = 0; i < 5; i++) {
    visited[i] = new Array(5).fill(false)
}
let cnt = 1
let result = []
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
            if (0 <= nx <= n && 0 <= ny <= m) {
                if (maps[nx][ny] == 1) {
                    maps[nx][ny] = maps[x][y] + 1
                    queue.push([nx, ny])
                }
            }
        }
    }
}
console.log(BFS(0, 0))
