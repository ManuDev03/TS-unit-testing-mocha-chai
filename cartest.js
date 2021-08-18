"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var chai_1 = require("chai");
describe("testing the class car", function () {
    it("testing function get model", function () {
        var obj = new car_1.Car("Honda civic");
        chai_1.expect(obj.getModel()).to.equal("Honda civic");
    });
});
