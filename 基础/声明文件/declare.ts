/**
 * 声明语句：假如我们想使用第三方库jQuery，常见的就是script标签引入，然后就可以使用全局变量$或jQuery了
 * 但是在ts中，编译器并不知道$或jQuery是什么东西，此时就要使用declare var来定义它的类型
 */
declare var jQuery:(selector:string) => any
// 变形：declare var jQuery:(selector:string) => any = function(selector:string):any
// declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除

/**
 * 通常我们会把声明语句放到一个单独的声明文件 xxx.d.ts 中
 * 项目中，推荐使用 @types 来统一管理第三方库的声明文件
 * @types 的使用方法很简单，直接用npm安装对应的声明模块即可，以jQuery为例
 * npm install @types/jquery --save-dev
 * https://www.typescriptlang.org/dt/search/ 这个网址可以用来搜索你想要的声明文件
 */

/**
 * 书写声明文件：如果一个第三方库没有提供声明文件，就得自己来写了
 * 但是不同场景下，声明文件的内容书写和使用方式会有区别
 */

 /**
  * 场景一：
  * 全局变量：通过script标签引入第三方库，注入全局变量
  * 前面的jQuery声明变量就是简单的一个例子
  */

 /**
 * declare var
 * declare let
 * declare const
 * 一般来说，全局变量都是禁止修改的，所以大部分情况都是使用const
 */
declare const jQuery:(selector:string) => any

/**
 * declare function用来定义全局函数的类型
 * 在函数类型的声明语句中，【函数重载】也是支持的
 */
declare function jQuery(selector:string):any
declare function jQuery(domReadyCallback:()=>any):any

/**
 * declare class 定义一个类，只定义类型，不定义具体的实现
 */
declare class Animal{
    name:string;
    constructor(name:string);
    sayHi():string
}
let cat = new Animal('Tom')

/**
 * declare enum 定义枚举类型，同样仅仅定义类型，而不是具体的值
 */
declare enum Directions{
    Up,
    Down,
    Left,
    Right
}
let diections = [Directions.Down,Directions.Left]


/**
 * declare namespace：namespace是ts早期为了解决模块化而创造的关键字
 * 随着ES6 module机制的流行，namespace已经被淘汰，但是在声明文件中还是比较常用的
 * 用来表示全局变量是一个对象，包含很多子属性
 */

 // 例：jQuery是一个全局变量，它是一个对象，提供了一个jQuery.ajax方法可以调用
 declare namespace jQuery{
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
 }

 jQuery.ajax('/api/get')
 console.log(jQuery.version)
 const e  = new jQuery.Event
 e.blur(jQuery.EventType.CustomClick)

 /**
  * 声明文件中，可以直接使用interface 和 type来声明一个全局的接口或类型
  */
 interface AjaxSettings{
     methods?:'GET'|'POST',
     data?:any
 }
 declare namespace jQuery{
     function ajax(url:string,settings?:AjaxSettings):void
 }

 // 其他非声明文件也可以使用这个接口或类型
 let settings: AjaxSettings = {
     methods:'POST',
     data:{
         name:'foo'
     }
 }
 /**
  * 但是过多的interface和type声明会造成命名冲突，保险起见，一般会将他们放到namespace下
  */
 declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}
let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};

/**
 * 场景二：npm包
 * 先看安装的npm包是不是自己已经有了声明文件：
 * 1. 看package.json中是否有types字段，或者有一个index.d.ts声明文件
 * 2. 发布到了@types 里 尝试安装
 * 
 * 没有声明文件那就自己写：
 * 创建一个types目录，专门用来管理自己写的声明文件，需要配置tsconfig.json中的paths和baseUrl字段
 * 以 types/foo/index.d.ts举例1
 * 
 * 目录结构
 * ├── src
   |  └── index.ts
   ├── types
   |   └── foo
   |       └── index.d.ts
   └── tsconfig.json
 */
// 配置tsconfig.json内容
{
    "compilerOptions": {
        "module" :  "commonjs",
        "baseUrl": "./",
        "paths"  : {
            "*"  : ["types/*"]
        }
    }
}

/**
 * npm 包的声明文件和全局变量的声明文件有很大区别：
 * npm 包的声明文件中使用 declare 不再会声明一个全局变量，而只会在当前文件中声明一个局部变量。只有在声明文件中使用 export 导出，然后在使用方 import 导入后，才会应用到这些类型声明
 */
 // index.d.ts
declare const name: string;
declare function getName(): string;
declare class Animal {
    constructor(name: string);
    sayHi(): string;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
interface Options {
    data: any;
}
export { name, getName, Animal, Directions, Options };


/**
 * ES6中，可以使用export default来导出一个默认值
 * 导入就变成 import foo from 'foo' 而不是 import { foo } from 'foo' 
 */

//index.d.ts
export default function foo():string

//index.ts
import foo from 'foo'
foo()

/**
 * Commonjs规范中
 * 整体导出模块：module.exports = foo
 * 单个导出: exports.bar = bar
 */

// ts中，导入方法也有多种
const foo = require('foo') // 整体导入
const bar = require('foo').bar // 单个导入

import * as foo from 'foo'  // 整体导入
import { bar } from 'foo'   // 单个导入