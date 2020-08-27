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

