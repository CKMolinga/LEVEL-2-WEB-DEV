var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
        this.firstName = "Kombe";
        this.lastName = "Molinga";
        this.Telephone = 671248988;
        this.isMarried = false;
    }
    person.prototype.add = function () {
        this.value1 + this.value2;
    };
    person.prototype.substract = function () {
        this.value1 - this.value2;
    };
    person.prototype.divide = function () {
        this.value1 / this.value2;
    };
    person.prototype.multiply = function () {
        this.value1 * this.value2;
    };
    return person;
}());
var operator = /** @class */ (function (_super) {
    __extends(operator, _super);
    function operator() {
        var _this = _super.call(this) || this;
        _this.add;
        _this.substract;
        _this.divide;
        _this.multiply;
        return _this;
    }
    return operator;
}(person));
