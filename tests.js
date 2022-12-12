describe("filter", function () {
    it("takes a string and return the filtered result", function () {
        assert.equal("This is not right!".filter('not'), "This is right!");
    });
    it("takes a array of string and return the filtered result", function () {
        assert.equal("This is not right!".filter(['This','not']), "is right!");
    });
});

describe("bubbleSort", function () {
    it("takes an empty array and return empty array", function () {
        assert.deepEqual([].bubbleSort(), []);
    });
    it("takes an array of 7 numbers and return bubble sorted array", function () {
        assert.deepEqual([3,5,1,7,-1,9,0].bubbleSort(), [-1, 0, 1, 3, 5, 7, 9]);
    });
});