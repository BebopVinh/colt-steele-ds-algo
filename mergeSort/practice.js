const a = [2, 4, 5, 7, 9]
const b = [1, 3, 6, 8]
const c = [45, 22, 8, 16, 5, 1, 4]

function mergeArrays(arr1, arr2) {
    let [i, j] = [0, 0]
    let ans = []
    while (i < arr1.length && j < arr2.length) {
        let first = arr1[i]
        let second = arr2[j]

        if (first <= second) {
            ans.push(first)
            i++
        } else {
            ans.push(second)
            j++
        }
    }

    while (i < arr1.length) {
        ans.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++
    }
    return ans
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArrays(left, right)
}

console.log(mergeSort(c))