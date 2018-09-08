## ADM CMD CommonJs

## 什么是 ADM CMD CommonJs？

* AMD是RquuireJS在推广过程中对模块定义的规范化产出。

```js
// 依赖前置
define(['package/lib', function(lib) {
  function foo() {
    lib.log('hello world!)
  }

  return {
    foo: foo
  }
}])
```

* CMD是SeaJS在推广过程中对模块定义的规范化产出。

```js
// 就近引用
define(function(require, exports, module) {
  var $ = require('juuery')
})
```

* CommonJS规范 - module.exports

```js
// nodejs中使用CommonJS规范
exports.area = function (r) {
  return Math.PI * r *r
}
```

* ES6特性 export/import

```js
import './a.js'
export default {
  data () {
    return {

    }
  }
}
```