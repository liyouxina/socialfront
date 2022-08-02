<template>
	<view>
		<view class="paylist1" v-for="(item,index) in rechargelist" >
			<view class="left" >
				<image v-show="item.name=='微信'" src="@/static/me/wechat.png" mode=""></image>
				<image v-show="item.name=='支付宝'" src="@/static/me/alipay.png" mode=""></image>
				<view>
					<span>{{item.name}}充值</span>
					<span>{{item.time}}</span>
				</view>
			</view>
			<view class="right">
				{{item.amount}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rechargelist:[
					{
						name:'微信',
						time:'2022.03.02 12:12',
						amount:'12.00'
					},
					{
						name:'支付宝',
						time:'2022.03.02 12:12',
						amount:'218.00'
					},
					{
						name:'微信',
						time:'2022.03.02 12:12',
						amount:'12.00'
					},
					{
						name:'微信',
						time:'2022.03.02 12:12',
						amount:'12.00'
					},
					{
						name:'微信',
						time:'2022.03.02 12:12',
						amount:'12.00'
					},
					{
						name:'微信',
						time:'2022.03.02 12:12',
						amount:'12.00'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	page {
		padding: 20upx 50upx;
	}
	.paylist1{
		width: 100%;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 0;
		border-bottom: 1px solid #707070;
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
					color: white;
					font-size: 30upx;
				}
				span:nth-child(2){
					color: #c2c2c2;
					font-size: 20upx;
					border-buttom: 1px solid #c6c6c6;
				}
			}
		}
	}
</style>
