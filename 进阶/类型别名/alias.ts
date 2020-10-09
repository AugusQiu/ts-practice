/**
 * 类型别名：顾名思义就是用来给一个类型起个新名字
 * 常用于联合类型
 */
type Alias = string
type AliasResolver = () => string
type AliasOrResolver = Alias | AliasResolver
function getName(n:AliasOrResolver):Alias {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}