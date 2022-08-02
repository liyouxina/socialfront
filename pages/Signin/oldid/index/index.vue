<template>
	<view>
		<view v-if="isshow" ref="hint" class="hint_father"> <!-- 提示框 -->
			<view class="hint">
				<span class="title">欢迎来到产品名称</span>
				<view class="line1">
					<view class="imgbox">
						<image src="@/static/index/realpeople.png" mode=""></image>
						<span>真人认证</span>
					</view>
					<span class="biaoshi">表示她已通过面容识别认证真实性 相册有本人照片</span>
				</view>
				<view class="line1">
					<view class="imgbox">
						<image class="img" src="@/static/index/wechat.png" mode=""></image>
						<span>社交账号</span>
					</view>
					<span class="biaoshi">人工审核用户社交账号 放心添加和她约会吧</span>
				</view>
				<view class="line1">
					<view class="imgbox">
						<image class="img" src="@/static/index/vip_level.png" mode=""></image>
						<span>会员等级</span>
					</view>
					<span class="biaoshi">会员标识等级越高，通常会受到更多女生青睐哦</span>
				</view>
				<button @click="goto()">我知道了</button>
			</view>
		</view>
		
		<!-- 内容板块 -->
		<view class="search">
			<u-search bgColor="#4b4f5b" color="#FFFFFF" :showAction="false"  @confirm="search" @input="input" placeholder="输入用户ID"></u-search>
			<span class="searchbtn" @click="searchForEnroll()">搜索</span>
		</view>
		<view class="user-like-info" v-for="(item,index) in articleList">
			<view class="uer-line"></view>
			<!-- 用户头像、昵称、版块 -->
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
					<view class="like-meg-tip">{{item.tip}}</view> <!-- 个性签名 -->
				</view>
			</view>
			
			<!-- 文章发布内容 -->
			<view class="like-content">{{item.mag}}​​​​</view>
			<view class="like-photo">
				<!-- 发布文章时的图片 -->
				<view class="like-photo-item" v-for="(item,index) in item.pic">
					<image :src="item"></image>
				</view>
			</view>
			<view class="tagfather">
				<view class="tag" v-for="(item,index) in item.tag ">  <!-- 标签 -->
					<view class="tagbox">{{item}}</view>
				</view>
			</view>
			<!-- 评论点赞板块 -->
			<view class="like-data">
				<view  class="like-data-item" v-for="(icon,index) in item.icon" @click="changecolor(icon)">
					<image class="like-data-icon" :src="icon.src"></image>
					<view class="like-data-num">{{icon.num}}</view>
				</view>
			</view>
		</view>
		<view class="release_btn">
			<u-image @click="release()" shape="circle" width="80upx" height="80upx" src="@/static/index/release.png" mode=""></u-image>
		</view>
	</view>
	
</template>

<script>
	export default {	
		data() {
			return {
				isshow:true,
				articleList: [{
						src: '../../../../static/index/touxiang.jpeg', //头像
						name: '提',				//昵称
						tip: '2022.02.22 15:20:20',		//时间
						sex:'../../../../static/index/yes_man.png',   //性别
						mag: '“你们谎话连篇还以为没人会知道，但有两个人会知道。你们的上帝。 还有赫尔克里· 波洛。” ', //正文
						pic: [					//正文图片
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
						],
						tag:[   //标签
							"#阳光爱笑",
							"#简单直接",
							"#成熟稳重",
						],
						identity:[{  //身份标签
								src:'../../../../static/index/vip.png',
								span:'尊享会员',
								bgc:'identity-vip'
							}
						],
						icon: [{	//点赞互动栏
								id:'1',
								src: '../../../../static/index/aixin.png',
								num:'1'
							},
							{
								id:'2',
								src: '../../../../static/index/huihua.png',
								num:'1'
							},
							{
								id:'3',
								src: '../../../../static/index/biaoji.png',
								num:'1'
							},
						],
					},
					{
						src: '../../../../static/index/touxiang.jpeg',
						name: ' 加藤オズワルト',
						tip: ' 2022.02.22 15:20:20',
						sex:'../../../../static/index/yes_women.png',
						mag: '“来自插画师 加藤オズワルド  绘画作品来自插画师 加藤オズワルド绘画作品来自插画师 加藤オズワルド 绘画作品” ',
						pic: [
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
							"../../../../static/index/exp_bg.jpeg",
						],
						tag:[
							"#阳光爱笑",
							"#简单直接",
							"#成熟稳重",
						],
						identity:[{
								src:'../../../../static/index/realpeople.png',
								span:'真人认证',
								bgc:'identity-real'
							}
						],
						icon: [{
								id:'1',
								src: '../../../../static/index/aixin.png',
								num:'1'
							},
							{
								id:'2',
								src: '../../../../static/index/huihua.png',
								num:'1'
							},
							{
								id:'3',
								src: '../../../../static/index/biaoji.png',
								num:'1'
							},
						],
					}
				]
			}
		},
		onLoad() {
			uni.hideTabBar();
			this.stopScroll();
		},
		beforeCreate() {
			uni.request({
				url: "http://180.76.98.70:18023/userdetails/getOneDetails?token="
			})
		},
		methods: {
			input(){
				console.log("input")
			},
			release(){
				uni.navigateTo({
					url:"/pages/Signin/oldid/index/release/release"
				})
			},
			changecolor(icon){
				switch(icon.id)
				{
					case '1':
						if(icon.src=='../../../../static/index/aixin.png'){
							icon.src='../../../../static/index/on_aixin.png'
							icon.num++;
						}else{
							icon.src='../../../../static/index/aixin.png'
							icon.num--;
						}
						break;
					case '3':
						if(icon.src=='../../../../static/index/biaoji.png'){
							icon.src='../../../../static/index/on_biaoji.png'
							icon.num++;
						}else{
							icon.src='../../../../static/index/biaoji.png'
							icon.num--;
						}
						break;
				}
			},
			goto() {
				uni.showTabBar();
		this.isshow=!this.isshow;
				this.canScroll();
			},
			searchForEnroll() {
				console.log("sadasdasd")
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0;
	}	
	view {
		color: white;
		position: relative;
	}
	.hint_father {
		z-index: 999;
		display: flex;
		bottom: 28%;
		flex-direction: column-reverse;
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(7, 5, 5, 0.6);
	}

	.title {
		font-size: 35upx;
		color: black;
		font-weight: 500;
	}

	.hint {
		height: 800upx;
		width: 100%;
		padding: 20upx;
		color: rgb(132, 131, 133);
		background-color: rgb(233, 233, 233);
		border-radius: 20upx;
	}

	.imgbox {
		width: 160upx;
		height: 130upx;
		display: flex;
		flex-direction: column;
		color: black;
		font-size: 20upx;
		align-items: center;
	}

	image {
		width: 100upx;
		height: 100upx;
	}

	.img {
		width: 80upx;
		height: 80upx;
	}

	.line1 {
		display: flex;
		align-items: center;
		margin-top: 36upx;
	}

	.biaoshi {
		margin-left: 20upx;
		font-size: 30upx;
		color: rgb(132, 131, 133);
	}

	button {
		margin-top: 70upx;
		margin-bottom: 80upx;
		width: 450upx;
		border-radius: 50upx;
		background-color: indianred;
		color: aliceblue;
	}

	.sticky {
		width: 750upx;
		height: 120upx;
		background-color: #2979ff;
		color: #fff;
		padding: 24upx;
	}

	.uer-line {
		margin-top: 15upx;
		width: 750upx;
		height: 2upx;
		opacity: 1;
		background: #555555;
	}
	.search {
		display: flex;
		align-items: center;
		padding: 0 25upx;
		.searchbtn {
			margin-left: 40upx;
		}
	}
	.like-artive {
		display: flex;
		width: 700upx;
		height: 80upx;
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
	
	.tagfather {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		.tagbox {
			padding: 10upx 35upx;
			background-color: #383b4b;
			border-radius: 50upx;
			margin: 10upx 10upx;
		}
	}
	
	
	.like-content {
		width: 700upx;
		margin: 25upx auto 30upx;
		font-size: 28upx;
		font-family: Microsoft YaHei, Microsoft YaHei-Regular;
		font-weight: 400;
		text-align: left;
		color: #ffffff;
		line-height: 42upx;
	}

	.like-photo {
		width: 700upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 5upx auto;
		text-decoration: none;

		.like-photo-item {
			width: 220upx;
			height: 220upx;
			margin-bottom: 15upx;
			
			image {
				width: 220upx;
				height: 220upx;
				border-radius: 8upx;
			}
		}
	}

	.like-data {
		display: flex;
		/*弹性布局*/
		align-items: center;
		/*子元素垂直居中*/
		justify-content: center;
		/*子元素水平居中*/
		justify-content: space-around;
		/*子元素充满父元素*/

		.like-data-item {
			display: flex;
			margin-top: 10upx;
			margin-bottom: 10upx;
			align-items: center;
			.like-data-icon {
				width: 60upx;
				height: 60upx;
			}
		}
	}
	.release_btn {
		position: absolute;
		top: 60%;
		left: 80%;
	}
</style>
