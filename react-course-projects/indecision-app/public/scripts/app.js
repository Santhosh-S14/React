"use strict";

var multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (n) {
            return _this.multiplyBy * n;
        });
    }
};
console.log(multiplier.multiply());
