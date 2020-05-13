<template>
	<view class="page">
		<scroll-view scroll-x class="bg-white nav" :style="'position:fixed;top: '+ CustomBar + 'px;z-index:99'"
		 scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="tabCur ==index?'text-blue cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabList[index]}}
			</view>
		</scroll-view>

		<!-- 导航栏结束 -->
		<!-- 全部订单开始 -->
		<view v-if="tabCur == index" style="margin-top:45px " v-for="(item,index) in tabList" :key="index">
			<scroll-view scroll-y :style="style" @scrolltolower="toLowFun">
				<view v-if="orderList.length>0">
					<view class="margin-sm radius padding-sm bg-white radius20" v-for="(item,indexs) in orderList" :key="indexs">
						<view class="cu-list menu-avatar" style="width: 670rpx;">
							<view class="flex justify-between border-bottom">
								<view class="flex padding-sm justify-start flex-sub">
									<view>
										<image :src="item.product_image" class="product-image"></image>
									</view>
									<view class="margin-left-xs">
										<text class="text-bold text-black text-lg">{{item.text_name}}</text>
									</view>
								</view>
								<view class="flex padding-sm align-center product-title">
									<image src="../../static/clock.png" class="Image block" />
									<text class="text-xs margin-left-xs text-right">{{item.about_time}}分钟</text>
								</view>
							</view>
							<view class="flex border-bottom">
								<view class="flex flex-sub">
									<view class="padding-sm">
										<view class="cu-avatar xl round bg-blue">
											<text class="text-xxl">取</text>
										</view>
									</view>
									<view class="flex-twice padding-sm">
										<view class="padding-left-sm border-left">
											<view class="text-blue margin-top-xs">
												<text class="text-sm">{{item.kilometres}}km</text>
											</view>
											<view class="text-black">
												<text class="text-sm">{{item.position}}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex align-center padding-sm">
									<view class="icon-box bg-blue text-center" @click="_tel">
										<text class="cuIcon-phone"></text>
									</view>
									<navigator class="icon-box bg-grey text-center margin-left-xs" url="../map/map">
										<text class="cuIcon-locationfill"></text>
									</navigator>
								</view>
							</view>
							<view class="flex border-bottom">
								<view class="flex flex-sub">
									<view class="padding-sm">
										<view class="cu-avatar xl round bg-orange">
											<text class="text-xxl">送</text>
										</view>
									</view>
									<view class="flex-twice padding-sm">
										<view class="padding-left-sm border-left">
											<view class="order-get-users">
												<text class="cuIcon-people"></text>
												<text class="users-text text-xs">{{item.userss}}</text>
											</view>
											<view class="text-blue">
												<text class="text-sm">{{item.kilometress}}km</text>
											</view>
											<view class="text-black">
												<text class="text-sm">{{item.positions}}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex align-center padding-sm">
									<view class="icon-box bg-blue text-center" @click="_tel">
										<text class="cuIcon-phone"></text>
									</view>
									<navigator class="icon-box bg-grey text-center margin-left-xs" url="../map/map">
										<text class="cuIcon-locationfill"></text>
									</navigator>
								</view>
							</view>
						</view>
						<view class="flex justify-center">
							<view v-if="item.order_status=='0'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
								<button class="cu-btn margin-xs line-blue" @click="_InStore">到店</button>
								<button class="cu-btn margin-xs line-blue" @click="_distribution">配送</button>
							</view>
							<view v-if="item.order_status=='1'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
							</view>
							<view v-if="item.order_status=='2'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
								<button class="cu-btn margin-xs line-blue" @click="_changOrder">抢单</button>
								<button class="cu-btn margin-xs line-blue" data-target="Modal" @click="_changOrder">转单</button>
							</view>
							<view v-if="item.order_status=='3'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
							</view>
							<view v-if="item.order_status=='4'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
							</view>
						</view>
					</view>
					<view v-if="loading" class="cu-load bg-blue loading"></view>
					<view v-if="over" class="cu-load bg-grey over"></view>
				</view>
				<view v-else>暂无订单,一大波美食正在袭来~</view>
			</scroll-view>
		</view>
		<tra-order @hideModal="hideModal" :modalName="modalName"></tra-order>
	</view>
</template>

<script>
	import traOrder from '@/components/tra-order/tra-order.vue';
	export default {
		components: {
			traOrder
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				tabList: ["待取货", "配送中", "抢任务", "有异常", "已完成"],
				scrollLeft: 0,
				tabCur: 0,
				top: 0,
				orderList: [],
				loading: false,
				over: false,
				count: 0,
				modalName: null,
				leg: 0
			};
		},
		computed: {
			style() {
				let CustomBar = this.CustomBar;
				return `height:calc(100vh - ${CustomBar}px - 45px);`;
			}
		},
		onLoad: function() {
			console.log("this.CustomBar==", this.CustomBar)
			this.TabCur = 2;
			this.getqiShouOrderList()
		},
		onShow: function() {
			console.log("pages/order/home");
		},
		methods: {

			// 后添加的东西
			// 订单数据请求
			getqiShouOrderList: function() {
				this.$api.qiShouOrderListApi({
					"order_status": this.tabCur,
				}).then(res => {
					console.log('数据:' + JSON.stringify(res.data));
					this.orderList = res.data;
					this.leg = this.orderList.length;
					console.log("所在当前的列表数据条数", this.leg)

				})
			},

			tabSelect(e) {
				console.log(e);
				this.tabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 130;
				this.getqiShouOrderList()
			},
			/*
			 *加载更多
			 */
			toLowFun() {
				console.log("触底事件");
				var _this = this;
				if (!_this.over) {
					console.log("++++++++++++")
					console.log("++++++++++++", _this.leg)
					if (this.count < _this.leg) {
						console.log("++++++++++++OOOOOOOOOOO")
						this.loading = true;
						setTimeout(function() {
							_this.orderList = _this.orderList.concat(_this.orderList);
							_this.loading = false;
							_this.count++;
						}, 2000);
					} else {
						this.over = true;
					}
				} else {
					this.loading = false;
				}
			},

			//查看订单详情
			_goDetails(e) {
				uni.navigateTo({
					url: "/pages/order-processing/details?orderId=" + e.currentTarget.dataset.id
				});
			},
			//到店
			_InStore(e) {
				console.log("骑手到店取货", e)
			},

			//转单
			_changOrder(e) {
				console.log("转单+++++:", e.currentTarget.dataset.target)
				this.modalName = e.currentTarget.dataset.target

			},

			// 关闭模态窗口
			hideModal(e) {
				this.modalName = null
			},
			//配送
			_distribution(e) {
				console.log("点击配送", e)
				this.tabCur = 1;
				this.postqiShouOrderList()
				// 需要发送请求，提交订单状态
			},

			postqiShouOrderList: function() {
				this.$api.pqiShouOrderListApi({
					"id": 1,
					"order_status": 1,
				}).then(res => {
					console.log('post数据:' + JSON.stringify(res.data));
					this.orderList = res.data;
				})
			},
			//拨打电话
			_tel() {
				uni.makePhoneCall({
					phoneNumber: '13211616601'
				});
			},
			_position() {

			}

		}
	};
</script>

<style>
	/* 重写下划线样式:缩短,加粗 */
	.nav .cu-item {
		margin: 0 50rpx;
	}

	.nav .cu-item.cur {
		border-bottom: 8rpx solid;
	}
</style>
