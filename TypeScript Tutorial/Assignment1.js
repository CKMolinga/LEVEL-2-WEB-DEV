var StaticTest = /** @class */ (function () {
    function StaticTest() {
        StaticTest.countInstance++;
    }
    StaticTest.countInstance = 0;
    return StaticTest;
}());
new StaticTest();
new StaticTest();
new StaticTest();
console.log("Number of Instances created: ", StaticTest.countInstance);
