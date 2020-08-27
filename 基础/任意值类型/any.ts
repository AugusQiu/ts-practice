/**
 * 任意值any，可以被用来赋值为任意类型
 * 声明了一个普通类型的话，在赋值过程中，改变类型是不被允许的，any可以
 * 变量声明时未指定类型且未赋值，默认为any
 * 还是不要滥用any,这样失去了ts强类型检查的意义
 */
let str1:string = '26'
str1  = 26  // 报错：Type '26' is not assignable to type 'string'

let str2:any  = '26'
str2 = 26   // 不报错

let str3
str3 = '32'
str3 = 32  

let str4 = '77' // 赋值了，存在类型推断，就是string类型，而非any,报错
str4 = 77 
