<template>
	<view class="main">
		<view class="scrollbox">
			<view @click="onitem(index)"  class="scrollbox_item" v-for="(item, index) in tablist" :key="index">
				<view :class = "isactive == index ? 'list_item' : 'list_item_off' ">{{item.name}}</view>
			</view>
		</view>
		<view class="content">
			<!-- 奖励 -->
			<view class="content1" v-show="act==0">
				<view class="big_box">
					<span>奖励（币）</span>
					<span>20030</span>
				</view>
				<view class="noticelist" v-for="(item,index) in noticelist">
					<view class="noticeitem">
						<view class="notice">
							<span class="ora" >{{item.name}}</span>
							充值了
							<span class="ora">{{item.identity}}</span>
							{{item.recharge}}金币,奖励{{item.award}}金币
						</view>
						<span class="noticetime">{{item.time}}</span>
					</view>
				</view>
				<view class="content3">
					<u-button @click="hint" type="error">提现</u-button>
				</view>
			</view>
			
			<!-- 金币 -->
			<view class="content2" v-show="act==1">
				<view class="big_box">
					<span>金币（元）</span>
					<span>0.00</span>
				</view>
				<view class="chongzhi">
					<view class="recharge_box" v-for="(item,index) in recharge">
						<view ref="btn" @click="buy(index)" class="btn">
							<span>充值金币</span>
							<span>￥{{item.money}}</span>
							<span>{{item.dianquan}}币</span>
						</view>
					</view>
				</view>
				<view class="content3">
					<u-button @click="hint" type="error">充值</u-button>
				</view>
			</view>
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
				<u-button type="error">去付款</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"./recharge_record/recharge_record"
			})
		},
		data() {
			return {
				jine:12,
				ischoose:'0',
				act:0,
				isactive : 0,
				tablist:[
					{	
						name:'奖励',
						id:'0',
					},
					{
						name:'金币',
						id:'1',
					}
				],
				noticelist:[
					{
						name:'小红',
						identity:'尊贵会员',
						recharge:8000,
						award:200,
						time:'2022.02.22 12:22:20'
					},
					{
						name:'小红',
						identity:'尊贵会员',
						recharge:8000,
						award:200,
						time:'2022.02.22 12:22:20'
					},
					{
						name:'小红',
						identity:'尊贵会员',
						recharge:8000,
						award:200,
						time:'2022.02.22 12:22:20'
					},
					{
						name:'小红',
						identity:'尊贵会员',
						recharge:8000,
						award:200,
						time:'2022.02.22 12:22:20'
					}
				],
				recharge:[
					{
						money:12,
						dianquan:120,
					},
					{
						money:138,
						dianquan:1380
					},
					{
						money:218,
						dianquan:2180
					},
					{
						money:388,
						dianquan:3880
					},
					{
						money:548,
						dianquan:5480
					},
					{
						money:888,
						dianquan:8880
					}
				]
			};
		},
		methods:{
			onitem(index){
				this.isactive = index
				if(this.act==0){
					this.act=1
				}else{
					this.act=0
				}
			},
			buy(index){
				if(this.$refs.btn[index].$el.style.background=="#f0e3cf"){
					this.$refs.btn[index].$el.style.background="#cac9ca"
				}else{
					this.$refs.btn[index].$el.style.background="#f0e3cf"
				}
			},
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
		padding: 0;
		box-sizing: border-box;
	}	
	.main {
		color: white;
		position: relative;
	} 
	.u-button {
		width: 90%;
		border-radius: 40upx;
	}
	.scrollbox {
		display: flex;
		flex-direction: row;
		height: 120upx;
		padding: 0 180upx;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		.list_item {
			margin-top: 15upx;
			border-bottom:2px solid #ffffff;
			padding-bottom: 15upx;
		}
		.list_item_off {
			color: #656b87;
		}
	}
	.content1 {
		padding: 0 40upx;
		.content3 {
			display: flex;
			justify-content: center;
			margin-top: 180upx;
			.u-button {
				width: 80%;
				border-radius: 40upx;
			}
		}
		.big_box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 30upx;
			width: 100%;
			height: 200upx;
			border-radius: 15upx;
			background-color: #4a4f5b;
			span:nth-child(1){
				font-size: 30upx;
				margin-bottom: 15upx;
			}
			span:nth-child(2){
				font-size: 40upx;
			}
			
		}
		.noticeitem {
			display: flex;
			flex-direction: column;
			justify-content: center;
			border-bottom: 1px solid #545a71;
			height: 150upx;
		}
		.noticelist {
			font-size: 30upx;
		}
		.noticetime {
			font-size: 28upx;
			margin-top: 10upx;
			color: #6a7086;
		}
	}
	.ora {
		color: #d55e40;
		
	}
	.content2 {
		padding: 0 40upx;
		.content3 {
			display: flex;
			justify-content: center;
			margin-top: 200upx;
			.u-button {
				width: 80%;
				border-radius: 40upx;
			}
		}
		.big_box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 30upx;
			width: 100%;
			height: 200upx;
			border-radius: 15upx;
			background-color: #4a4f5b;
			span:nth-child(1){
				font-size: 30upx;
				margin-bottom: 15upx;
			}
			span:nth-child(2){
				font-size: 40upx;
			}
		}
		.chongzhi {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.recharge_box {
				padding-top: 40upx;
				.btn {
					display: flex;
					flex-direction: column;
					width: 200upx;
					height: 250upx;
					border-radius: 20upx;
					background: #cac9ca;
					justify-content: center;
					align-items: center;
					color: #4f4d21;
					span:nth-child(1){
						font-size: 35upx;
						font-weight: 500;
					}
					span:nth-child(2){
						font-size: 50upx;
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
