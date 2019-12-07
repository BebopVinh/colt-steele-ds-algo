const a = [2, 4, 5, 7, 9]
const b = [1, 3, 6, 8]

function mergeArrays(arr1, arr2) {
    let [i, j] = [0, 0]
    let ans = []
    while (true) {
        let first = arr1[i]
        let second = arr2[j]

        if (!first) {
            ans.push(second)
            break
        }

        if (!second) {
            ans.push(first)
            break
        }

        if (first <= second) {
            ans.push(first)
            i++
        } else {
            ans.push(second)
            j++
        }
    }
    return ans
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
}