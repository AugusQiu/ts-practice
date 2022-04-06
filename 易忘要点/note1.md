## 联合类型 vs 交叉类型
联合类型是几选一，交叉类型才是合集
## interface vs type
````ts
// type可以声明基本类型别名
type Name = string

// type可以声明联合类型别名
interface Dog {
    wong();
}
interface Cat {
    miao();
}
type Pet = Dog | Cat

// type声明元组别名
type PetList = [Dog, Cat]
````
* interface是一种关系结构的描述，里面可包含属性和方法，可派生
* type是一种表达式，是一种aliase（别名），通过使用一些表达式的操作符（|，&）来实现和interface近似等价的关系描述   

在描述数据结构时，一般先考虑用interface，type其实在一定程度上简化类型描述，例如：type StrOrNum = string | number，后面都可以复用StrOrNum去代表string | number，如果在一个类型描述文件里，string | number这样的类型字段比较多，就可以用type去精简内容