function getFinalValue(value) {
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

const finalValue = getFinalValue(85);
console.log(finalValue); 