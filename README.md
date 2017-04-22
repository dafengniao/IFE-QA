# IFE-QA
前端css、js基础问题

## click
https://dafengniao.github.io/IFE-QA/click<br/>
左侧固定宽度，display(flex);
点击某一区块获取某一区块的内容；

原生js时间代理<br/>
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。
click事件的监听函数定义在u/l节点，但是实际上，它处理的是子节点l/i的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而且以后再添加子节点，监听函数依然有效。

## css
https://dafengniao.github.io/IFE-QA/css<br/>
css3 无缝滚动动画，鼠标放上暂停；
滚动内容双份，动画margin-top为负内容高度一半；
动画一直执行（infinite），匀速（linear）

## margin
https://dafengniao.github.io/IFE-QA/margin<br/>
定义和用法<br/>
margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。
说明<br/>
这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。
块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。允许指定负的外边距值，不过使用时要小心。

## array
https://dafengniao.github.io/IFE-QA/array<br/>
数组排序方法

## rem
https://dafengniao.github.io/IFE-QA/rem<br/>
针对手机版rem自适应

## tab
https://dafengniao.github.io/IFE-QA/tab<br/>
原生js实现的tab切换<br/>
第一种for写法
第二张为时间代理，ul的点击监听子节点li的id进行tab的切换。

## closure
https://dafengniao.github.io/IFE-QA/closure<br/>
闭包<br />
加、减互相独立。

## target
https://dafengniao.github.io/IFE-QA/target<br/>
拖拽功能<br>
原生封装拖拽插件
