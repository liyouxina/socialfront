<template>
	<view>
		<view class="input1">
			<image src="./suo.png" alt="">
			<input type="text"placeholder="请输入新密码" >
			<image  @click="toggle1()" class="yan1" :src="url1" alt="">
		</view>
		<view class="input2">
			<image src="./suo.png" alt="">
			<input type="text"placeholder="请确认新密码" >
			<image @click="toggle2()" class="yan2" :src="url2" alt="">
		</view>
		<u-button @click="setpwd()">确定</u-button>
	</view>
</template>

<script>
	export default {	
		data() {
			return {
				text:"获取验证码",
				holdtime:5,
				url1:require('./zhenyan.png'),
				url2:require('./zhenyan.png')
			}
		},
		methods: {
			setpwd(){
				uni.showToast({
					title:"修改成功"
				})
			},
			toggle1(){
				if(this.url1==require('./zhenyan.png')){
					this.url1=require('./biyan.png')
				}else{
					this.url1=require('./zhenyan.png')
				}
			},
			toggle2(){
				if(this.url2==require('./zhenyan.png')){
					this.url2=require('./biyan.png')
				}else{
					this.url2=require('./zhenyan.png')
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
	.yan1  {
		width: 40upx;
		height: 40upx;
		margin-left: 50upx;
	}
	.yan2  {
		width: 40upx;
		height: 40upx;
		margin-left: 120upx;
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
