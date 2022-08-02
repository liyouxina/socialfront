import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)



App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

Vue.prototype.stopScroll = function() {
	var mo = function(e) {
		e.preventDefault()
	}
	document.body.style.overflow = 'hidden'
	document.addEventListener('touchmove', mo, false) // 禁止页面滑动
}

//弹出框可以滑动
Vue.prototype.canScroll = function() {
	var mo = function(e) {
		e.preventDefault()
	}
	document.body.style.overflow = '' // 出现滚动条
	document.removeEventListener('touchmove', mo, false)
}

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	methods
} from './uni_modules/uview-ui/libs/mixin/mixin'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
