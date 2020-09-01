/**
 * 类型断言的用途1:
 * 原先ts不确定一个联合类型的变量是哪个类型时，只能访问此联合类型所有类型中【共有】的属性或方法
 * 用类型断言来解决
 */
interface Cat {
    name: string
    run():void
}
interface Fish{
    name: string
    swim():void
}
function isFish(animal:Cat | Fish){
    if(typeof (animal as Fish).swim === 'function'){
        return true
    }
    return false
}

/* 判断继承关系 */
interface ApiError extends Error{
    code: number
}

interface HttpError extends Error{
    statusCode: number
}
function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}