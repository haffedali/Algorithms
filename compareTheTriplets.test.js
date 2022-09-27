// const { default: test } = require('node:test')
// const { describe } = require('yargs')
const compareTriplets = require("./compareTriplets");
const reverseArray = require("./reverseArray");
const matchingStrings = require("./matchingStrings");

describe("Compare the Triplets testing", () => {
  test("Comparing two identical arrays should return [0,0]", () => {
    expect(compareTriplets([0, 0, 0], [0, 0, 0])).toStrictEqual([0, 0]);
  });

  test("Comparing when first array has larger numbers should return [3,0]", () => {
    expect(compareTriplets([1, 1, 1], [0, 0, 0])).toStrictEqual([3, 0]);
  });

  test("Comparing when second array has larger numbers should return [0,3]", () => {
    expect(compareTriplets([1, 1, 1], [2, 2, 2])).toStrictEqual([0, 3]);
  });
});

describe("Reverse the Array testing", () => {
  test("Reversing an array with a single value", () => {
    expect(reverseArray([1])).toStrictEqual([1]);
  });

  test("Reversing an array with length 3", () => {
    expect(reverseArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});

describe.only("Matching Strings testing", () => {
  test("Calling matchingStrings with empyty array returns an empty array", () => {
    expect(matchingStrings([], [])).toStrictEqual([]);
  });
  test("Calling matchingStrings with arrays that hold single values: found one", () => {
    expect(matchingStrings(["cat"], ["cat"])).toStrictEqual([1]);
  });
  test("Calling matchingStrings with arrays that hold single values: did not find one", () => {
    expect(matchingStrings(["cat"], ["dog"])).toStrictEqual([0]);
  });
  test("Calling matchingStrings with arrays that hold multiple values: found some for only one query", () => {
    expect(
      matchingStrings(["cat", "cat", "cat"], ["cat", "dog"])
    ).toStrictEqual([3, 0]);
  });
  test("Calling matchingStrings with arrays that hold multiple values: found some both queries", () => {
    expect(
      matchingStrings(
        ["cat", "cat", "cat", "dog", "cat", "cat", "dog"],
        ["dog", "cat"]
      )
    ).toStrictEqual([2, 5]);
  });
  test("Calling matchingStrings with arrays that hold many values: found some many queries", () => {
    expect(
      matchingStrings(
        [
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
        ],
        ["dog", "cat", "mouse", "xander", "house", "moose",'ned']
      )
    ).toStrictEqual([15, 25, 5, 0, 10, 5,0]);
  });
  test("Calling matchingStrings with arrays that hold many values: found some many queries", () => {
    expect(
      matchingStrings(
        [
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
          "cat",
          "cat",
          "cheese",
          "cheese",
          "cheese",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          'test',
          "mouse",
          "house",
          "dog",
          "moose",
          "netflix",
          "house",
          "cat",
          "cat",
          "cat",
          "dog",
          "cat",
          "cat",
          "dog",
          "mouse",
          "house",
          "dog",
          "moose",
          "house",
        ],
        ["dog", "cat", "mouse", "xander", "house", "moose",'ned','cheese','netflix']
      )
    ).toStrictEqual([15, 25, 5, 0, 10, 5,0,3,1]);
  });
});
