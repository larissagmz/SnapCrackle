function snapCrackle(num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            str += "Snap";
        }
        if (i % 5 === 0) {
            str += "Crackle";
        }
        if (prime(i)) {
            str += "Prime";
        } else if (i % 2 === 0 && i % 5 != 0) {
            str += i;
        }
        if (i != num) {
            str += ", ";
        }
    }

    return str;
}

function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(snapCrackle(12));
