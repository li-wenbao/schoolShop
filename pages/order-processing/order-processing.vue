<template>
	<view class="">
		<scroll-view class="bg-white nav">
			<view class="flex text-center">
				<view
					class="cu-item flex-sub cu-item-text"
					:class="index == TabCur ? 'text-orange cur' : ''"
					v-for="(item, index) in navList"
					:key="index"
					@tap="tabSelect"
					:data-id="index"
				>
					{{ item.text }}
				</view>
			</view>
		</scroll-view>

		<!-- 显示区域 -->
		<view class="list" v-for="(item1, index) in orderList" :key="index">
			<view class="order-item">
				<view class="order-item-item">
					<view class="order-name">
						<view class="order-name-name">
							<image :src="item1.product_image" class="product-image"></image>
							<view class="text-name">{{ item1.text_name }}</view>
						</view>
						<view class="order-name-name-name">
							<image src="../../static/clock.png" mode="" class="clock"></image>
							<view class="about-time">{{ item1.about_time }}分钟</view>
						</view>
					</view>

	

					<view class="order-get" >
						<view class="cu-avatar xl round margin-left bg-red order-get-get">取</view>
						<view class="order-get-underline"></view>
						<view class="order-get-kilometre">
							<view class="order-get-kilometres">{{ item1.kilometres }}km</view>
							<view class="order-get-position">{{ item1.position }}</view>
						</view>
						<view class="order-phone"><image src="../../static/phone.png" mode="" class="order-clock" style="margin-top: 48upx;" @click="tel"></image></view>
						<view class="order-position"><image src="../../static/position.png" mode="" class="order-clock-position" style="margin-top: 48upx;" @click="position"></image></view>
					</view>

					<view class="order-push">
						<view class="cu-avatar xl round margin-left bg-red order-get-get1">送</view>
						<view class="order-get-underline"></view>
						<view class="order-get-kilometre">
							<view class="order-get-users">
								<image src="../../static/users.png" mode="" class="users-clock"></image>
								<text class="users-text">{{ item1.userss }}</text>
							</view>
							<view class="order-get-kilometres">{{ item1.kilometress }}km</view>
							<view class="order-get-position">{{ item1.positions }}</view>
						</view>
						<view class="order-phone"><image src="../../static/phone.png" mode="" class="order-clock" style="margin-top: 140upx;" @click="tell"></image></view>
						<navigator class="order-position" url="../map/map">
							<image src="../../static/position.png" mode="" class="order-clock-position" style="margin-top: 140upx;" @click="position">
								
							</image>
							</navigator>
					</view>

					<view class="order-account" v-for="(itemaccount, index) in orderListaccount" :key="index.id" v-if="TabCur === index">
						<button type="" :class="index == 0 ? 'view-details' : 'view-detailsd'" v-if="index == 1 || index == 2 || index == 0">{{ itemaccount.details }}</button>
						<button type="" :class="index == 0 ? 'view-arrive' : 'view-arrived'" v-if="index == 0">{{ itemaccount.arrived }}</button>
						<button type="" :class="index == 0 ? 'view-change' : 'view-changed'" v-if="index == 0">{{ itemaccount.change }}</button>
						<button type="" :class="index == 0 ? 'grab-sheet' : 'grab-sheetd'">{{ itemaccount.sheet }}</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 显示区域结束 -->
	</view>
</template>

<script>
  
export default {
	
	data() {
		return {
			
			TabCur: 0,
			scrollLeft: 0,
			navList: [
				{
					text: '待取货'
				},
				{
					text: '配送中'
				},
				{
					text: '抢任务'
				},
				{
					text: '有异常'
				},
				{
					text: '已完成'
				}
			],
			orderList: [
				{
					text_name: '北京烤鸭',
					product_image: '../../static/product_image.jpg',
					about_time: 50,
					kilometres: 1.1,
					position: '昆明理工大学',
					kilometress: 1.1,
					positions: '昆明理工大学',
					userss: '李同学'
				},
				{
					text_name: '小锅米线',
					product_image: '../../static/product_image.jpg',
					about_time: 40,
					kilometres: 1.2,
					position: '昆明理工大学2',
					kilometress: 1.2,
					positions: '昆明理工大学2',
					userss: '李同学2'
				},

				{
					text_name: '藤谷拉面',
					product_image: '../../static/product_image.jpg',
					about_time: 30,
					kilometres: 1.3,
					position: '昆明理工大学3',
					kilometress: 1.3,
					positions: '昆明理工大学3',
					userss: '李同学3'
				},
				{
					text_name: '凉米线',
					product_image: '../../static/product_image.jpg',
					about_time: 30,
					kilometres: 1.4,
					position: '昆明理工大学4',
					kilometress: 1.4,
					positions: '昆明理工大学4',
					userss: '李同学4'
				},
				{
					text_name: '黄焖鸡米饭',
					product_image: '../../static/product_image.jpg',
					about_time: 30,
					kilometres: 1.5,
					position: '昆明理工大学5',
					kilometress: 1.5,
					positions: '昆明理工大学5',
					userss: '李同学5'
				}
			],
			
			
			orderListaccount: [
				{
					index: 0,
					details: '查看详情',
					sheet: '开始配送',
					arrived: '已到店',
					change: '转单'
				},
				{
					index: 1,
					details: '查看详情',
					sheet: '确认送达'
				},

				{
					index: 2,
					details: '查看详情',
					sheet: '抢单'
				},
				{
					id: 3,
					details: '查看详情',
					sheet: '查看详情'
				},
				{
					id: 4,
					details: '查看详情',
					sheet: '查看详情'
				}
			]
		};
	},
	onLoad(options) {
		// 页面显示是默认选中第一个
		this.TabCur = 2;
	},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		//拨打电话
					tel() {
						uni.makePhoneCall({
							phoneNumber: '13211616601' 
						});
					},
					tell() {
						uni.makePhoneCall({
							phoneNumber: '17388914843' 
						});
					},
					position() {
					
					}
					
					

	}
};
</script>
<style>
.order-get-position {
	font-size: 34upx;
	margin-top: 15upx;
}
.order-get-kilometres {
	font-size: 34upx;
	margin-top: 14upx;
}
.cu-item-text {
	font-size: 30upx;
}
.order-item {
	width: auto;
	height: 590upx;
	background-color: #ffffff;
	margin-top: 40upx;
	border: #cccccc 2upx solid;
	border-radius: 16upx;
	margin-right: 20upx;
	margin-left: 20upx;
}
.order-item-item {
	width: auto;
	height: 590upx;
}
.order-name {
	align-items: center;
	display: flex;
	width: 1270upx;
	height: 150upx;
}
.order-get {
	align-items: center;
	display: flex;
	width: 690upx;
	height: 140upx;

	margin-left: 12upx;
	border-top-color: #cccccc 1px solid;
}
.order-push {
	align-items: center;
	display: flex;
	width: 690upx;
	height: 170upx;

	margin-left: 12upx;
	border-top-color: #cccccc 1px solid;
}
.order-name-name {
	width: 380upx;
	height: 130upx;
	margin-left: 35upx;
	align-items: center;
	display: flex;
}
.product-image {
	width: 120upx;
	height: 120upx;
}

.text-name {
	width: 260upx;
	height: 60upx;
	font-size: 40upx;
	font-weight: 700;
	margin-left: 22upx;
}
.clock {
	width: 60upx;
	height: 60upx;
}
.order-clock {
	width: 70upx;
	height: 70upx;
}
.users-clock {
	width: 45upx;

	height: 45upx;
}
.order-clock-position {
	width: 70upx;
	height: 70upx;
}
.about-time {
	width: 130upx;
	height: 50upx;
	font-size: 17px;
	margin-left: 10upx;
}
.order-name-name-name {
	align-items: center;
	display: flex;
	width: 340upx;
	height: 90upx;
	margin-left: 75upx;
}
.order-get-underline {
	width: 2upx;
	height: 128upx;

	border-left-width: 2upx solid #cccccc;
	margin-left: 30upx;
}
.order-get-get {
	margin-left: 20upx;
	width: 120upx;
	height: 120upx;
	background-color: #007aff;
}
.order-get-get1 {
	margin-left: 20upx;
	width: 120upx;
	height: 120upx;
	background-color: #fbbd08;
}

.order-get-get {
	margin-left: 20upx;
	width: 120upx;
	height: 120upx;
}
.cu-avatar.xl {
	width: 100upx;
	height: 100upx;
	margin-top: 20upx;
}
.order-get-kilometre {
	width: 360upx;
	height: 128upx;

	margin-left: 25upx;
}
.order-account {
	align-items: center;

	width: 696upx;
	height: 100upx;
	margin-top: 40upx;

	margin-left: 10upx;
	border-top-color: #cccccc 1px solid;
}
.view-details {
	width: 172upx;
	height: 70upx;
	float: left;
	color: #007aff;
	background-color: #ffffff;
	font-weight: 600;
	border: #007aff solid 1upx;
}
.view-detailsd {
	width: 172upx;
	height: 70upx;
	float: left;
	margin-left: 330upx;
	color: #007aff;
	background-color: #ffffff;
	font-weight: 600;
	border: #007aff solid 1upx;
}
.grab-sheet {
	width: 172upx;
	height: 70upx;
	float: right;
	color: #ffffff;
	background-color: #007aff;
	font-weight: 600;
	border: #007aff solid 1upx;
}
.grab-sheetd {
	width: 172upx;
	height: 70upx;
	float: right;
	color: #ffffff;
	background-color: #007aff;
	font-weight: 600;
	border: #007aff solid 1upx;
}
.users-text {
	position: relative;
	top: -2upx;
	left: 15upx;
}
.view-arrived {
	width: 172upx;
	height: 70upx;
	float: right;
	color: #007aff;
	background-color: #1aad19;
	font-weight: 600;
	border: #007aff solid 1upx;
}
.view-arrive {
	float: left;
	width: 172upx;
	height: 70upx;
	color: #007aff;
	background-color: #ffffff;
	font-weight: 600;
	margin-left: 4upx;
	border: #007aff solid 1upx;
}
.view-change {
	width: 172upx;
	height: 70upx;
	float: left;
	color: #007aff;
	background-color: #ffffff;
	font-weight: 600;
	margin-left: 4upx;

	border: #007aff solid 1upx;
}
.view-changed {
	width: 172upx;
	height: 70upx;
	float: right;
	color: #007aff;
	font-weight: 600;
	border: #007aff solid 1upx;
}
button {
	font-size: 28upx;
}
.nav .cu-item.cur {
	border-bottom: 8upx solid #007aff;
	font-weight: 600;
}
.text-orange {
	color: #007aff;
}
</style>
