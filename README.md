## vue-loading-spin
vue-loading-spin是基于VUE实现的插件，同时也支持作为组件来使用。默认加载的图标是一个svg旋转的菊花，它用的是vue的默认插槽，也可以根据实际的业务需要自定义其他图标。

## 运行项目
clone项目到本地，进入项目文件夹，安装依赖

```javascript
git clone https://github.com/yujinjin/vue-loading-spin.git
cd loading
npm install
```
运行demo，会自动打开浏览器地址运行
```javascript
npm run demo
```
编译打包项目
```javascript
npm run compile
```

## NPM
```javascript
npm install vue-loading-spin
```
## 依赖
- VUE

## 使用
作为插件
```javascript
import Vue from 'vue'
import Loading from 'vue-loading-spin'
import 'vue-loading-spin/dist/loading.css'

// VUE use
Vue.use(Loading);
// or with options
Vue.use(Loading, {
    isFixed: true, // 是否固定位置，默认为true
    isComponent: true, // 是否自动注册为全局组件，如果设置为false就不会注册成组件来使用
	isShowAnimation: true // 是否显示动画效果，默认为true
});

```
## 配置选项

名称 | 描述 | 默认值 | 可选项
---|---|---|---
`isFixed` | 是否生成绝对定位的元素，相对于浏览器窗口进行定位。 | 全局属性时是：true,全局组件时是：false | `Boolean`
`isShowMask` | 是否显示遮罩背景 | false | `Boolean`
`autoRefresh` | 是否（点击）自动刷新 | false | `Boolean`
`isShowAnimation` | 是否显示动画（fadeIn）效果 | false | `Boolean`
`indicatorText` | 提示文案 | 加载中... | `String`

## API
###### 1. 默认实例方法
默认实例方法，有三个参数，可以一个都不传。默认三个参数：isShowMask = false, autoRefresh=false, indicatorText="加载中..."
```javascript
this.$showLoading();
```
示例：

![image](https://note.youdao.com/yws/public/resource/b2a61ad71011584a10dcc60987acf09a/xmlnote/8BC54633095E418EA221A48C2C7E47C6/5940)

###### 2. 带有白色背景
有白色背景的遮罩层

```javascript
this.$showLoading(true);
```
示例：

![image](https://note.youdao.com/yws/public/resource/b2a61ad71011584a10dcc60987acf09a/xmlnote/38EC928AC0284A6C8E12F9CD52154471/5962)
###### 3. 加载超时
网络请求超时，轻触自动刷新。默认实例方法有三个参数，也可以一个都不穿。默认三个参数：isShowMask = true, autoRefresh=true, indicatorText="网络请求超时啦，轻触自动刷新"

```javascript
this.$showNetTimeout();
```
示例：

![image](https://note.youdao.com/yws/public/resource/b2a61ad71011584a10dcc60987acf09a/xmlnote/0FA203964B5243398133326105024666/5947)

###### 4. 自定义组件
作为组件来使用，其配置见文档中的“配置选项”。

```html
<loading v-model="isShow" :options="{'indicatorText': '列表数据正在加载中，请稍后...'}"></loading>
```
示例：
![image](https://note.youdao.com/yws/public/resource/b2a61ad71011584a10dcc60987acf09a/xmlnote/7DBE067AD84548E2B9ADBAEA414FA43E/5949)
###### 5. 隐藏
隐藏加载的实例方法。

```javascript
this.$hideLoading()
```

## 弹窗dom结构
为了了解弹窗dom结构，这里把弹窗的源码贴出来，方便样式定义。

```html
<div class="loading" :class="{'mask': isShowMask, 'show': isShow, 'fadeIn': isShowAnimation, 'fixed': isFixed}" @touchmove.stop.prevent @click.stop.prevent="loadingFadeClick">
	<div class="loading-content">
		<slot>
		<span class="loading-icon progress">
			<svg viewBox="0 0 64 64">
				<g stroke-width="4" stroke-linecap="round">
					<line y1="17" y2="29" transform="translate(32,32) rotate(180)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(210)">
						<animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(240)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(270)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(300)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(330)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(0)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(30)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(60)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(90)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(120)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(150)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
				</g>
			</svg>
		</span>
		</slot>
		<div class="indicator-text" v-html="indicatorText" v-if="indicatorText"></div>
	</div>
</div>
```


## 最后
- 如果喜欢一定要 star哈!!!（谢谢!!）

- 如果有意见和问题 请在 lssues提出，我会在线解答。
