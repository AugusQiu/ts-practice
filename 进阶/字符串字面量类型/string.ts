/**
 * 字符串字面量类型：用来约束值 只能是某几个字符串中的一个
 * 它与类型别名一样，都是使用type来进行定义
 */
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele:Element,event:EventNames) {
    
}
handleEvent(document.getElementById('demo'),'scroll') // 可行
handleEvent(document.getElementById('demo'),'dbclick') //报错，event不能为'dbclick'
