<template>
	<view>
		<span>账号注册</span>
		<view class="input1">
			<image src="./phone.png"></image>
			<input type="text" placeholder="请输入手机号" v-model="phoneNumber">
		</view>
		<view class="input2">
				<image src="./dunpai.png"></image>
			<input type="text" v-model="code" placeholder="请输入验证码" >       
			<button ref="textobject" class="gettext"@click="getText">{{text}}</button>
		</view>                                                 <!-- 节流 -->
		<view class="input3">
		<image src="./dunpai.png"></image>
			<input :password="flag" type="text" v-model="password" placeholder="请输入密码" >
			<button style="line-height: 100%;" @click="vision()"><image :src="passwordUrl"></image>
			</button>
		</view>
		<view class="input4">
				<image src="./invite.png"></image>
			<input type="text"placeholder="请输入邀请码 (选填)" >
		</view>
		<u-button @click="registry()">注册</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"获取验证码",
				holdtime:60,
				passwordUrl:"static/image/yincang.png",
				flag: true,
				phoneNumber:"",
				password:"",
				code:"",
			}
		},
		methods: {
			getText(){
				uni.request({
					url: "http://180.76.98.70:18023/user/getCode?tel=" + this.phoneNumber,
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
								this.$refs.textobject.$el.style.color="orangered"
								this.text="获取验证码"
								clearInterval("istime");
							}
						},1000)
						this.holdtime=60
					},
					fail: (err)=>{
						uni.showToast({
							title: err.errMsg
						});
					}
				})
			},
			registry(){
				
				uni.request({
					url: "http://180.76.98.70:18023/user/getCode?tel=" + this.phoneNumber + "&password=" + this.password + "&code=" + this.code ,
					method:"POST",
					success: (resp)=>{
						console.log(resp)
						if (!resp.data.success) {
							uni.showToast({
								title: resp.data.data.msg,
								icon:'none'
							});
							return
						}
						uni.showToast({
							title:"注册成功"
						})
						setTimeout(()=>{
							uni.navigateBack({})
						}, 1000)
					}
				})
			},
			vision(){
				console.log("click")
				this.flag = !this.flag;
				if (this.flag) {
					this.passwordUrl = "/static/image/yincang.png"
				} else {
					this.passwordUrl = "/static/image/xianshi.png"
				}
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
	.input4 {
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
</style>

