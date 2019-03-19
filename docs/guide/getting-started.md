

### 2.入门：继续布局
- 对应 SLAPP 库方案：m2

> 对应 SLAPP 库方案：m2

```js 
// ios
window.webkit.messageHandlers.JSToNative_iOS.postMessage({
  method: 'updateNickName', // 方法名
  nickName: 'xxx', // 昵称
  callback: 'xxx', //成功回调方法名
  failCallback: 'xxx' // 失败回调方法名
})

// andriod
window.JSToNative.postMessage(JSON.stringify({
  method: 'updateNickName', // 方法名
  nickName: 'xxx', // 昵称
  callback: 'xxx', //成功回调方法名
  failCallback: 'xxx' // 失败回调方法名
}))
```

<!-- Now, let's try it :point_right: -->