/// <reference path="first.ts" />
/// <reference path="second.ts" />

namespace lol {
    const someValue = 10;

    export function getSomeValueNTimes(n: number): number {
        return someValue * n;
    }
}
console.log(lol.getSomeValueNTimes(10));
console.log(lol.getSomeValueNNNTimes(10));