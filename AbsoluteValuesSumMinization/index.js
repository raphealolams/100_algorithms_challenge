function absoluteValuesSumMinization(num) {

    const isEven = num.length % 2 === 0;

    return isEven ? num[num.length / 2 - 1] : num[Math.floor(num.length / 2)];
}


console.log(absoluteValuesSumMinization([2, 4, 7]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]))
