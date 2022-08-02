<template>
	<view>
		<view class="tag_btn">
			<view class="tagbox" v-for="(item,index) in taglist">
				<button plain=true ref="reflist" @click="choose(item,index)" class="btn" type="default">#{{item.name}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choosetag:[],
				taglist:[
					{
						name:'土豪大叔',
					},
					{
						name:'小仙女',
					},
					{
						name:'小哥哥',
					},
					{
						name:'阳光爱笑',
					},
					{
						name:'甜美可爱',
					}
				]
			};
		},
		methods:{
			onNavigationBarButtonTap(e){
				uni.$emit("setTagList",this.choosetag)
				uni.navigateTo({
					url:"/pages/Signin/oldid/index/release/release"
				})
			},
			choose(item,index){
				if(this.$refs.reflist[index].$el.style.background!="orangered"){
					this.$refs.reflist[index].$el.style.background="orangered"
					this.$refs.reflist[index].$el.style.color="#f0f0f0"
					this.choosetag.push(this.taglist[index].name)
				}else{
					this.$refs.reflist[index].$el.style.background=null
					this.$refs.reflist[index].$el.style.color="#9a9a9a"
					this.choosetag.splice(this.taglist[index].name)
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.tag_btn {
		display: flex;
		flex-wrap: wrap;
		.tagbox:nth-child(3n){
			margin-right: 0;
		}
		.tagbox {
			width: 200upx;
			height: 80upx;
			background-color: #383b4b;
			border-radius: 50upx;
			margin-right: 25upx;
			margin-bottom: 30upx;
			.btn {
				font-size: 30upx;
				width: 200upx;
				height: 80upx;
				border-radius: 50upx;
				color: #9a9a9a;
			}
		}
	}
</style>
