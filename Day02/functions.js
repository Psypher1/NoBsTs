"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
//  Union Type |
var format = function (title, param) {
    return title + " " + param;
};
exports.format = format;
// function that does not return anything - void
var printFormat = function (title, param) {
    console.log(exports.format(title, param));
};
exports.printFormat = printFormat;
//  that returns a promise
var fetchData = function (url) {
    return Promise.resolve("Data from: " + url);
};
exports.fetchData = fetchData;
// multiple arguments to an array
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(" ");
}
function getName(user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first") + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
// changin operator ? makes sure is defined before referencing it
//  null coalescing operator ??
