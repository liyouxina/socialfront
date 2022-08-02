<template>
	<view class="page-main">
		 <view class="upload">
			  <view class="box" @click="upload">
				   <image class="box-img" :src="avatar" mode=""></image>
			  </view>  
		 </view>
		 <view class="user-info">
			
			<u-form :modelValue="formData">
				<u-form-item>
					 <span>昵称</span>
				     <input  class="input"  type="text" value="" v-model="formData.Susername" placeholder="请输入姓名" />
				</u-form-item>
			</u-form>
			
			<view :modelValue="formData" v-for="(item, index) in list" class="list">
				<span>{{item.title}}</span>																					<!-- v-model还未被动态绑定 -->
			    <input :id="item.id" :key="index" @click="showPicker(index)" :disabled="item.disabled" type="text" :value="item.formDataName" :v-model="item.formDataName" :placeholder="item.placeholder"/>
			</view>
			<u-button  type="default" @click="submit()">确定</u-button>
			
			<u-picker
				:show="show1"
				:columns="columns1"
				@change="change"
				@cancel="cancel"
				@confirm="confirm"
				title="请选择您的身高"
			></u-picker>
			<u-picker
				:show="show2"
				:columns="columns2"
				:defaultIndex="[1]"
				@cancel="cancel"
				@confirm="confirm"
				@change="change"
				title="请选择您的年龄"
			></u-picker>
			<u-picker
				:show="show3"
				:columns="columns3"
				ref="uPicker3"
				@cancel="cancel"
				@confirm="confirm"
				title="请选择您的体重"
			></u-picker>
			<u-picker
				:show="show4"
				:columns="columns4"
				@cancel="cancel"
				@confirm="confirm"
				:loading="loading"
				@change="changeHandler1"
				title="请选择您的城市"
				ref="uPicker4"
			></u-picker>
			<u-picker
				:show="show5"
				:columns="columns5"
				@cancel="cancel"
				@confirm="confirm"
				@change="change"
				title="请选择您的职业"
			></u-picker>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconcheck: 0, //头像是否改变
				avatar: require("./defaultHead.png"), //默认头像
				formData: {
					Susername: '',
					Sheight:'',
					Sage: '23',
					Weight:'',
					City:'hjkh',
					Job:'',
					Friend:''
				},
				
				index: 0,
				loading: false,
				list: [{
						title: '身高',
						placeholder:'请选择您的身高',
						disabled:true,
						formDataName:''
					},
					{
						title: '年龄',
						placeholder:'请选择您的年龄',
						disabled:true,
						formDataName:''
					},
					{
						title: '体重',
						placeholder:'请选择您的体重',
						disabled:true,
						formDataName:''
					},
					{
						title: '城市',
						placeholder:'请选择您的城市',
						disabled:true,
						formDataName:''
					},
					{
						title: '职业',
						placeholder:'请选择您的职业',
						disabled:true,
						formDataName:''
					}, 
					{
						title: '交友宣言',
						id:'input6',
						disabled:false,
						formDataName:''
					}
					],
					show1:false,
					show2:false,
					show3:false,
					show4:false,
					show5:false,
					columns1: [
						['170cm', '175cm', '180cm','185cm','190cm']
					],
					columns2: [
						['20岁', '21岁','22岁','23岁','24岁','25岁','26岁','27岁']
					],
					columns3: [
						['49kg', '50kg', '51kg','52kg','53kg','54kg','55kg','56kg']
					],
					columns4: [
						["北京", "天津", "上海", "重庆", "新疆", "西藏", "宁夏", "内蒙古",
						 "广西", "黑龙江", "吉林", "辽宁", "河北", "山东", "江苏", "安徽",
						 "浙江", "福建", "广东", "海南", "云南", "贵州", "四川", "湖南",
						 "湖北", "河南", "山西", "陕西", "甘肃", "青海", "江西", "台湾", "香港", "澳门"],
						[ "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县" ]
						
					],
					columnData4: [
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
					columns5: [
						['教师', '医生', '公务员','其他']
					],
					columns6: [
						['中国', '美国', '日本']
					],
				}
			},

		methods: {
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
			},
			upload() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.avatar = res.tempFilePaths[0]
					}
				})
			},
			showPicker(index) {
				this.index = index + 1
				this[`show${index + 1}`] = true
			},
			changeHandler1(e) {
				this.change(e)
				const {
					columnIndex,
					value,
					values,
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker4
				} = e
				if (columnIndex === 0) {
					picker.setColumnValues(1, this.columnData4[index])
				}
			},
			confirm(e) {
				console.log('confirm', e);
				this.list[this.index-1].formDataName=e.value[0]

		
				// this.formData.Job = "asddas"
				this[`show${this.index}`] = false
			},
			close() {
				// console.log('close');
				this[`show${this.index}`] = false
			},
			change(e) {
				// console.log('change', e);
			},
			cancel() {
				// console.log('cancel');
				this[`show${this.index}`] = false
			},
			submit() {
				console.log("submit")
				uni.navigateTo({
					url: "/pages/Signin/newid/wechat/wechat"
				})
				return;
				console.log(this.avatar)
				var _this = this;
				uni.uploadFile({
					url: 'http://180.76.98.70:18023/avatar', //示例，非真实接口地址。
					filePath: _this.avatar,
					name: 'avatar',
					formData: {
						'Sage': this.list[1].formDataName,
						'Sheight': this.list[0].formDataName,//数据提交逻辑还未写
						'Susername': _this.formData.Susername,
						'Weight':this.list[2].formDataName,
						'City':this.list[3].formDataName,
						'Job':this.list[4].formDataName,
						'Friend':_this.formData.Friend
					},
					success: (res) => {
						console.log(res);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.upload {
		display: flex;
		justify-content: center;
		margin-top:30upx;
		width: 100%;
		height: 220upx;
	}

	.box {
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		background-color: rgb(70, 73, 85);
	}

	.upload .box-img {
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
	}

	.u-cell {
		margin: 15upx 0;
		width: 100%;
		border-radius: 50upx;
		height: 90upx;
		background-color: rgb(70, 73, 85);
	}
	.u-form-item {
		margin: 25upx 0;
		width: 100%;
		border-radius: 50upx;
		height: 80upx;
		background-color: rgb(70, 73, 85);
	}
	.u-form-item input {
		margin-left: 90upx;        //昵称栏
		color: aliceblue;
		}
	span {
		color: aliceblue;
		font-size: 32upx;
		margin-left: 50upx;
	}
	.list {           //除昵称外剩下的6栏
		display: flex;
		align-items: center;
		margin: 25upx 0;
		width: 100%;
		border-radius: 50upx;
		height: 80upx;
		background-color: rgb(70, 73, 85);
	}
	.list input {
		margin-left: 90upx;
		color:white;
	}
	#input6 {
		margin-left: 30upx;
	}
	button {
		margin-top: 60upx;
		border-radius: 50upx;
		background-color: rgb(70, 73, 85);	
	}
	.u-button {
		margin-top: 80upx;
		width: 600upx;
		border-radius:  60upx;
		background-color: rgb(235, 80, 68);
		color: #fff;
		font-weight: 500;
		font-size: 35upx;
		border:1upx rgb(235, 80, 68) solid;
	}
</style>
