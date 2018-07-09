/**
 * 作者：yujinjin9@126.com
 * 时间：2018-07-04
 * 描述：加载插件
 */
import Loading from './loading.vue';

export default (function(){
	let LoadingConstructor = null;
	// 弹窗实例
	let loadingInstance = null;
	
	// 默认配置选项
	let defaults = {
		isFixed: true, // 是否固定位置
		isShoAnimation: true // 是否显示动画效果
	};
	
	//创建实例
	const createInstance = function(){
		loadingInstance = new LoadingConstructor({
			el: document.createElement('div'),
			data: Object.assign({}, defaults)
		});
		loadingInstance.onHide = function(){
			if(loadingInstance) {
				loadingInstance.$el.parentNode.removeChild(loadingInstance.$el);
				loadingInstance = null;
			}
		}
		return loadingInstance;
	}
	
	let loading = {
		show(isShowMask = false, autoRefresh=false, indicatorText="加载中..."){
			if(!loadingInstance) {
				loadingInstance = createInstance();
				document.body.appendChild(loadingInstance.$el);
			}
			loadingInstance.show(isShowMask, autoRefresh, indicatorText);
		},
		
		hide(){
			if(loadingInstance) loadingInstance.hide();
		},
		
		showNetTimeout(isShowMask = true, autoRefresh=true, indicatorText="网络请求超时啦，轻触自动刷新"){
			if(!loadingInstance) {
				loadingInstance = createInstance();
				document.body.appendChild(loadingInstance.$el);
			}
			loadingInstance.show(isShowMask, autoRefresh, indicatorText);
		}
	}
	
	return {
		install(Vue, options) {
			if(options) {
				defaults = Object.assign(defaults, options);
			}
			LoadingConstructor = Vue.extend(Loading);
			Vue.prototype.$showLoading = loading.show;
			Vue.prototype.$hideLoading = loading.hide;
			Vue.prototype.$showNetTimeout = loading.showNetTimeout;
			if(defaults.isComponent !== false) {
				// 默认注册成组件
				Vue.component('loading', Loading);
			}
			delete defaults.isComponent;
		}
	}
})()
