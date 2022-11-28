// 연습장
let dun = [1, 2, 3, 4, 5]
let result = []
let visited = new Array(dun.length).fill(false)

//permutation(dun.length)

function permutation(i) {
    for (let i = 0; i < 10; i++) {
        if (visited[i]) {
            return
        } else {
            visited[i] = true
            result.push(i)
            permutation(i)
        }
    }
}

function DFS(k, dungeons, visited) {
    for () {
        if (visited[i]) {
            return;
        } else {
            visited[i] = true;
            DFS()
            visited[i] = false;
        }
    }

}

//console.log(visited)

permutation(0)

// 4가 4번들어가고

// 3이 3번 들어가고