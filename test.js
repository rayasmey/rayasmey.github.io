describe("Sum", function(){
    it("Takes an array and returns a sum.", function(){
        assert.equal(sum([10, 20, 30]), 60);
    });
});

describe("Multiply", function(){
    it("Takes an array and returns a product.", function(){
        assert.equal(multiply([10, 20, 30]), 6000);
    })
});

describe("Reverse String", function(){
    it("Takes a string and returns the reversed string.", function(){
        assert.deepEqual(reverseString("Raytu"), "utyaR");
    });
});

describe("Filter Long words", function(){
    it("Takes an array of strings and integer, then return an array of strings having a length greater than the integer", function(){
        assert.deepEqual(filterLongWords(["Martha", "Anita", "Anderson", "Johnathan"], 7), ["Anderson", "Johnathan"]);
    });
});