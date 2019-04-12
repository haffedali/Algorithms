function kangaroo(x1, v1, x2, v2) {
    let completed = false;

    if ((x1 > x2 && v1 > v2) || (x1 > x2 && v1 === v2)) {
        return "NO"
    }
    if ((x2 > x1 && v2 > v1) || (x2 > x1 && v1 === v2)) {
        return "NO"
    }

    if (x1 > x2) {
        while (completed === false) {
            x1 += v1
            x2 += v2
            if (x1 === x2) {
                completed = true
                return "YES"
            } else if (x2 > x1) {
                completed = true
                return "NO"
            }
        }
    }
    if (x2 > x1) {
        while (completed === false) {
            x2 += v2
            x1 += v1
            if (x2 === x1) {
                completed = true
                return "YES"
            } else if (x1 > x2) {
                completed = true
                return "NO"
            }
        }
    }
}

console.log(kangaroo(0,3,1,1))