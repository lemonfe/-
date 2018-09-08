## css盒模型

### 基本概念

    标准模型、IE模型

### 两者区别

    标准模型宽度只包括content，IE模型包括border和padding

### css如何设置这两种模型？

    box-sizing属性

### JS如何获取盒模型的宽高

```js
dom.style.width // 内联属性

dom.currentStyle.width // 浏览器渲染之后的宽度，只有IE支持

window.getComputedStyle(dom).width //和第二种类似，兼容性更好

dom.getBoundingClientRect().width // 计算元素的绝对位置，可以拿到四个元素top，left，width，height
```

## BFC

### BFC概念

    BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。

### 哪些元素会生成BFC

    1. 根元素
    2. float属性不为none
    3. position为absolute或者fixed
    4. display为inline-block，table-cell，table-caption，flex，inline-flex
    5. overflow不为visible

### BFC规则

    1. 两个BFC不重合（两列布局使用，一边固定，另一边overflow：hidden）
    2. 计算BFC高度时，浮动元素也参与计算（两个内部盒子都浮动，父元素加个overflow：hidden）
    3. 同一BFC下，垂直方向上margin重叠（高度塌陷，外套一个元素overflow：hidden）

-------------

以下是一些例子：

```html
<!-- BFC垂直方向边距重叠 -->
<section id="margin">
  <style>
    #margin{
      background: pink;
      overflow: hidden;
    }
    #margin>p{
      margin: 5px auto 25px;
      background: red;
    }
  </style>
  <p>1</p>
  <div style="overflow:hidden">
    <p>2</p>
  </div>
  <p>3</p>
</section>

<!-- BFC不与float重叠 -->
<section id="layout">
  <style media="screen">
    #layout{
      background: red;
    }
    #layout .left{
      float: left;
      width: 100px;
      height: 100px;
      background: pink;
    }
    #layout .right{
      height: 110px;
      background: #ccc;
      overflow: auto;
    }
  </style>
  <div class="left"></div>
  <div class="right"></div>
</section>

<!-- BFC子元素即使是float也会参与计算 -->
<section id="float">
  <style media="screen">
    #float{
      background: red;
      overflow: auto;
      /*float: left;*/
    }
    #float .float{
      float: left;
      font-size: 30px;
    }
  </style>
  <div class="float">我是浮动元素</div>
</section>
```