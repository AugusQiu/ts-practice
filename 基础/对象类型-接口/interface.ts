/**
 * 接口类型除了可用于对类的一部分行为进行抽象，也常用于对【对象的形状】进行描述
 * 接口名称一般首字母大写，有的编程语言会建议接口名称加上 I 前缀
 */
interface Person{
    readonly id: number //只读属性
    name:string
    age: number
    sex?:string //可选属性
    
}
let me: Person = {
    id: 1,
    name:'augus',
    age:22,
}

me.id = 2 // 报错：Cannot assign to 'id' because it is a read-only property

// 函数类型
interface SearchFunc{
    (source:string, subString:string):boolean
}
let fun: SearchFunc = function(s,t){
    let res = s.search(t)
    if(res == -1){
        return false
    }else{
        return true
    }
}
// 类实现接口
interface ClockInterface{
    currentTime: Date;
    setTime(d:Date);
}
class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d
    }
    constructor(h:number,m:number){}
}


/**
 * 扩展：type 和 interface的区别？
 * type 可以声明基本类型别名、联合类型、元组等类型
 * interface能够声明合并
 */

 // 基本类型别名
 type Name = string

 // 联合类型
 interface Dog{
     wong()
 }

 interface Cat{
     miao()
 }
 type Pet = Dog | Cat

 // 声明合并
 interface User{
     name:string
     age :number
 }
 interface User{
     sex :string
 }
 /**
  * User接口为{
  *   name:string
  *   age :number
  *   sex :string
  * }
  */