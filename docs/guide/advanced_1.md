### 3.工作：增删查改

>对应 SLAPP 库方案：m1,实际 APP 接收格式：

- [Vue.js](https://vuejs.org/)
- [VuePress](https://vuepress.vuejs.org/)

Actually, you don't have to learn the whole Vue.js. Html and CSS are more essential.

By looking at the `.vue` files I provided, you should understand how the `.vue` file works.

Read [VuePress Guide](https://vuepress.vuejs.org/guide/) and understand how VuePress is capable of.

```js 
// ios
window.webkit.messageHandlers.JSToNative_iOS.postMessage({
  method: 'updateUserInfoBirthday', // 方法名
  params: {
    birthday: '' // 生日
  },
  callback: 'xxxx' // 成功回调方法名
})

// andriod
window.JSToNative.postMessage(JSON.stringify({
  method: 'updateUserInfoBirthday', // 方法名
  params: {
    birthday: '' // 生日
  },
  callback: 'xxxx' // 成功回调方法名
}))
```
