<template>
	<view>
		<view class="input1">
			<image src="phone.png" ></image>
			<input type="text" placeholder="请输入手机号" >
		</view>
		<view class="input2">
			<image src="./dunpai.png" alt=""></image>
			<input type="text" placeholder="请输入验证码" >
			<button  ref="textobject" class="gettext" @click="getText">{{text}}</button>
		</view>
		<u-button @click="findpwd()">确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"获取验证码",
				holdtime:5,
			}
		},
		methods: {
			getText(){
				if(this.holdtime==5){//防重复点击
					uni.showToast({
						title: '已发送验证码，请注意查收'
					});
					this.$refs.textobject.$el.style.color="#efefef"
					//倒数计时
					let istime=setInterval(()=>{	
						this.text="重新获取"+"("+this.holdtime+")"
						this.holdtime--;
						if(this.holdtime<=0){
							this.$refs.textobject.$el.style.color="orangered"
							this.text="获取验证码"
							clearInterval("istime");
						}
					},1000)
					this.holdtime=5
				}else{
					alert("未到时间")
				}
				
			},
			findpwd(){
				uni.navigateTo({
					url:"setpwd/setpwd"
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
