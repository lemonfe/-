```js
function Promise(fn) {
  var state = 'pending',
    value = null,
    callbacks = [];

  this.then = function (onFulfilled, onRejected) {
    return new Promise(function (resolve, reject) {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      });
    });
  };

  function handle(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return;
    }

    var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
      ret;
    if (cb === null) {
      cb = state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(value);
      return;
    }
    try {
      ret = cb(value);
      callback.resolve(ret);
    } catch (e) {
      callback.reject(e);
    }
  }

  function resolve(newValue) {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve, reject);
        return;
      }
    }
    state = 'fulfilled';
    value = newValue;
    execute();
  }

  function reject(reason) {
    state = 'rejected';
    value = reason;
    execute();
  }

  function execute() {
    setTimeout(function () {
      callbacks.forEach(function (callback) {
        handle(callback);
      });
    }, 0);
  }

  fn(resolve, reject);
}

function getID() {
  return new Promise(function (resolve) {
    console.log("get id...");
    setTimeout(function () {
      console.log('返回id')
      resolve("666");
    }, 1000);
  })
}

function getNameByID(id) {
  return new Promise(function (resolve) {
    console.log(id);
    console.log("get name...")
    setTimeout(function () {
      console.log('返回名字')
      resolve("hjm");
    }, 10000);
  })
}

var a = getID()
a.then(getNameByID).then(getNameByID).then(function (name) {
  console.log('sass', name);
}, function (err) {
  console.log(err);
});
```