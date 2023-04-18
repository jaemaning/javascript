let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
let answer = 0
let count_index = []


function find_burger(ingredient) {
    count_index = []

    for (let i = 0; i < ingredient.length - 3; i++) {
        if (String(ingredient.slice(i, i + 4)) == '1,2,3,1') {
            count_index.push(i)
            i = i + 4
        }
    }

    for (let j in count_index) {
        let cut = count_index[j] - (4 * j)
        ingredient.splice(cut, 4)
        answer = answer + 1
    }

    if (count_index == 0 || ingredient.length < 4) {
        return answer
    } else {
        return find_burger(ingredient)
    }
}

find_burger(ingredient)


console.log(answer)