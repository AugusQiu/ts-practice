/**
 * ts中，定义数组类型有多种方法
 */
let fibonacci: number[] = [1,1,2,3,5] //fibonacci数组中只允许传入number类型的元素

/* 也可用数组泛型 Array<elemType> 来表示数组 */
let fibonacci2: Array<number> = [1,1,2,3,5]

/**
 * 类数组不是真正的数组，常用的类数组都有自己的接口定义，如：IArguments、NodeList、HTMLCollection等
 * 其中IArguments 是Typescript中定义好了的类型
 */
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]