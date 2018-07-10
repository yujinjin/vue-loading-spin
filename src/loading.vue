<template>
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
</template>
<script>
	module.exports = {
		data: function() {
			return {
				isShow: false, // 是否显示
				isFixed: false, // 是否生成绝对定位的元素，相对于浏览器窗口进行定位。
				isShowMask: false, // 是否显示遮罩背景
				autoRefresh: false, // 是否自动刷新
				isShowAnimation: false, // 是否显示动画效果
				indicatorText: "加载中...", // 提示文案，网络请求超时啦，轻触自动刷新
				onHide: null // 隐藏回调函数
			}
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			options: {
				type: Object,
				required: false,
				default: () => ({})
			}
		},
		watch: {
			value(val) {
				this.isShow = val;
			},
			options: {
    			handler: function (newVal, oldVal) {
    				//TODO： 验证当前options的选项值是否已经更新到最新的值上去了
    				this.initOptionsData();
    			},
    			deep: true
    		}
		},
		mounted() {
			this.isShow = this.value || false;
			this.initOptionsData();
		},
		methods: {
			initOptionsData(){
				if(typeof(this.options.isFixed) === "boolean") this.isFixed = this.options.isFixed;
				if(typeof(this.options.isShowMask) === "boolean") this.isShowMask = this.options.isShowMask;
				if(typeof(this.options.autoRefresh) === "boolean") this.autoRefresh = this.options.autoRefresh;
				if(typeof(this.options.autoRefresh) === "boolean") this.autoRefresh = this.options.autoRefresh;
				if(typeof(this.options.isShowAnimation) === "boolean") this.isShowAnimation = this.options.isShowAnimation;
				if(this.options.indicatorText && typeof(this.options.indicatorText) === "string") this.indicatorText = this.options.indicatorText;
			},
			// 显示
			show(isShowMask = false, autoRefresh=false, indicatorText=""){
				this.isShow = true;
				this.isShowMask = isShowMask;
				this.autoRefresh = autoRefresh;
				this.indicatorText = indicatorText;
			},
			// 隐藏
			hide(){
				this.isShow = false; 
				if(this.onHide && typeof(this.onHide) === "function") {
					this.$nextTick(() => { 
						// 异步操作判断
						if(!this.isShow) this.onHide(); 
					});
				}
			},
			
			// 弹窗点击事件
			loadingFadeClick(){
				if(this.autoRefresh) {
					window.location.reload();
				}
			}
		}
	}
</script>
<style lang="less">
	.loading {
		width: 100%;
		height: 100%;
		display: none;
		text-align: center;
		
		&.show {
			display: block;
		}
		
		.loading-content {
			
			.progress {
				display: inline-block;
			    border: none;
			    background-size: contain;
		    	stroke: #AAA;
		    	fill: #fff;
		    	svg {
		    		display: block;
		    		position: relative;
		    		height:30px;
					width: 30px;
		    	}
			}
			
			.indicator-text{
				font-size: 12px;
				color: #999;
			}
		}
		
		&.fixed {
			position: fixed;
			z-index: 999;
			top: 0px;
			left: 0px;
			right: 0px;
			bottom: 0px;
			
			.loading-content {
				position:fixed;
			    left:50%;
			    top:50%;
			    transform: translate(-50%,-50%);
			    display: table-cell;
				vertical-align: middle;
				background: rgba(0,0,0,0.5);
				border-radius: 5px;
				line-height: 30px;
				padding: 15px;
				
				.progress {
					float: left;
		    		margin-right: 10px;
			    	stroke: #FFFFFF;
				}
				
				.indicator-text {
					font-size: 14px;
					color:#fff;
					float: left;
				}
			}
		}
		
		&.mask {
			background-color: #FFFFFF;
			
			@keyframes fadeIn {
			  	from {
			    	opacity: 0;
			  	}
			
			  	to {
			    	opacity: 1;
			  	}
			}
			
			&.fadeIn {
				animation: fadeIn .3s;
			}
			
			.loading-content {
				background: #FFFFFF;
				border-radius: 0px;
				width: 70%;
				text-align: center;
					
				.progress {
					float: none;
					stroke: #AAA;
					
					svg {
						height:12vw;
						width: 12vw;
						max-height: 60px;
						max-width: 60px;
					}
				}
				
				.indicator-text{
					float: none;
					font-size: 12px;
					color: #999;
				}
			}
		}
	}
</style>