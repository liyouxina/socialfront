<template>
	<view>
		<div class="livefater">
			<div style="width: 350upx; height: 350upx;border-radius: 350upx; margin-top: -200upx;: hidden;background-color: rgb(55, 58, 67);">
				<live-pusher id='livePusher' ref="livePusher" class="livePusher" url="" mode="SD" :muted="true"
					:enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2" aspect="1:1"
					@statechange="statechange" @netstatus="netstatus" @error="error"></live-pusher>
			</div>
		</div>
		<view class="hint">
			<span>请面向屏幕</span>
			<span>人脸认证需要和上传照片一样哦~</span>
		</view>
	</view>
</template>


<script>
	export default {
		data: {
			fil: true,
			imgList: [""],
			statusBar: '',
			CustomBar: 0
		},
		onLoad() {
			this.startPreview()
		},
		onReady() {
			// 注意：需要在onReady中 或 onLoad 延时
			this.context = uni.createLivePusherContext("livePusher", this);
			var that = this
			uni.getSystemInfo({
				success: function(e) {
					// 计算导航栏高度
					that.statusBar = e.statusBarHeight
					// #ifndef MP  
					if (e.platform == 'android') {
						that.CustomBar = e.statusBarHeight + 50
					} else {
						that.CustomBar = e.statusBarHeight + 45
					}
					console.log(that.statusBar)
					// #endif  
					// #ifdef MP-WEIXIN  
					let custom = wx.getMenuButtonBoundingClientRect()
					that.CustomBar = custom.bottom + custom.top - e.statusBarHeight

					// #endif  

					// #ifdef MP-ALIPAY  
					that.CustomBar = e.statusBarHeight + e.titleBarHeight
					// #endif  
				}
			})
		},
		methods: {
			Timer() {},
			statechange(e) {
				console.log("statechange:" + JSON.stringify(e));
			},
			netstatus(e) {
				console.log("netstatus:" + JSON.stringify(e));
			},
			error(e) {
				console.log("error:" + JSON.stringify(e));
			},
			start: function() {
				this.context.start({
					success: (a) => {
						console.log("livePusher.start:" + JSON.stringify(a));
					}
				});
			},
			close: function() {
				this.context.close({
					success: (a) => {
						console.log("livePusher.close:" + JSON.stringify(a));
					}
				});
			},
			// 拍照事件
			snapshot: function() {
				var that = this
				this.context.snapshot({
					success: (e) => {
						console.log(JSON.stringify(e));
						that.getMinImage(e.message.tempImagePath)
					}
				});
			},
			// 开启摄像头
			startPreview() {
				console.log("1")
				var that = this
				this.context.startPreview({
					success: (a) => {
						console.log("livePusher.startPreview:" + JSON.stringify(a));
						that.Timer = setInterval(function() {
							that.snapshot()
							if (that.imgList.length > 3) {
								console.log("3")
								clearInterval(that.Timer)
							}
						}, 2000)
					}
				});
			},
			// 使用plus.zip.compressImage压缩图片并转换成base64
			getMinImage(imgPath) {
				plus.zip.compressImage({
						src: imgPath,
						dst: imgPath,
						overwrite: true,
						quality: 40
					},
					zipRes => {
						setTimeout(() => {
							var reader = new plus.io.FileReader();
							reader.onloadend = res => {
								var speech = res.target.result; //base64图片
								console.log(speech);
								this.imgList.push(speech);
							};
							//一定要使用plus.io.convertLocalFileSystemURL将target地址转换为本地文件地址，否则readAsDataURL会找不到文件
							reader.readAsDataURL(plus.io.convertLocalFileSystemURL(zipRes.target));
						}, 1000);
					},
					function(error) {
						console.log('Compress error!', error);
					}
				);
			},
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}

		}
	}
</script>

<style>
	.custom{
		background-color: #2C65F7;
	}
	.navcontent{
		height: 45upx;
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		justify-content:space-around;
		flex-direction:row;
		color:#FFFFFF;
	}
	.livePusher{
		width: 350px;
		height: 350px;
	}
	.livefater{
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		justify-content:center;
		flex-direction:column;
		align-items:center;
		margin-top: 50upx;
		margin-bottom: 50upx;
		height: 350px;
	}
	.hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -250upx;
	}
	.hint span:nth-child(1){
		font-size: 40upx;
		margin-bottom: 10upx;
	}
	.hint span:nth-child(2){
		font-size: 30upx;
		color: rgb(126, 131, 152) ;
	}
</style>
