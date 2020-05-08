<template>
	<view class="">
		<!-- 导航栏 agents导航栏标题 -->
		<view class='nav'>
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="min-height: 90vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
					<view :id="'top'+listIndex" style="width: 100%;height: 100upx;">边距盒子</view>
					<view class='content'>
						<!-- 显示区域 -->
						<view class="list" v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index">
							<view class="order-item">
								<view class="order-item-item">
									<view class="order-name">
										<view class="order-name-name">
											<image :src="item.product_image" class="product-image"></image>
											<view class="text-name">{{ item.text_name }}</view>
										</view>
										<view class="order-name-name-name">
											<image src="../../static/clock.png" mode="" class="clock"></image>
											<view class="about-time">{{ item.about_time }}分钟</view>
										</view>
									</view>
									<view class="order-get">
										<view class="cu-avatar xl round margin-left bg-red order-get-get">取</view>
										<view class="order-get-underline"></view>
										<view class="order-get-kilometre">
											<view class="order-get-kilometres">{{ item.kilometres }}km</view>
											<view class="order-get-position">{{ item.position }}</view>
										</view>
										<view class="order-phone">
											<image src="../../static/phone.png" mode="" class="order-clock" style="margin-top: 48upx;" @click="tel"></image>
										</view>
										<view class="order-position">
											<image src="../../static/position.png" mode="" class="order-clock-position" style="margin-top: 48upx;"
											 @click="position"></image>
										</view>
									</view>
									<view class="order-push">
										<view class="cu-avatar xl round margin-left bg-red order-get-get1">送</view>
										<view class="order-get-underline"></view>
										<view class="order-get-kilometre">
											<view class="order-get-users">
												<image src="../../static/users.png" mode="" class="users-clock"></image>
												<text class="users-text">{{ item.userss }}</text>
											</view>
											<view class="order-get-kilometres">{{ item.kilometress }}km</view>
											<view class="order-get-position">{{ item.positions }}</view>
										</view>
										<view class="order-phone">
											<image src="../../static/phone.png" mode="" class="order-clock" style="margin-top: 140upx;" @click="tell"></image>
										</view>
										<navigator class="order-position" url="../map/map">
											<image src="../../static/position.png" mode="" class="order-clock-position" style="margin-top: 140upx;"
											 @click="position">
											</image>
										</navigator>
									</view>
									<view class="order-account" v-for="(itemaccount, index) in orderListaccount" :key="index.id" v-if="TabCur === index">
										<button @click="details" type="" :class="index == 0 ? 'view-details' : 'view-detailsd'" v-if="index == 1 || index == 2 || index == 0">{{ itemaccount.details }}</button>
										<button type="" :class="index == 0 ? 'view-arrive' : 'view-arrived'" v-if="index == 0">{{ itemaccount.arrived }}</button>
										<button type="" :class="index == 0 ? 'view-change' : 'view-changed'" v-if="index == 0">{{ itemaccount.change }}</button>
										<button type="" :class="index == 0 ? 'grab-sheet' : 'grab-sheetd'">{{ itemaccount.sheet }}</button>
									</view>
								</view>
							</view>
						</view>
						<!-- 显示区域结束 -->
					</view>
					<view class='noCard' style="margin-top: 80upx;"  v-if="listItem.length===0">
						暂无信息
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import refresh from '../../components/refresh.vue';
	import navTab from '../../components/navTab.vue';

	export default {
		components: {
			refresh,
			navTab,
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				currentPage: 'index',
				toView: '', //回到顶部id
				tabTitle: ['待取货', '配送中', '抢任务', '有异常', '已完成'],
				currentTab: 0, //sweiper所在页
				list: [
					[{
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
					[{
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
						},
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
						}
					],
					[],
					[{
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
						},
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
					],
					[]
				], 
				//数据格式
				orderListaccount: [{
						index: 0,
						details: '查看详情',
						sheet: '开始配送',
						arrived: '已到店',
						change: '1'
					},
					{
						index: 1,
						details: '查看详情',
						sheet: '确认送达',
						arrived: '已到店',
						change: '1'
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
			details(){
				uni.navigateTo({
					url: "/pages/order-processing/details"
				});
			},
			position() {

			},

			// 后添加的东西

			toTop() {
				this.toView = ''
				setTimeout(() => {
					this.toView = 'top' + this.currentTab
				}, 10)
			},
			changeTab(index) {
				this.currentTab = index;
				console.log("点到哪个了？？？？++++",this.currentTab)
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest() {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: `请求第${that.currentTab + 1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
						})
						let newData = ['新数据1', '新数据2', '新数据3']
						resolve(newData)
					}, 1000)
				})
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
			},
			
			isRefresh() {
				setTimeout(() => {
					uni.showToast({
						icon: 'success',
						title: '刷新成功'
					})
					this.$refs.refresh.endAfter() //刷新结束调用
				}, 1000)
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

	/* 添加的 */

	.container999 {
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 100%;
	}

	.card {
		width: 90%;
		height: 368upx;
		background-color: white;
		margin: 0 auto 42upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
	}


	.nav {
		position: fixed;
		left: 0;
		/* top: 0; */
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #0099ff;
		z-index: 996;
	}

	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
</style>
