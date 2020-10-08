/**
 * 声明语句：假如我们想使用第三方库jQuery，常见的就是script标签引入，然后就可以使用全局变量$或jQuery了
 * 但是在ts中，编译器并不知道$或jQuery是什么东西，此时就要使用declare var来定义它的类型
 */
declare var jQuery:(selector:string) => any
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