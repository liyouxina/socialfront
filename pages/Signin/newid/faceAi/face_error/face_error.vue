<template>
	<view>
		<image src="@/static/image/face_error.png" mode=""></image>
		<span>认证失败，请<navigator url="@/faceAi/faceAi">重新上传头像</navigator> </span>
		<span>或者<navigator>重新识别!</navigator></span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	view {
		margin-top: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	image {
		width: 300upx;
		height: 300upx;
	}
	span {
		display: flex;
		flex-direction: row;
		margin: 5upx 0;
	}
	navigator {
		color: rgb(235, 80, 68);
	}
</style>
