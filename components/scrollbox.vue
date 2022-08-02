<template>
	<view>
		<view class="scrollbox">  <!-- 导航栏:find -->
			<view @click="onitem(index)"  class="scrollbox_item" v-for="(item, index) in tablist" :key="index">
				<view :class = "isactive == index ? 'list_item' : 'list_item_off' ">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"scrollbox",
		data() {
			return {
				isactive : 0,
				tablist:[
					{	
						name:'推荐',
						id:'1',
					},
					{
						name:'附近',
						id:'2',
					},
					{
						name:'真人认证',
						id:'3',
					}
				],
			};
		},
		methods:{
			onitem(index){
				this.isactive = index
			}
		}
	}
</script>

<style lang="scss">
	.scrollbox {
		display: flex;
		flex-direction: row;
		height: 120upx;
		padding: 0 40upx;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		.list_item {
			color: #fff;
			margin-top: 15upx;
			border-bottom:2px solid #ffffff;
			padding-bottom: 15upx;
		}
		.list_item_off {
			color: #656b87;
		}
	}
</style>