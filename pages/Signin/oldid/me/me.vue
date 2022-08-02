<template>
	<view>
		<view v-for="(item,index) in user" class="header">
			<u-avatar size="60" :src="item.src" mode="circle" :show-level="true" level-bg- color="#25AFA2" class="head-img">
			</u-avatar> <!-- 头像 -->
			<view class="like-artive">
				<view class="like-meg"> <!-- 用户名+性别+身份 -->
					<view class="like-meg-info">  
						<view class="like-meg-title">{{item.name}}</view>
						<image class="like-meg-item" :src="item.sex"></image>
						
						<view :class="item.bgc" v-for="(item,index) in item.identity">
							<image :src="item.src" mode=""></image>
							<span>{{item.span}}</span>
						</view>
					</view>
				</view>
			</view>
			<view class="infolist">
				<view class="info" v-for="(info,index) in item.information">
					<span>{{info.id}}:{{info.info}}</span>
					<span v-show="info.num!=2">|</span>
				</view>
			</view>
		</view>
		<view class="vip_remind">
			<span>会员可享受更多权限哦</span>
			<span class="remind">快去 <navigator url="/pages/Signin/oldid/me/vip/vip">充值吧>>></navigator> </span>
		</view>
		<view class="img_wall" v-for="(item,index) in user">
			<view class="wall" v-for="(img,index) in item.img_wall">
				<image :src="img.src" mode=""></image>
			</view>
			<image v-show="item.img_wall.length!=3" @click="upload(item)" class="add" src="@/static/me/release.png" mode=""></image>
		</view>
		<view class="function">
			<view class="function_item" @click="goto_function(index)" v-for="(item,index) in functionlist">
				<image :src="item.img" mode=""></image>
				<span class="item_title">{{item.title}}</span>
				<span class="jiantou">></span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:[{
					src: '../../../../static/index/touxiang.jpeg', //头像
					name: '大白兔',				//昵称
					sex:'../../../../static/index/yes_man.png',   //性别
					identity:[{  //身份标签
							src:'../../../../static/index/vip.png',
							span:'尊享会员',
							bgc:'identity-vip'
						}
					],
					information:[
						{
							num:'1',
							id:'职业',
							info:'模特'
						},
						{
							num:'2',
							id:'ID',
							info:'12345678'
						}
					],
					img_wall:[
						{src:'/static/index/exp_bg.jpeg'},
						{src:'/static/index/exp_bg.jpeg'}
					]
				}],
				functionlist:[
					{
						img:'/static/me/dongtai.png',
						title:'我的动态'
					},
					{
						img:'/static/me/invite.png',
						title:'邀请好友'
					},
					{
						img:'/static/me/moneypack.png',
						title:'我的钱包'
					},
					{
						img:'/static/me/setting.png',
						title:'设置'
					}
				]
			}
		},
		methods: {
			upload(item) {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						let img = {
							src: res.tempFilePaths[0]
						}
						item.img_wall.push(img)
						uni.uploadFile({
							url: "http://localhost:"
						})
					}
				})
			},
			goto_function(index){
				switch(index) {
					case 0:
						uni.navigateTo({
							url:"./dynamic/dynamic"
						})
						break;
					case 1:
						uni.navigateTo({
							url:"./invite/invite"
						})
						break;
					case 2:
						uni.navigateTo({
							url:"./recharge/recharge"
						})
				}
			}
		}
	}
</script>

<style lang="scss">
	image {
		display: block;
	}
	page {
		padding: 50upx 40upx;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		.infolist {
			display: flex;	
			flex-direction: row;
			span {
				margin: 0 5upx;
				font-size: 5upx;
				font-weight: 300;
			}
		}
		.like-artive {
			display: flex;
			justify-content: center;
			width: 700upx;
			height: 80upx;
			align-items: center;
			.like-meg {
				.like-meg-info {
					display: flex;
					align-items: center;
					.like-meg-title {
						font-size: 25upx;
						font-family: Microsoft YaHei, Microsoft YaHei-Regular;
						font-weight: bold;
						text-align: left;
						color: #ffffff;
					}
		
					.like-meg-item {
						width: 27upx;
						height: 27upx;
						margin-left: 12upx;
					}
					.identity-vip {
						width: 150upx;
						height: 35upx;
						border-radius: 10upx;
						background-color: #bf890e;
						margin-left: 20upx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #eeeeee;
						image {
							width: 30upx;
							height: 30upx;
						}
						span {
							font-size: 10upx;
							margin-left: 7upx;
						}
					}
					.identity-real {
						width: 170upx;
						height: 45upx;
						border-radius: 10upx;
						background-color: #9e87c9;
						margin-left: 20upx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #eeeeee;
						image {
							width: 30upx;
							height: 30upx;
						}
						span {
							font-size: 20upx;
							margin-left: 7upx;
						}
					}
				}
		
				.like-meg-tip {
					font-size: 15upx;
					font-family: Microsoft YaHei, Microsoft YaHei-Regular;
					font-weight: 400;
					text-align: left;
					color: #ffffff;
				}
			}
			
		}
	}
	.vip_remind {
		margin-top: 60upx;
		display: flex;
		padding: 20upx 20upx;
		border-radius: 15upx;
		background-color: #515663;
		align-items: center;
		font-size: 20upx;
		justify-content: space-between;
		.remind {
			display: flex;
			font-size: 5upx;
			navigator {
				color: rgb(235,100,70);
			}
		}
	}
	.img_wall {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 25upx;
		margin-bottom: 10upx;
		padding: 20upx 10upx;
		border-radius: 20upx;
		height: 200upx;
		background-color: #515663;
		image {
			width: 170upx;
			height: 170upx;
			border-radius: 20upx;
			margin-right: 50upx;
		}
		.add {
			margin-right: 0;
		}
	}
	.function_item {
		width: 100%;
		height: 90upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #4b4d5a;
		padding: 25upx 15upx;
		font-size: 30upx;
		justify-content: space-between;
		image {
			width: 60upx;
			height: 60upx;
		}
		.item_title {
			margin-left: -410upx;
		}
		.jiantou {
			font-size: 45upx;
			font-weight: 200;
		}
	}
</style>
