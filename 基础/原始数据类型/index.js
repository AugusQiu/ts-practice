/* 布尔值 */
var isTrue = true;
/* 数值类型*/
var num1 = 10;
var num2 = 10; //es6的二进制表示法
var num3 = 484; //es6的八进制表示法
var notNumber = NaN; //表示非数值
var infinityNumber = Infinity; //Infinity用于存放表示正无穷大的数值
/*字符串*/
var myName = 'augusqiu';
var templateStr = "hello, my name is " + myName;
/*Null 和 Undefined */
var u = undefined;
var n = null;
/*void空值*/
// js没有void的概念，ts可以用void表示没有任何返回值
function alertHa() {
    alert('haha');
}
// 声明一个void类型的变量无意义，只能将它赋值为undefined或者null
var unusable = undefined;
/**
 * undefined、null和void的区别在哪儿？
 * undefined和null是所有类型的子类型，即undefined可以赋值给number类型的变量
 * void不可以，会报错
 */
var num4 = undefined; //不会报错
