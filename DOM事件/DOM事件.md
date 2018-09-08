### DOM事件级别

    DOM0: el.onclick = function() {}

    DOM2: el.addEventListener('click',function() {})

    DOM3(增加鼠标键盘事件): el.addEventListener('keyup',function() {})

### DOM事件模型

    捕获和冒泡

### DOM事件流

    捕获 -> 目标阶段（按钮） -> 冒泡

### 描述DOM事件捕获的具体流程

    window -> document -> html -> body -> ... -> 目标元素

### js获取html

    document.documentElement

### Event对象的常见应用

    event.preventDefault(): 阻止默认事件
    event.stopPropagation()： 阻止冒泡
    event.stopImmediatePropagation(): 一个按钮绑定两个事件，在其中一个中调用此方法，另一个事件就不会执行
    event.currentTarget: 当前绑定事件的元素，比如事件代理中的父元素
    event.target: 当前被点击的元素

### 自定义事件

```js
var eve = new Event('test');
ev.addEventListener('test', function () {
    console.log('test dispatch');
});
setTimeout(function () {
    ev.dispatchEvent(eve);
}, 1000);
```

除了Event还有CustomEvent,CustomEvent可以指定一些参数

```js
var eve = new CustomEvent('test', {
    detail: {
        message: '123',
        time: new Date(),
    },
    bubbles: true,
    cancelable: true
});
ev.addEventListener('test', function (e) {
    console.log('test dispatch', e.detail);
});
setTimeout(function () {
    ev.dispatchEvent(eve);
}, 1000);
```

> addEventListener 第三个参数 默认是false，指在冒泡中触发，true的话就可以在捕获阶段触发

### 示例代码

```js
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Event</title>
</head>

<body>
  <div id="ev">
    <style media="screen">
      #ev {
        width: 300px;
        height: 100px;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 100px;
      }
    </style>
    目标元素
  </div>
  <script type="text/javascript">
    var ev = document.getElementById('ev');

    ev.addEventListener('click', function (e) {
      console.log('ev captrue');
    }, true);

    window.addEventListener('click', function (e) {
      console.log('window captrue');
    }, true);

    document.addEventListener('click', function (e) {
      console.log('document captrue');
    }, true);

    document.documentElement.addEventListener('click', function (e) {
      console.log('html captrue');
    }, true);

    document.body.addEventListener('click', function (e) {
      console.log('body captrue');
    }, true);

    var eve = new CustomEvent('test', {
      detail: {
        message: 'msg',
        time: new Date(),
      },
      bubbles: true,
      cancelable: true
    });
    ev.addEventListener('test', function (e) {
      console.log('test dispatch', e.detail);
    });
    setTimeout(function () {
      ev.dispatchEvent(eve);
    }, 1000);
  </script>
</body>
</html>
```