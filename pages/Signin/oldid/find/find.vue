<template>
	<view>
		<view class="search">
			<u-search bgColor="#4b4f5b"  :showAction="false"  @confirm="search" @input="input" placeholder="输入用户ID"></u-search>
			<span class="searchbtn" >搜索</span>
		</view>
		<scroll @click="choosemenu" ref="scr_child"></scroll>
		
		<view class="Userlist" v-for="(item,index) in userlist">  <!-- 用户列表 -->
			<view class="like-artive">
				<u-avatar :src="item.src" mode="circle" :show-level="true" level-bg- color="#25AFA2" class="head-img">
				</u-avatar> <!-- 头像 -->
				<view class="like-meg">
					<view class="like-meg-info">  <!-- 用户名+性别+身份 -->
						<view class="like-meg-title">{{item.name}}</view>
						<image class="like-meg-item" :src="item.sex"></image>
						
						<view :class="item.bgc" v-for="(item,index) in item.identity">
							<image :src="item.src" mode=""></image>
							<span>{{item.span}}</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import scroll from '@/components/scrollbox.vue'
	export default {
		components:{
			scroll
		},
		data() {
			return {
				userlist:[{
					src: '../../../../static/index/touxiang.jpeg', //头像
					name: '大白兔',				//昵称
					sex:'../../../../static/index/yes_man.png',   //性别
					identity:[{  //身份标签
							src:'../../../../static/index/vip.png',
							span:'尊享会员',
							bgc:'identity-vip'
						}
					]
				}]
			};
		},
		methods:{
			choosemenu(){
				this.$refs.scr_child.onitem(index)
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0 40upx;
	}
	.search {
		display: flex;
		align-items: center;
		.searchbtn {
			margin-left: 40upx;
		}
	}
	.like-artive {
		display: flex;
		width: 700upx;
		height: 80upx;
		align-items: center;
		margin: 20upx auto;
	
		.like-meg {
			padding-left: 20upx;
	
			.like-meg-info {
				display: flex;
				padding-bottom: 15upx;
				align-items: center;
				.like-meg-title {
					font-size: 30upx;
					font-family: Microsoft YaHei, Microsoft YaHei-Regular;
					font-weight: bold;
					text-align: left;
					color: #ffffff;
				}
	
				.like-meg-item {
					width: 35upx;
					height: 35upx;
					margin-left: 12upx;
				}
				.identity-vip {
					width: 170upx;
					height: 45upx;
					border-radius: 10upx;
					background-color: #bf890e;
					margin-left: 20upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #eeeeee;
					image {
						width: 40upx;
						height: 40upx;
					}
					span {
						font-size: 27upx;
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
						width: 40upx;
						height: 40upx;
					}
					span {
						font-size: 27upx;
						margin-left: 7upx;
					}
				}
			}
	
			.like-meg-tip {
				font-size: 20upx;
				font-family: Microsoft YaHei, Microsoft YaHei-Regular;
				font-weight: 400;
				text-align: left;
				color: #ffffff;
			}
		}
		
 	}
</style>
