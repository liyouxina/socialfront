<template>
	<view>
		<span>密码登录</span>
		<view class="input1">
			<image class="img" src="/static/Signout/pwdLogin/phone.png" alt=""></image>
			<input type="text"placeholder="请输入手机号" v-model="phoneNumber">
		</view>
		<view class="input2">
			<image class="img" src="forgetpwd/setpwd/suo.png" ></image>
			<input :type="isText?'text':'password'" placeholder="请输入密码	" v-model="password">
			<image  @click="toggle()" class="yan1" :src="url1" alt="">
		</view>
		<view class="account">
			<navigator url="/pages/Signout/pwdLogin/forgetpwd/forgetpwd"><span>忘记密码</span></navigator> 
			<span class="zhuce">还没有账号，<navigator url="/pages/Signout/pwdLogin/registry/registry">去注册?</navigator></span>
		</view>
		<u-button @click="login()">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				holdtime:5,
				url1:require("./zhenyan.png"),
				phoneNumber:"19995281015",
				password:"lyx666da",
				isText:false
			}
		},
		methods: {
			goToTab(){
				setTimeout(()=>{
					uni.switchTab({
						url: "/pages/Signin/oldid/index/index"
					})
				}, 1000)
			},
			login(){
				uni.request({
					url: "http://180.76.98.70:18023/user/loginByPassword?tel=" + this.phoneNumber + "&password=" + this.password,
					method:"GET",
					success: (loginByPasswordResp)=>{
						console.log(loginByPasswordResp)
						if (loginByPasswordResp.data.success) {
							uni.setStorageSync("userToken",loginByPasswordResp.data.data.token);
							uni.request({
								url: "http://180.76.98.70:18023/userdetails/getOneDetails?token=" + loginByPasswordResp.data.data.token,
								method:"GET",
								success: getOneDetailsResp => {
									console.log(getOneDetailsResp)
									if (getOneDetailsResp.data.success) {
										uni.showToast({
											title: "登陆成功"
										})
										if (getOneDetailsResp.data.data.data == null) {
											console.log("here")
											setTimeout(()=>{
												uni.navigateTo({
													url: "/pages/Signin/newid/chooseSex/chooseSex"
												})
											}, 1000)
										} else {
											console.log("here1")
											setTimeout(()=>{
												uni.switchTab({
													url: "/pages/Signin/oldid/index/index"
												})
											}, 1000)
										}
									} else {
										uni.showToast({
											title: getOneDetailsResp.data.data.msg,
										});
									}
								},
								fail: (err)=>{
									uni.showToast({
										title: err.errMsg,
									});
								}
							})
						} else {
							uni.showToast({
								title: loginByPasswordResp.data.data.msg,
							})
						}
					},
					fail: (err)=>{
						uni.showToast({
							title: err.errMsg
						});
					}
				})
			},
			toggle(){
				if(this.url1==require('./zhenyan.png')){
					this.url1=require('./biyan.png')
					this.isText=!this.isText
					
				}else{
					this.url1=require('./zhenyan.png')
								this.isText=!this.isText
				}
			}
		}
	}
</script>

<style lang="scss">

	span {
		font-size: 35upx;
		font-weight: 600;
	}
	.img {
		width: 50upx;
		height: 50upx;
		margin-right: 40upx;
	}
	image {
		width: 50upx;
		height: 50upx;
		margin-left:30upx;
	}
	.input1 {
		display: flex;
		width: 620upx;
		height: 90upx;
		background-color: rgb(70, 72, 87);
		border-radius: 60upx;
		margin-top: 60upx;
		padding-left: 40upx;
		align-items: center;
	}
	
	button {
		width: 320upx;
		font-size: 30upx;
		border: 0;
		color: orangered;
		background-color: transparent;
	}
	
	.input2 {
		display: flex;
		width: 620upx;
		height: 90upx;
		background-color: rgb(70, 72, 87);
		border-radius: 60upx;
		margin-top: 60upx;
		padding-left: 40upx;
		align-items: center;
	}
	.u-button {
		margin-top: 80upx;
		width: 600upx;
		border-radius:  60upx;
		background-color: rgb(235, 80, 68);
		color: #fff;
		font-weight: 500;
		font-size: 35upx;
		border:1upx rgb(235, 80, 68) solid;
	}
	.account {
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 30upx;
		padding: 0 10upx;
		justify-content: space-between;
	}
	.account navigator {
		color: rgb(235, 80, 68);
	}
	.account span {
		font-size: 20upx;
		font-weight: 200;
	}
	.zhuce {
		display: flex;
	} 
</style>
