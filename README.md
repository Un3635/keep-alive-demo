# keepalive

> A Vue.js project
## 失败的原因 》未注意 路由中的 router-view
## 缓存部分组件 》 在 router 中设置meta: {keepAlive: true}即可
## 使用include和exclude的时候，名字设的是，name是组件的名字，并不是路由的名字，并且也要注意router中设置了<router-view /> 若设置了，则只能在这里设置include 和 exclude 才有作用
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
