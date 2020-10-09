/**
 * ECMAScript内置对象有：Boolean、Error、Date、RegExp等
 * TypeScript中同样可以将变量定义为以上类型
 */
let b:Boolean = new Boolean(1)
let e:Error   = new Error('Error occurred')
let d:Date    = new Date()
let r:RegExp = /[a-z]/

/**
 * DOM和BOM的内置对象有：Document、HTMLElement、Event、NodeList等
 */
let body:HTMLElement = document.body
let addDiv:NodeList  = document.querySelectorAll('div')
document.addEventListener('click',function(e:MouseEvent) {
    //......
})

/**
 * Node.js不是内置对象的一部分，如果想用ts来写node.js,则需要引入第三方声明文件：
 * npm install @types/node --save-dev 
 *
 */