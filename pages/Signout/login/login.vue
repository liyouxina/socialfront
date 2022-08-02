<template>
	<view  class="box">
		<view class="main">
			<u--image class="avatar" width="100px" height="100px" src="./logistic-logo.png" shape="circle"></u--image>
			<u-button @click="login()">手机号登录</u-button>
			<view class="item">
				<u-checkbox-group placement="row" size="14" shape="circle">
					<u-checkbox  @change="judge()" activeColor="gray"></u-checkbox>
					<span>同意<a>服务条款</a>和<a>用户协议</a>、<a href="">隐私协议</a></span>
				</u-checkbox-group>
			</view>
		</view>
		<view ref="warning" class="pro_box" v-show="warning">
			<view class="protocol" >
				<span>隐私保护协议</span>
				<span>
					本人个信息保护指引将通过《用户协议》与《隐私政策》帮助你了解我们如何收集、处理个人信息。</br>
					你可随时在“设置-隐私”中关闭个性化推荐权限，仅使用App基本功能。</br>本人个信息保护指引将通过
					《用户协议》与《隐私政策》帮助你了解我们如何收集、处理个人信息。</br>
					你可随时在“设置-隐私”中关闭个性化推荐权限，仅使用App基本功能。
				</span>
				<view class="btn">
					<u-button @click="exit" type="default">取消</u-button>
					<u-button @click="agree" type="default">确定</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				success:false,//是否同意条款
				warning:false//是否显示弹窗
			};
		},
		methods:{
			judge(){
				if(!this.success){
					this.warning=!this.warning
				}else{
					this.success=!this.success
				}	
			},
			login(){
				if(this.success==false){
					uni.showToast({
						title:"请勾选隐私保护协议",
						duration:2000,
						position:"buttom",
						icon:"error"
					})
				}else{
					uni.navigateTo({
						url:"../phoneLogin/phoneLogin"
					})
				}
			},
			exit(){
				this.warning=!this.warning
				uni.redirectTo({url:'./login'})
			},
			agree(){
				this.success=true
				this.warning=!this.warning
			}
		}
	}
</script>

<style lang="scss">
	a {
		text-decoration:none;
		color: rgb(235, 80, 68);
	}
	page {
		background-color: rgb(33, 35, 48);
		color: #ececec;
	}
	.box {
		padding-top: 220upx;
		position: relative;
	}
	.avatar  {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.u-button {
		margin-top: 55upx;
		width: 600upx;
		border-radius:  60upx;
		background-color: rgb(235, 80, 68);
		color: #fff;
		font-weight: 500;
		font-size: 35upx;
		border:1upx rgb(235, 80, 68) solid;
	}
	span {
		font-size: 15upx;
		color: #cacaca;
	}
	.item {
		margin-top: 500upx;
		margin-left: 40upx;
	}
	.pro_box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(7, 5, 5, 0.5);
	}
	.protocol {
		width: 500upx;
		height: 700upx;
		background-color: #fff;
		padding: 37upx;
		border-radius: 40upx;
	}
	.protocol span:nth-child(1) {
		display: flex;
		justify-content: center;
		font-weight: 600;
		color: black;
		margin-top: 10upx;
		font-size: 35upx;
	}
	.protocol span:nth-child(2) {
		display: flex;
		justify-content: center;
		font-weight: 500;
		color: black;
		margin-top: 50upx;
		font-size: 26upx;
	}
	.btn {
		display: flex;
		justify-content: center;
		padding: 0 20upx;
	}
	.btn .u-button {
		width: 160upx;
		height: 60upx;
		border-radius:  50upx;
		background-color: rgb(235, 80, 68);
		color: #fff;
		font-weight: 500;
		font-size: 28upx;
	}
</style>
