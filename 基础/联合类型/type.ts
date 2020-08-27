/**
 * 联合类型（Union Types) 表示取值可以为多种类型中的一种
 * 联合类型用 ｜ 符号来分隔每个类型
 */
let testStr: string | number
testStr = 'six'
testStr = 6

function getLength(param:string|number):number{
    // number类型不具有length属性
    if(typeof param == 'number'){
        return param.toString().length
    }else{
        return param.length
    }
}
getLength(666)
getLength('1234')