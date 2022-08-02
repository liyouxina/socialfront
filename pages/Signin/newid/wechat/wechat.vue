<template>
	<view>
		<view class="input1">
			<span>微信</span>
			<input type="text"placeholder="请输入手机号" v-model="wechat">
		</view>
		<button type="default" @click="updateDetail()">进入旅程</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wechat: ""
			}
		},
		methods: {
			updateDetail(){
				if (this.wechat == "") {
					uni.showToast({
						title: "请输入手机号",
					})
					return;
				}
				uni.request({
					url: "http://180.76.98.70:18023/userdetails/insertOrUpdate?token=" + uni.getStorageSync("userToken"),
					method:"POST",
					data: {
						wechatid: this.wechat
					},
					success: resp => {
						console.log(resp)
						if (resp.data.success) {
							uni.switchTab({
								url: "/pages/Signin/oldid/index/index"
							})
						} else {
							uni.showToast({
								title: resp.data.data.msg,
							});
						}
					},
					fail: (err)=>{
						uni.showToast({
							title: err.errMsg,
						});
					}
				})
			},
		}
	}
</script>

<style>
	
	.input1 {
		display: flex;
		width: 620upx;
		height: 90upx;
		background-color: rgb(70, 72, 87);
		border-radius: 60upx;
		margin-top: 40%;
		padding-left: 40upx;
		align-items: center;
	}
	span {
		margin-right: 40upx;
	}
	button {
		margin-top: 80upx;
		margin-left: -1upx;
		width: 620upx;
		height: 80upx;
		line-height: 70upx;
		border-radius:  60upx;
		background-color: rgb(235, 80, 68);
		color: #fff;
		font-weight: 500;
		font-size: 35upx;
		border:1upx rgb(235, 80, 68) solid;
	}
</style>
