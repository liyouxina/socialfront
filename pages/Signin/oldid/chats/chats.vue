<template>
	<view>
		<view class="main">
			<image class="bg" src="../../../../static/chat/chat_background.png" mode=""></image>
			<view class="chat" v-for="(item,index) in username">
				<view @click="gotochat()" class="chat_list">
					<u-image width="110upx" height="110upx" shape="circle" :src="item.headimg"></u-image>
					<span>{{item.name}}</span>
					<view class="chat_number">{{item.chatnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:[
					{
						name:'系统消息',
						headimg:'../../../../static/chat/system_notion.png',
						chatnum:'3'
					},
					{
						name:'小白兔',
						headimg:'../../../../static/index/touxiang.jpeg',
						chatnum:'12'
					},
					{
						name:'宋媛媛',
						headimg:'../../../../static/index/touxiang.jpeg',
						chatnum:'3'
					}
				]
			};
		},
		methods:{
			gotochat(){
				uni.navigateTo({
					url:"/pages/Signin/oldid/chats/chatdetail/chatdetail"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		color: #fff;
		padding: 10upx 25upx;
	}
	.main {
		width: 100%;
		height: 100%;
	}
	.bg {
		display: block;
		width: 100%;
		height: 200upx;
		border-radius: 15upx;
		margin-bottom: 20upx;
	}
		.chat {
		width: 100%;
		height: 160upx;
		.chat_list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #4b4d5a;
			padding: 25upx 0;
			span {
				margin-left: -380upx;
				font-size: 28upx
			}
			.chat_number {
				font-size: 15upx;
				height: 40upx;
				background-color: red;
				padding: 3upx 12upx;
				border-radius: 100%;
				text-align: center;
				line-height: 34upx;
			}
		}
	}
</style>
