<template>
	<view>
		<span>充值返利</span>
		<view class="userlist">
			<view class="user">
				<view class="u_title">
					<u-image shape="circle" width="25" height="25" src="/static/index/touxiang.jpeg" mode=""></u-image>
					<span>用户昵称</span>
				</view>
				<view class="main">
					您邀请的男性用户充值VIP，您将获得<span>20%</span>的返佣
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page {
		padding: 20upx 20upx;
	}
	.user {
		width: 100%;
		height:170upx;
		background-color: #4b4f5b;
		border-radius: 15upx;
		padding-left: 25upx;
		display: flex;
		margin-top: 30upx;
		flex-direction: column;
		justify-content: center;
		.u_title {
			display: flex;
			margin-bottom: 15upx;
			span {
				margin-left: 10upx;
			}
		}
		.main {
			font-size: 20upx;
			color: #a1a1a1;
			span {
				font-size: 40upx;
				color: #eb5044;
			}
		}
	}
</style>
