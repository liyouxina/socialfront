<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000"  >
			<swiper-item v-for="(item,index) in viplist" :key="index">
				<u-button class="lunbotu" color="linear-gradient(to right,rgb(195,101,40),rgb(220, 158, 43))">
					<view class="swiper-item">
						<view class="title">
							<span>{{item.name}}会员</span>
							<span>366天</span>
						</view>
						<view class="contain">
							<span>购买价格: {{item.realprice}}元</span>
							<span>原价: {{item.price}}元</span>
						</view>
					</view>	
				</u-button>
			</swiper-item>
		</swiper>
		<view class="vippower">
			<span>会员特权</span>
			<view class="vipflex">
				<view class="boxlist" v-for="(item,index) in vip" :key="index">
					<view class="box">
						<u-image :src="item.img"  shape="circle" width="30" height="30" mode=""></u-image>
						<view class="font">
							<span>{{item.title}}</span>
							<span>{{item.eng}}</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<u-button id="btn" @click="hint" type="error">去付款</u-button>
		</view>
		
		
		<view ref="hintref" class="hint_father">
			<view class="hint">
				<view class="title">
					<span>选择付款方式</span>
					<button plain="true" @click="close" class="close">x</button>
				</view>
				<view class="paylist1">
					<view class="left">
						<image src="@/static/me/wechat.png" mode=""></image>
						<view>
							<span>微信支付</span>
							<span>使用微信快捷支付</span>
						</view>
					</view>
					<view class="right">
						<label>
							<checkbox :value="ischoose" />
						</label>
					</view>
				</view>
				<view class="paylist2">
					<view class="left">
						<image src="@/static/me/alipay.png" mode=""></image>
						<view>
							<span>支付宝支付</span>
							<span>使用支付宝快捷支付</span>
						</view>
					</view>
					<view class="right">
						<label>
							<checkbox :value="ischoose" />
						</label>
					</view>
				</view>
				<view class="jine">
					<span>支付<span class="num">￥{{jine}}</span></span>
				</view>
				<u-button shape="circle" type="error">去付款</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'vip_record/vip_record'
			})
		},
		data() {
			return {
				jine:12,
				ischoose:'0',
				viplist:[
					{
						name:'神豪',
						realprice:'888',
						price:'1000'
					},
					{
						name:'神豪',
						realprice:'888',
						price:'1000'
					},
					{
						name:'神豪',
						realprice:'888',
						price:'1000'
					}
				],
				vip:[
					{
						img:'/static/me/jiesuo.png',
						title:'每天十次解锁',
						eng:'Unlock ten times a day'
					},
					{
						img:'/static/me/shoucang.png',
						title:'每天三条动态',
						eng:'There daily trends'
					},
					{
						img:'/static/me/huiyuan.png',
						title:'点亮会员标识',
						eng:'the membership label'
					},
					{
						img:'/static/me/yuehui.png',
						title:'不限报名约会',
						eng:'Unlimited registration'
					},
					{
						img:'/static/me/liaotian.png',
						title:'私聊想聊就聊',
						eng:'Chat privately'
					},
					{
						img:'/static/me/pinglun.png',
						title:'评论能看能评',
						eng:'read and comment'
					}
				]
			}
		},
		methods: {
			hint(){
				this.$refs.hintref.$el.style.display="flex"
			},
			close(){
				this.$refs.hintref.$el.style.display="none"
			}
		}
	}
</script>

<style lang="scss">
	page {
		color: white;
		padding: 20upx 30upx;
	}
	#btn {
		width: 80%;
		height: 80upx;
		margin-top: 35%;
		border-radius: 30upx;
	}
	.lunbotu{
		width: 100%;
		height: 280upx;
		border-radius: 30upx;
		.swiper-item {
			width: 100%;
			height: 280upx;
			padding: 50upx 40upx;
			border-radius: 30upx;
			.title {
				display: flex;
				justify-content: space-between;
				font-size: 40upx;
			}
			.contain {
				display: flex;
				flex-direction: column;
				align-items: baseline;
				margin-top: 25upx;
				font-weight: 300;
				span:nth-child(1){
					font-size: 30upx;
				}
				span:nth-child(2){
					margin-top: 6upx;
					font-size: 25upx;
				}
			}
		}
	}
	.vippower {
		margin-top: 30upx;
		.vipflex {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box {
				width: 336upx;
				background-color: #525662;
				height: 120upx;
				border-radius: 20upx;
				margin-top: 20upx;
				margin-bottom: 20upx;
				display: flex;
				align-items: center;
				padding-left: 20upx;
				.font {
					display: flex;
					flex-direction: column;
					margin-left: 10upx;
					span:nth-child(1){
						font-size: 20upx;
					}
					span:nth-child(2){
						margin-top: 6upx;
						font-size: 12upx;
						transform-origin: 0 0;
						transform: scale(0.6);
						font-weight: 200;
					}
				}
			}
		}
		
	}
	.hint_father {
		z-index: 999;
		display: none;
		bottom: 0;
		flex-direction: column-reverse;
		align-items: center;
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(7, 5, 5, 0.6);
		.hint {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			border-radius: 20upx;
			padding: 60upx 50upx;
			background: #efefef;
			.title {
				margin-bottom: 50upx;
				color: black;
				font-size: 35upx;
				display: flex;
				width: 100%;
				justify-content: center;
				position: relative;
				align-items: center;
				.close {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 0;
					width: 50upx;
					height: 50upx;
				}
				button {
					border: 0;
					font-size: 50upx;
					font-weight: 200;
				}
			}
			.paylist1{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #efefef;
				padding: 30upx 0;
				border-top: 1px solid #c6c6c6;
				.left {
					display: flex;
					image {
						width: 80upx;
						height: 80upx;
					}
					view {
						display: flex;
						flex-direction: column;
						span:nth-child(1){
							color: black;
						}
						span:nth-child(2){
							color: #c2c2c2;
							font-size: 20upx;
							border-buttom: 1px solid #c6c6c6;
						}
					}
				}
			}
			.paylist2{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #efefef;
				padding: 30upx 0;
				border-top: 1px solid #c6c6c6;
				border-bottom: 1px solid #c6c6c6;
				.left {
					display: flex;
					image {
						width: 80upx;
						height: 80upx;
					}
					view {
						display: flex;
						flex-direction: column;
						span:nth-child(1){
							color: black;
						}
						span:nth-child(2){
							color: #c2c2c2;
							font-size: 20upx;
							border-buttom: 1px solid #c6c6c6;
						}
					}
				}
			}
			.jine {
				width: 100%;
				padding: 30upx 0;
				color: black;
				display: flex;
				flex-direction: row-reverse;
				.num {
					color: red;
				}
			}
		}
	}
</style>
