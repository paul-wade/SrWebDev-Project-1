var chai = require('chai');
var describe = require("mocha").describe;
var it = require("mocha").it;
var should = chai.should();

describe('test', function () {
    it('should do somthing', function () {
        var test ="test";
        test.should.equal("test");
    });
});