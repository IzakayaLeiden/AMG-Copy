const { expect } = require("chai");
const h = require('../helper_main.js');

describe("Split string to list", function() {
    it("converts some basic strings to list with - seperator", function() {
        expect(h.splitStr("singlet-triplet", "-")).deep.equal(["singlet", "triplet"]);
        expect(h.splitStr("singlet-triplet-1", "-")).deep.equal(["singlet", "triplet", "1"]);
        expect(h.splitStr("1-2-3-4", "-")).deep.equal(["1", "2", "3", "4"]);
    });
});