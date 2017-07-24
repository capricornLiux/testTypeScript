/**
 * Created by liuxin on 2017/7/24.
 */
// 1.多行字符串
var content = "aaa\nbbb\nccc";
// 2.字符串模板, 多行字符串中使用表达式或调用方法(只有在``中间的才有效果)
var myName = 'lance';
var getName = function () {
    return 'lance';
};
console.log("hello " + myName);
console.log("world " + getName());
console.log("<div>\n<span>" + myName + "</span>\n<span>" + getName() + "</span>\n<div>world</div>\n</div>");
// 3. 自动拆分字符串, 使用字符串模板调用方法
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName2 = 'lance';
var getAge = function () {
    return 18;
};
(_a = ["hello my name is ", ", I 'm ", ""], _a.raw = ["hello my name is ", ", I 'm ", ""], test(_a, myName2, getAge()));
var _a;
