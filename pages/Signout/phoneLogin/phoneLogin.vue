<template>
	<view>
		<span>手机号登录</span>
		<view class="input1">
			<image src="./phone.png"></image>
			<input type="text"  placeholder="请输入手机号" v-model="phoneNumber">
		</view>
		<view class="input2">
		<image src="dunpai.png"></image>
			<input type="text" placeholder="请输入验证码" >
			<button  ref="textobject" class="gettext" @click="getText">{{text}}</button>
		</view>
		<view class="input3">
			<image src="./invite.png"></image>
			<input type="text" placeholder="请输入邀请码 (选填)" >
		</view>
		<view class="account">
			<span class="zhuce">还没有账号，<navigator url="/pages/Signout/pwdLogin/registry/registry">去注册?</navigator></span>
		</view>
		<u-button @click="phonelogin()">登录</u-button>
	</view>
</template>

<script>
	export default {
		onNavigationBarButtonTap(e){
			uni.navigateTo({
				url:'/pages/Signout/pwdLogin/pwdLogin'
			})
		},
		data() {
			return {
				text:"获取验证码",
				holdtime:60,
				phoneNumber:"",
			}
		},
		methods: {	
			getText(){
				if(this.holdtime==60){//防重复点击
					uni.request({
						url: "http://180.76.98.70:18023/user/loginByTel?tel=" + this.phoneNumber,
						method:"GET",
						success: (resp)=>{
							if (!resp.data.success) {
								uni.showToast({
									title: resp.data.data.msg,
									icon: "error"
								});
								return
							}
						
							uni.showToast({
								title: '已发送验证码，请注意查收'
							});
							this.$refs.textobject.$el.style.color="#efefef"
							//倒数计时
							let istime=setInterval(()=>{	
								this.text="重新获取"+"("+this.holdtime+")"
								this.holdtime--;
								if(this.holdtime<=-2){
									this.holdtime=60
									this.$refs.textobject.$el.style.color="orangered"
									this.text="获取验证码"
									clearInterval("istime");
								}
							},1000)
						},
						fail: (err)=>{
							uni.showToast({
								title: err.errMsg
							});
						}
					})
				}
			},
			phonelogin(){
				uni.showToast({
					title:"登录成功"
				})
				
				uni.switchTab({
					url:'/pages/Signin/oldid/index/index'
				})
			}
		}
	}
</script>

<style>
	span {
		font-size: 35upx;
		font-weight: 600;
	}
	image {
		width: 50upx;
		height: 50upx;
		margin-right: 40upx;
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
	button {
		width: 320upx;
		font-size: 30upx;
		border: 0;
		color: orangered;
		background-color: transparent;
	}
	.input2 input {
		width: 280upx;
	}
	.input3 {
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
		margin-top: 120upx;
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
