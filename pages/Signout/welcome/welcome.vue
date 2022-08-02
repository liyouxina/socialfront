<template>
	<view :fade="true" duration="1150">
		<image  src="./bg.png"></image>
		<view class="text">
			<u--image width="60px" height="60px" src="./logistic-logo.png" shape="circle"></u--image>
			<span>社交聊天</span>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			setTimeout(function() {
				uni.redirectTo({url:"../login/login",
				animationType: 'pop-in',
				animationDuration: 200})
			}, 3000);
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 0;
	}
	image {
		width: 100%;
		height: 1150upx;
	}
	.text {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: 15upx;
		justify-content: center;
		align-items: center;
		font-weight: 500;
	}
	span {
		margin-left: 20upx;
	}
</style>
