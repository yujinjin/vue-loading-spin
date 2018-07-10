<template>
	<div class="view">
		<header class="navbar">
            <a class="icon-left"></a>
            <div class="center">加载提示插件</div>
            <a class="right-bar-text"></a>
	    </header>
		<div class="page content">
			<div class="list-panel" v-show="isShow">
				<loading v-model="isShow" :options="{'indicatorText': '列表数据正在加载中，请稍后...'}"></loading>
			</div>
			<div class="button-panel">
				<button type="button" class="btn btn-default" @click.stop.prevent="loading(false)">加载提示</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="loading(true)">加载提示(白色背景)</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="showNetTimeout">加载超时(白色背景点击刷新)</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="showLoadingComponent">自定义组件</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    data: function() {
        return {
        	isShow: false
        };
    },
    methods: {
    	loading(isShowMask){
    		this.$showLoading(isShowMask);
    		setTimeout(this.$hideLoading, 3000);
    	},
    	showNetTimeout(){
    		this.$showNetTimeout();
    	},
    	showLoadingComponent(){
    		this.isShow = true;
    		setTimeout(() => this.isShow = false, 3000);
    	}
    }
}
</script>
<style lang="less">
	.view {
		margin: 0 auto;
	    width: 100%;
	    min-width: 320px;
	    max-width: 540px;
	    display: flex;
	    position: relative;
	    
		header {
			background: rgb(255, 255, 255);
			width: 100vw;
    		z-index: 999;
    		top: 0;
    		position: fixed;
		    right: 0;
		    left: 0;
		    height: 44px;
		    padding-right: 10px;
		    padding-left: 10px;
		    border-bottom: 0;
		    border-bottom: 1px solid #e6e4e4;
		    backface-visibility: hidden;
		    display: flex;
		    justify-content:space-between;
		    
		    .icon-left {
    			text-align: center;
    			width: 50px;
    			
		    	i.back {
		    		width: 12px;
				    height: 44px;
				    display: inline-block;
				    vertical-align: middle;
				    background-size: 100% auto;
				    background-position: center;
				    background-repeat: no-repeat;
				    font-style: normal;
				    position: relative;
		    		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'12'%20height%3D'20'%20viewBox%3D'0%200%2012%2020'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M.18261596%209.4221638c.0352203-.05148305.07573462-.10050698.1215468-.14631917L9.1425872.4374202c.5830904-.58309038%201.52656832-.5849888%202.11643872.00488163.5857864.58578644.591222%201.53009836.0048816%202.11643873L3.82594417%209.9967039l7.43188553%207.4318855c.5830904.5830904.5849888%201.5265683-.0048817%202.1164387-.5857864.5857865-1.5300983.591222-2.11643868.0048816L.2980849%2010.7114853c-.3526746-.3526746-.3939974-.89699-.11546894-1.2893215z'%20fill%3D'%23007aff'%20fill-rule%3D'evenodd'%2F%3E%3C%2Fsvg%3E");
		    	}
		    	
		    	.left-text {
		    		margin-left: 5px;
		    		line-height: 44px;
		    		color: #007aff;
		    		font-size: 15px;
		    		display: inline-block;
		    	}
		    }
		    
		    .center {
		    	text-align: center;
		    	line-height: 44px;
		    	font-size: 17px;
		    	color: #000;
		    	text-overflow: ellipsis;
		    }
		    
		    .right-bar-text {
		    	width: 50px;
		    }
		}
		
		.page {
			padding-top: 0px;
    		margin-top: 0px;
    		height: auto;
    		min-height: 100vh;
    		width: 100%;
    		margin-top: 45px;
    		min-height: calc(~'100vh - 45px');
    		height: 1000px;
    		
    		.list-panel {
    			padding: 30px;
    		}
    		
    		.button-panel {
    			padding: 15px 30px;
    			
    			.btn {
				    display: inline-block;
				    line-height: 1;
				    white-space: nowrap;
				    cursor: pointer;
				    background: #fff;
				    border: 1px solid #dcdfe6;
				    border-color: #dcdfe6;
				    color: #606266;
				    -webkit-appearance: none;
				    text-align: center;
				    box-sizing: border-box;
				    outline: none;
				    margin: 0;
				    transition: .1s;
				    font-weight: 500;
				    -moz-user-select: none;
				    -webkit-user-select: none;
				    -ms-user-select: none;
				    padding: 12px 20px;
				    font-size: 14px;
				    border-radius: 4px;
    			}
    			
    			.btn:focus, .btn:hover {
    				background: #fff;
				    border-color: #409eff;
				    color: #409eff;
    			}
    			
    			.btn-default {
    				margin: 5px;
    				width: 100%;
    			}
    		}
		}
	}
	
	.message-dialog.custome {
		transform: scale(0.7);
		opacity: 0;
		transition: all 0.3s;
		
		.message-content {
			max-height: 80%;
			width: 95%;
			/*display: flex;
			flex-direction: column;*/
			
			.message-body {
				max-height: 300px;
				overflow: auto !important;
			}
			
			.message-footer {
				color: #666;
				
				.message-button:first-child {
					border-right: 1px solid #e4e4e4;
					box-sizing: border-box;
				}
				
				.message-button {
					width: 50%;
					float: left;
				}
				
				.message-button.ok {
					color: #09BB07;
					font-weight: bold;
				}
			}
		}
	}
	
	.message.message-show {
		.message-dialog.custome {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>