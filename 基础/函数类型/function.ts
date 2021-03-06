/**
 * 声明函数有两种方式：函数声明、函数表达式
 * 一个函数有输入和输出，ts可以对两者都进行约束
 */

 /**
  * 函数声明(Function Declaration)
  * 输入多于或者少于要求的参数，ts中不被允许
  */
 function sum(x:number, y:number):number{
     return x + y
 }

/**
 * 函数表达式
 */
let mySum = function(x:number, y:number):number{
    return x + y
}

/**
 * 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左侧的mySum，其实是通过赋值操作进行类型推论而来的
 **/ 
let mySum:(x:number,y:number) => number = function (x: number, y: number): number {
    return x + y;
};
// 注意！！！不要混淆 TypeScript 中的 => 和 ES6 中的 =>
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型

/* 用？表示参数可选，注意：可选参数必须接在必需参数后面 */
function getName(firstName:string, lastName?:string){
    if(lastName){
        return firstName + '-'+lastName
    }else{
        return firstName
    }
}

/*参数设置默认值*/
function getName2(firstName:string,lastName:string='q'){
    return firstName + '-' + lastName
}

/**
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
 * ts利用联合类型实现重载
 */
function reverse(x:number|string):number|string{
    if(typeof x == 'number'){
        return Number(x.toString().split('').reverse().join(''))
    } else if(typeof x == 'string'){
        return x.split('').reverse().join('')
    }
}