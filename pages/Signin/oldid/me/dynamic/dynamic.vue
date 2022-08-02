<template>
	<view>
		<view class="scrollbox">  
			<view @click="onitem(index)"  class="scrollbox_item" v-for="(item, index) in tablist" :key="index">
				<view :class = "isactive == index ? 'list_item' : 'list_item_off' ">{{item.name}}</view>
			</view>
		</view>
		<view class="content">
			<view v-show="act==0" class="user-like-info" v-for="(item,index) in articleList1">
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
		</view>
		<view class="signup" v-show="act==1">
			<view class="user-like-info" v-for="(item,index) in articleList2">
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				act:0,
				isactive : 0,
				tablist:[
					{	
						name:'动态',
						id:'0',
					},
					{
						name:'报名',
						id:'1',
					}
				],
				articleList1: [{
						src: '../../../../../static/index/touxiang.jpeg', //头像
						name: '加藤オズワルト',				//昵称
						tip: '2022.02.22 15:20:20',		//时间
						sex:'../../../../../static/index/yes_man.png',   //性别
						mag: '“你们谎话连篇还以为没人会知道，但有两个人会知道。你们的上帝。 还有赫尔克里· 波洛。” ', //正文
						pic: [					//正文图片
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
						],
						tag:[   //标签
							"#阳光爱笑",
							"#简单直接",
							"#成熟稳重",
						],
						identity:[{  //身份标签
								src:'../../../../../static/index/vip.png',
								span:'尊享会员',
								bgc:'identity-vip'
							}
						],
						icon: [{	//点赞互动栏
								id:'1',
								src: '../../../../../static/index/aixin.png',
								num:'1'
							},
							{
								id:'2',
								src: '../../../../../static/index/huihua.png',
								num:'1'
							},
							{
								id:'3',
								src: '../../../../../static/index/biaoji.png',
								num:'1'
							},
						],
					},
					{
							src: '../../../../../static/index/touxiang.jpeg', //头像
							name: '加藤オズワルト',				//昵称
							tip: '2022.02.22 15:20:20',		//时间
							sex:'../../../../../static/index/yes_man.png',   //性别
							mag: '“你们谎话连篇还以为没人会知道，但有两个人会知道。你们的上帝。 还有赫尔克里· 波洛。” ', //正文
							pic: [					//正文图片
								"../../../../../static/index/exp_bg.jpeg",
								"../../../../../static/index/exp_bg.jpeg",
								"../../../../../static/index/exp_bg.jpeg",
							],
							tag:[   //标签
								"#阳光爱笑",
								"#简单直接",
								"#成熟稳重",
							],
							identity:[{  //身份标签
									src:'../../../../../static/index/vip.png',
									span:'尊享会员',
									bgc:'identity-vip'
								}
							],
							icon: [{	//点赞互动栏
									id:'1',
									src: '../../../../../static/index/aixin.png',
									num:'1'
								},
								{
									id:'2',
									src: '../../../../../static/index/huihua.png',
									num:'1'
								},
								{
									id:'3',
									src: '../../../../../static/index/biaoji.png',
									num:'1'
								},
							],
						},
						{
								src: '../../../../../static/index/touxiang.jpeg', //头像
								name: '加藤オズワルト',				//昵称
								tip: '2022.02.22 15:20:20',		//时间
								sex:'../../../../../static/index/yes_man.png',   //性别
								mag: '“你们谎话连篇还以为没人会知道，但有两个人会知道。你们的上帝。 还有赫尔克里· 波洛。” ', //正文
								pic: [					//正文图片
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
								],
								tag:[   //标签
									"#阳光爱笑",
									"#简单直接",
									"#成熟稳重",
								],
								identity:[{  //身份标签
										src:'../../../../../static/index/vip.png',
										span:'尊享会员',
										bgc:'identity-vip'
									}
								],
								icon: [{	//点赞互动栏
										id:'1',
										src: '../../../../../static/index/aixin.png',
										num:'1'
									},
									{
										id:'2',
										src: '../../../../../static/index/huihua.png',
										num:'1'
									},
									{
										id:'3',
										src: '../../../../../static/index/biaoji.png',
										num:'1'
									},
								],
							},
				],
				articleList2: [{
						src: '../../../../../static/index/touxiang.jpeg', //头像
						name: '加藤オズワルト',				//昵称
						tip: '2022.02.22 15:20:20',		//时间
						sex:'../../../../../static/index/yes_man.png',   //性别
						mag: '东莞茶局 今晚8点有人吗 ', //正文
						pic: [					//正文图片
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
							"../../../../../static/index/exp_bg.jpeg",
						],
						tag:[   //标签
							"#阳光爱笑",
							"#简单直接",
							"#甜美可爱",
						],
						identity:[{  //身份标签
								src:'../../../../../static/index/vip.png',
								span:'尊享会员',
								bgc:'identity-vip'
							}
						],
						icon: [{	//点赞互动栏
								id:'1',
								src: '../../../../../static/index/aixin.png',
								num:'1'
							},
							{
								id:'2',
								src: '../../../../../static/index/huihua.png',
								num:'1'
							},
							{
								id:'3',
								src: '../../../../../static/index/on_biaoji.png',
								num:'1'
							},
						],
					},
					{
							src: '../../../../../static/index/touxiang.jpeg', //头像
							name: '加藤オズワルト',				//昵称
							tip: '2022.02.22 15:20:20',		//时间
							sex:'../../../../../static/index/yes_man.png',   //性别
							mag: '深圳茶局 今晚8点有人吗 ', //正文
							pic: [					//正文图片
								"../../../../../static/index/exp_bg.jpeg",
								"../../../../../static/index/exp_bg.jpeg",
								"../../../../../static/index/exp_bg.jpeg",
							],
							tag:[   //标签
								"#阳光爱笑",
								"#简单直接",
								"#成熟稳重",
							],
							identity:[{  //身份标签
									src:'../../../../../static/index/vip.png',
									span:'尊享会员',
									bgc:'identity-vip'
								}
							],
							icon: [{	//点赞互动栏
									id:'1',
									src: '../../../../../static/index/aixin.png',
									num:'1'
								},
								{
									id:'2',
									src: '../../../../../static/index/huihua.png',
									num:'1'
								},
								{
									id:'3',
									src: '../../../../../static/index/on_biaoji.png',
									num:'1'
								},
							],
						},
						{
								src: '../../../../../static/index/touxiang.jpeg', //头像
								name: '加藤オズワルト',				//昵称
								tip: '2022.02.22 15:20:20',		//时间
								sex:'../../../../../static/index/yes_man.png',   //性别
								mag: '“你们谎话连篇还以为没人会知道，但有两个人会知道。你们的上帝。 还有赫尔克里· 波洛。” ', //正文
								pic: [					//正文图片
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
									"../../../../../static/index/exp_bg.jpeg",
								],
								tag:[   //标签
									"#阳光爱笑",
									"#简单直接",
									"#成熟稳重",
								],
								identity:[{  //身份标签
										src:'../../../../../static/index/vip.png',
										span:'尊享会员',
										bgc:'identity-vip'
									}
								],
								icon: [{	//点赞互动栏
										id:'1',
										src: '../../../../../static/index/aixin.png',
										num:'1'
									},
									{
										id:'2',
										src: '../../../../../static/index/huihua.png',
										num:'1'
									},
									{
										id:'3',
										src: '../../../../../static/index/biaoji.png',
										num:'1'
									},
								],
							},
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
			changecolor(icon){
				switch(icon.id)
				{
					case '1':
						if(icon.src=='../../../../../static/index/aixin.png'){
							icon.src='../../../../../static/index/on_aixin.png'
							icon.num++;
						}else{
							icon.src='../../../../../static/index/aixin.png'
							icon.num--;
						}
						break;
					case '3':
						if(icon.src=='../../../../../static/index/biaoji.png'){
							icon.src='../../../../../static/index/on_biaoji.png'
							icon.num++;
						}else{
							icon.src='../../../../../static/index/biaoji.png'
							icon.num--;
						}
						break;
				}
			},
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
	.scrollbox {
		display: flex;
		flex-direction: row;
		height: 120upx;
		padding: 0 180upx;
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
</style>
