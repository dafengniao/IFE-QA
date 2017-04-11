# IFE-QA
前端css、js基础问题

## click
https://dafengniao.github.io/IFE-QA/click
左侧固定宽度，display(flex);
点击某一区块获取某一区块的内容；

原生js时间代理
## 
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。
click事件的监听函数定义在<ul>节点，但是实际上，它处理的是子节点<li>的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而且以后再添加子节点，监听函数依然有效。

## css
https://dafengniao.github.io/IFE-QA/css
css3 无缝滚动动画，鼠标放上暂停；
滚动内容双份，动画margin-top为负内容高度一半；
动画一直执行（infinite），匀速（linear）

## margin
https://dafengniao.github.io/IFE-QA/margin
定义和用法
margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。
说明
这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。
块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。允许指定负的外边距值，不过使用时要小心。

## array
https://dafengniao.github.io/IFE-QA/array
数组排序方法

## rem
https://dafengniao.github.io/IFE-QA/rem
针对手机版rem自适应