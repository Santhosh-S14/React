const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((n) => this.multiplyBy * n);
    }
}
console.log(multiplier.multiply());