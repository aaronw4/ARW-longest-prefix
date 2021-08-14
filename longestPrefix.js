var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }

    let firstStr = strs[0]
    let secondStr = strs[1]
    let count = 0

    for (i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === secondStr[i]) {
            count++
        } else {
            break
        }
    }

    if (strs.length === 2) {
        return firstStr.substring(0, count)
    }

    for (i = 2; i < strs.length; i++) {
        if (count === 0) {
            return ''
        }
        if (firstStr[count-1] === strs[i][count-1]) {
            continue
        } else {
            count--
            i--
        }
    }

    return firstStr.substring(0, count)
};

console.log(longestCommonPrefix(['from', 'freeze', 'iendly']))