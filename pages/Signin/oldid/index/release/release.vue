<template>
	<view>
		<view class="input_box">
			<textarea class="dynamic" selection-start="2" selection-end="30" cursor="" name="" id="dynamic" @input="getlength" maxlength="30"  placeholder="请文明规范发布内容,否则将禁用动态功能" cols="30" rows="10"></textarea>
			<view class="describe_text"><text>{{length}}</text>/<label>30</label></view>
		</view>
		<view class="upload_img">
			<span class="shangchuan">上传照片（可上传1至3张）</span>
			<view class="img_wall">
				<view class="wall" v-for="(item,index) in imgwall">
					<image :src="item" mode=""></image>
				</view>
				<image @click="upload()" class="add" src="@/static/me/release.png" mode=""></image>
			</view>
		</view>
		<view :modelValue="formData" v-for="(item, index) in list" class="list">
			<span class="input_remind">{{item.title}}</span>	<!-- v-model还未被动态绑定 -->
		    <input class="input_main" :id="item.id" :key="index" @click="showPicker(index)" :disabled="item.disabled" type="text" value="" :v-model="item.formDataName" placeholder-style="text-align: right" :placeholder="item.placeholder" />
			<view  class="taglist"  v-show="index==4">
				<view class="tagbtn" v-for="(item,index) in taglist">
					<button @click="deltag(index)">
						<span>#{{item}}</span>
					</button>
				</view>
			</view>
			<span class="arrow" @click="item.id == 4 ? gotag() : null"></span>
		</view>
		<u-picker
			ref="uPicker1"
			:show="show1"
			:columns="columns1"
			@change="change"
			@cancel="cancel"
			@confirm="confirm"
			title="选择活动主题"
		></u-picker>
		<u-datetime-picker	
			ref="datetimePicker"
			:show="show2"
			v-model="value1"
			mode="date"
			title="请选择您的时间"
			@cancel="cancel"
			@confirm="confirmdatatime"
			@change="change"
			:formatter="formatter"
		></u-datetime-picker>
		<u-picker
			:show="show3"
			:columns="columns3"
			ref="uPicker3"
			@cancel="cancel"
			@confirm="confirm"
			@change="changeHandler3"
			title="选择所在城市"
		></u-picker>
		<u-picker	
			:show="show4"
			:columns="columns4"
			@cancel="cancel"
			@confirm="confirm"
			@change="change"
			title="选择活动人数"
			ref="uPicker4"
		></u-picker>
	</view>
</template>

<script>
	import choosetag from './choose_tag/choose_tag.vue'
	export default {
		components:{ choosetag },
		data() {
			return {
				taglist:[],
				value1: Number(new Date()),
				length:0,
				imgwall:[
					'../../../../../static/index/exp_bg.jpeg',
					'../../../../../static/index/exp_bg.jpeg',
				],
				formData: {
					Susername: '',
					Atheme:'',
					Atime: '',
					Aplace:'',
					Apeople:'',
					Tag:'',
				},
				list: [{
						id:0,
						title: '活动主题',
						placeholder:'请选择',
						disabled:true,
						formDataName:'formData.Atheme'
					},
					{
						id:1,
						title: '活动时间',
						placeholder:'请选择',
						disabled:true,
						formDataName:'formData.Atime'
					},
					{
						id:2,
						title: '活动地点',
						placeholder:'请选择',
						disabled:true,
						formDataName:'formData.Aplace'
					},
					{
						id:3,
						title: '活动人数',
						placeholder:'请选择',
						disabled:true,
						formDataName:'formData.Apeople'
					},
					{
						id:4,
						title: '标签',
						placeholder:'请选择',
						disabled:true,
						formDataName:'formData.Tag'
					}
					],
					show1:false,
					show2:false,
					show3:false,
					show4:false,
					columns1: [
						['吃饭', '聊天', '看电影','旅游','其他']
					],
					columns2: [
						['1人', '2人','3人','4人','5人']
					],
					columns3: [
						["北京", "天津", "上海", "重庆", "新疆", "西藏", "宁夏", "内蒙古",
						 "广西", "黑龙江", "吉林", "辽宁", "河北", "山东", "江苏", "安徽",
						 "浙江", "福建", "广东", "海南", "云南", "贵州", "四川", "湖南",
						 "湖北", "河南", "山西", "陕西", "甘肃", "青海", "江西", "台湾", "香港", "澳门"],
						[ "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县" ]	
					],
					columnData3: [
						[ "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县" ],
						[ "和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县" ],
						[ "黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他" ],
						[ "渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "其他" ],
						['乌鲁木齐市','克拉玛依市','吐鲁番地区','哈密地区','昌吉','博尔塔拉','巴音郭楞','阿克苏地区','克孜勒苏柯尔克孜自治州','喀什地区','和田地区','伊犁','塔城地区','阿勒泰地区','石河子市','阿拉尔市','图木舒克市','五家渠市'],
						['拉萨市','昌都地区','山南地区','日喀则地区','那曲地区','阿里地区','林芝地区'],
						['银川市','石嘴山市','吴忠市','固原市','中卫市'],
						['呼和浩特市','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市','巴彦淖尔市','乌兰察布市','兴安盟','锡林郭勒盟','阿拉善盟'],
						['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市'],
						['哈尔滨市','齐齐哈尔市','鸡西市','鹤岗市','双鸭山市','大庆市','伊春市','佳木斯市','七台河市','牡丹江市','黑河市','绥化市','大兴安岭地区'],
						['长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边'],
						['沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','盘锦市','朝阳市','葫芦岛市'],
						['石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市'],
						['济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州市','菏泽市'],
						['南京市','无锡市','徐州市','常州市','苏州市','南通市','连云港市','淮安市','盐城市','扬州市','镇江市','泰州市','宿迁市'],
						['合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','六安市','亳州市','池州市','宣城市'],
						['杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市'],
						['福州市','厦门市','莆田市','三明市','泉州市','漳州市','南平市','龙岩市','宁德市'],
						['广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','东沙群岛','潮州市','揭阳市','云浮市'],
						['海口市','三亚市','三沙市','五指山市','琼海市','儋州市','文昌市','万宁市','东方市','定安县','屯昌县','澄迈县','临高县','白沙','昌江','乐东','陵水','保亭','琼中'],
						['昆明市','曲靖市','玉溪市','保山市','昭通市','丽江市','普洱市','临沧市','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆'],
						['贵阳市','六盘水市','遵义市','安顺市','铜仁市','黔西南','毕节市','黔东南','黔南'],
						['成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','眉山市','宜宾市','广安市','达州市','雅安市','巴中市','资阳市','阿坝','甘孜','凉山'],
						['长沙市','株洲市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底市','湘西'],
						['武汉市','黄石市','十堰市','宜昌市','襄阳市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','随州市','恩施','仙桃市','潜江市','天门市','神农架林区'],
						['郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','济源市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市'],
						['太原市','大同市','阳泉市','长治市','晋城市','朔州市','晋中市','运城市','忻州市','临汾市','吕梁市'],
						['西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市'],
						['兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏','甘南'],
						['西宁市','海东市','海北','黄南','海南','果洛','玉树','海西'],
						['南昌市','景德镇市','萍乡市','九江市','新余市','鹰潭市','赣州市','吉安市','宜春市','抚州市','上饶市'],
						['台北市','高雄市','台南市','台中市','金门县','南投县','基隆市','新竹市','嘉义市','新北市','宜兰县','新竹县','桃园县','苗栗县','彰化县','嘉义县','云林县','屏东县','台东县','花莲县','澎湖县','连江县'],
						['香港岛','香港岛','新界'],
						['澳门','离岛']
					],
					columns4: [
						["1人","2人","3人","4人","5人","6人"],
					]
			};
		},
		created() {
			uni.$on("setTagList",(list)=>{
				this.taglist.splice(1,1,list[0])
				console.log(this.taglist)   ///不渲染 未解决 07/14
			})
		},
		destroyed() {
			uni.$off("setTagList")
		},
		methods:{
			deltag(index){
				this.taglist.splice(index)
				console.log("删除成功")
			},
			gotag(){
				uni.navigateTo({
					url: '/pages/Signin/oldid/index/release/choose_tag/choose_tag',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			getlength(e){  //监视输入字数
				this.length = e.detail.cursor; 
			},
			upload() {    //提交图片
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.imgwall.unshift("res.tempFilePaths")
					}
				})
			},
			showPicker(index) {   //显示选择器弹窗
				this.index = index + 1
				this[`show${index + 1}`] = true
			},
			changeHandler3(e) {	//活动地点选择器 多行滑动
				this.change(e)
				const {
					columnIndex,
					value,
					values,
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker3
				} = e
				if (columnIndex === 0) {
					picker.setColumnValues(1, this.columnData3[index])
				}
			},
			confirmdatatime(e){
				this[`show${this.index}`] = false
				this.list[this.index-1].placeholder=this.result(e.value,e.mode)
			},
			confirm(e,index) {  //选择器确定键
				// console.log('confirm', e);
				this[`show${this.index}`] = false
				if(e.value[1]!=undefined){
					this.list[this.index-1].placeholder=e.value[0]+e.value[1]
				}else{
					this.list[this.index-1].placeholder=e.value[0]
				}
			},
			close() { //选择器关闭时触发
				// console.log('close');
				this[`show${this.index}`] = false
			},
			change(e) { //选择器滑动键
				
			},
			cancel() { //点击取消键
				// console.log('cancel');
				this[`show${this.index}`] = false
			},
			result(time, mode) {  //格式化时间
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return timeFormat(time, 'yyyy-mm-dd hh:MM')
					case 'date':
						return timeFormat(time, 'yyyy-mm-dd')
					case 'year-month':
						return timeFormat(time, 'yyyy-mm')
					case 'time':
						return time
					default:
						return ''
				}
			},
			// submit() {
			// 	console.log(this.avatar)
			// 	var _this = this;
			// 	uni.uploadFile({
			// 		url: 'http://47.107.93.173:3000/avatar', //示例，非真实接口地址。
			// 		filePath: _this.avatar,
			// 		name: 'avatar',
			// 		formData: {
			// 			'Atime': _this.formData.Atime,
			// 			'Ssex': _this.formData.Ssex,//数据提交逻辑还未写
			// 			'Susername': _this.formData.Susername,
			// 			'Aplace':_this.formData.Aplace,
			// 			'Apeople':_this.formData.Apeople,
			// 			'Tag':_this.formData.Tag,
			// 			'Friend':_this.formData.Friend
			// 		},
			// 		success: (res) => {
			// 			console.log(res);
			// 		}
			// 	});
			// }
		}
	}
</script>

<style lang="scss">
	image {
		display: block;
	}
	page {
		padding: 20upx 30upx;
		color: #767c8f;
	}
	.input_box {
		position: relative;
		width: 100%;
		height: 200upx;
		border-radius: 15upx;
		background-color: #4b4f5b;
	}
	.dynamic {
		position: absolute;
		padding-left: 20upx ;
		padding-top: 20upx;
	}
	.describe_text {
		position: absolute;
		right: 5%;
		bottom: 10%;
		font-size: 30upx;
	}
	.upload_img {
		margin-top: 30upx;
	}
	.img_wall {
		display: flex;
		align-items: center;
		justify-content: start;
		margin-top: 25upx;
		margin-bottom: 10upx;
		border-radius: 20upx;
		image {
			width: 220upx;
			height: 220upx;
			border-radius: 6upx;
			margin-right: 20upx;
		}
		.add {
			margin-right: 0;
		}
	}
	.list {           //除昵称外剩下的6栏
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		height: 100upx;
		padding: 10upx 0;
		border-bottom: 1px solid #5a5f6d;
	}
	.list input {
		width: 100%;
		color:white;
	}
	.shangchuan {
		font-size: 26upx;
	}
	.input_remind {
		flex: 1;
		margin-left: 20upx;
		color: #e7e7e7;
	}
	.input_main {
		flex: 2.5;
		font-size: 28upx;
	}
	.arrow::after {
		flex: 1;
		font-size: 60upx;
		font-weight: 100;
		color: #959595;
		font-family: 'icomoon';
		content: '\e951';
	}
	.taglist {
		position: absolute;
		right: 8%;	
		width: 470upx;
		height: 99upx;	
		background-color: rgb(33, 35, 48);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 10upx 0;
		span::after {
			font-family: 'icomoon';
			content: '\e954';
		}
		button {
			display: flex;
			align-items: center;
			
			flex-wrap: nowrap;
			height: 50upx;
			color: #959595;
			font-size: 25upx;
			background-color: transparent;
			border: 1px solid #676c7c;
			border-radius: 50upx;
			margin-right: 25upx;
		}
	}
</style>
