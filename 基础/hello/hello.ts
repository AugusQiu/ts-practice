function helloTs(person:string){
    if(typeof person == 'string'){
        return `hello,${person}`  //ts兼容es6
    }else{
        throw new Error('person is not a string')
    }
}

let user1 = 'qgq'
console.log(helloTs(user1))  //hello,qgq


/**
 * user2 是个对象，编译会报错：error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'
 * 但是只是编译的时候会报错，编译结果js依然会生成
 * 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可
 **/
let user2 = [0,1,2]
console.log(helloTs(user2))