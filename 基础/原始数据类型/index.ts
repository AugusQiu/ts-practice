/* 布尔值 */
let isTrue:boolean = true

/* 数值类型*/
let  num1:number  = 10
let  num2:number  = 0b1010 //es6的二进制表示法
let  num3:number  = 0o744  //es6的八进制表示法
let  notNumber:number = NaN //表示非数值
let  infinityNumber:number = Infinity //Infinity用于存放表示正无穷大的数值

/*字符串*/
let  myName:string = 'augusqiu'
var  templateStr:string = `hello, my name is ${myName}`

/*Null 和 Undefined */
let u:undefined = undefined
let n:null = null

/*void空值*/
// js没有void的概念，ts可以用void表示没有任何返回值
function alertHa():void{
    alert('haha')
}
// 声明一个void类型的变量无意义，只能将它赋值为undefined或者null
let unusable:void = undefined

/**
 * undefined、null和void的区别在哪儿？
 * undefined和null是所有类型的子类型，即undefined可以赋值给number类型的变量
 * void不可以，会报错
 */
let num4:number = undefined //不会报错


