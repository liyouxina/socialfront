<template>
	<view>
		<span class="wen">你的性别？</span>
		<view class="sexImage">
			<view class="man_box">
				<view ref="man" @click="changman()" class="man"><image :src="manimg" mode=""></image></view>
				<span>男生</span>
			</view>
			<view class="women_box">
				<view ref="women" @click="changwomen()" class="women"><image ref="womenimg" :src="womenimg"></image></view>	
				<span>女生</span>
			</view>
		</view>
		<u-button shape="circle" @click="updateDetail()">确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: "",
				manimg:require("./no_man.png"),
				womenimg:require("./no_women.png")
			}	
		},
		methods: {
			changman(){//点击改变样式
				this.sex = "ma";
				if(this.manimg=require("./no_man.png")){
					this.manimg=require("./yes_man.png")
					this.$refs.man.$el.style.background="rgb(84,84,253)"
					this.womenimg=require("./no_women.png")
					this.$refs.women.$el.style.background="rgb(70,72,87)"
				}	
			},
			changwomen(){
				this.sex = "wo";
				if(this.womenimg=require("./no_women.png")){
					this.womenimg=require("./yes_women.png")
					this.$refs.women.$el.style.background="rgb(255,84,246)"
					this.manimg=require("./no_man.png")
					this.$refs.man.$el.style.background="rgb(70,72,87)"
				}
			},
			updateDetail(){
				if (this.sex == "") {
					uni.showToast({
						title: "请选择性别",
					})
					return;
				}
				uni.request({
					url: "http://180.76.98.70:18023/userdetails/insertOrUpdate?token=" + uni.getStorageSync("userToken"),
					method:"POST",
					data: {
						sex: this.sex
					},
					success: resp => {
						console.log(resp)
						if (resp.data.success) {
							uni.navigateTo({
								url: "/pages/Signin/newid/information/information"
							})
						} else {
							uni.showToast({
								title: resp.data.data.msg,
							});
						}
					},
					fail: (err)=>{
						uni.showToast({
							title: err.errMsg,
						});
					}
				})
			}
			
		}
	}
</script>

<style>
	view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wen {
		font-size: 35upx;
		margin-top: 250upx;
	}
	.sexImage {
		margin-top: 50upx;
		display: flex;
		flex-direction: row;
	}
	.man,.women {
		display: flex;
		width: 160upx;
		height: 160upx;
		justify-content: center;
		align-items: center;
		border-radius: 40upx;
		background-color: rgb(70, 73, 83);
	}
	.women {
		margin-left: 60upx;
	}
	.man_box span{
		margin-top: 20upx;
	}
	.women_box span {
		margin-left: 60upx;
		margin-top: 20upx;
	}
	.man image {
		width: 100upx;
		height: 100upx;
		
	}
	.women image {
		width: 100upx;
		height: 100upx;
	}
	.u-button {
		margin-top: 120upx;
		background: rgb(235, 84, 71);
		border: 1px solid rgb(235, 84, 71);
		color: aliceblue;
		font-size: 30upx;
		height: 80upx;
	}
</style>
