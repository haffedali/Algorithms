// const { default: test } = require('node:test')
// const { describe } = require('yargs')
const compareTriplets = require('./compareTriplets')
const reverseArray = require('./reverseArray')

describe('Compare the Triplets testing', ()=>{
    test("Comparing two identical arrays should return [0,0]", () => {
        expect(compareTriplets([0,0,0],[0,0,0])).toStrictEqual([0,0])
    })
    
    test("Comparing when first array has larger numbers should return [3,0]" , ()=> {
        expect(compareTriplets([1,1,1],[0,0,0])).toStrictEqual([3,0])
    })
    
    test("Comparing when second array has larger numbers should return [0,3]" , ()=> {
        expect(compareTriplets([1,1,1],[2,2,2])).toStrictEqual([0,3])
    })
})

describe.only("Reverse the Array testing", ()=> {
    test("Reversing an array with a single value", ()=> {
        expect(reverseArray([1])).toStrictEqual([1])
    });

    test("Reversing an array with length 3", () => {
        expect(reverseArray([1,2,3])).toStrictEqual([3,2,1])
    })
})

