<template>
	<view class="page">
		<scroll-view scroll-x class="bg-white nav" :style="'position:fixed;top: '+ CustomBar + 'px;z-index:99'"
		 scroll-with-animation :scroll-left="scrollLeft">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="TabCur ==0?'text-blue cur':''" @click="tabSelect" :data-id="0">
					2020-01-01
				</view>
				<view class="cu-item flex-sub" :class="TabCur ==1?'text-blue cur':''" @tap="tabSelect" :data-id="1">
					<text>
						月统计
					</text>
				</view>
			</view>
		</scroll-view>
		<view class="flex">
			<!-- 显示区域 -->
			<view v-if="TabCur == 0" class="width100" style="margin-top:45px">
				<view class="flex bg-appblue margin-sm radius padding-sm radius20">
					<view class="flex-sub padding-sm text-center">
						<view>完成单量</view>
						<view>99</view>
					</view>
					<view class="flex-sub padding-sm text-center">
						<view>取消订单</view>
						<view>0</view>
					</view>
					<view class="flex-sub padding-sm text-center">
						<view>准时率</view>
						<view>99%</view>
					</view>
				</view>
				<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="flex text-center">
						<view class="cu-item flex-sub" :class="TabCur1 == (index + 4)?'text-blue cur':''" v-for="(item,index) in orderType" :key="index"
						 @tap="tabSelect1" :data-id="index + 4 ">
							{{item}}
						</view>
					</view>
				</scroll-view>
				<view v-if="TabCur1 == 4" class="width100">
					<view class="list" >
						<view class="bg-white margin-sm padding-sm radius  radius20"  v-for="(item,index) in orderstu" :key="index" @click="_goDetails">
							<view class="flex justify-between border-bottom">
								<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
									{{item.ontime_order}}准时达
								</view>
								<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
									<text class="text-black text-xs">{{item.start_time}}接单</text>
									<text class="text-xs margin-left-xs text-right">{{item.uerse_tiem}}分钟</text>
								</view>
							</view>
							<view class="flex">
								<view class="flex-sub padding-sm radius">
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-blue">
												<text class="text-xl">取</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df">{{item.start_address}}</text>
											</view>
										</view>
									</view>
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-orange">
												<text class="text-xl">送</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df">{{item.end_address}}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex padding-sm  radius justify-center align-center">
									<text class="cuIcon-right justify-center align-center"></text>
								</view>
							</view>
						</view>
					</view>
					<!-- <view v-if="loading" class="cu-load loading"></view>
					<view v-if="over" class="cu-load over text-gray"></view> -->
				</view>
				<view v-if="TabCur1 == 5" class="width100">
					<view class="list">
						<view class="bg-white margin-sm padding-sm radius  radius20" v-for="(item,index) in orderstu" :key="index" @click="_goDetails">
							<view class="flex justify-between border-bottom">
								<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
									订单已取消
								</view>
								<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
									<text class="text-black text-xs">{{item.start_time}}接单</text>
								</view>
							</view>
							<view class="flex">
								<view class="flex-sub padding-sm radius">
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-blue">
												<text class="text-xl">取</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df">{{item.start_address}}</text>
											</view>
										</view>
									</view>
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-gray">
												<text class="text-xl">送</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df text-gray">{{item.end_address}}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex padding-sm  radius justify-center align-center">
									<text class="cuIcon-right justify-center align-center"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="TabCur1 == 6" class="width100">
					<view class="list">
						<view class="bg-white margin-sm padding-sm radius  radius20" v-for="(item,index) in orderstu" :key="index" @click="_goDetails">
							<view class="flex justify-between border-bottom">
								<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
									订单已超时
								</view>
								<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
									<text class="text-black text-xs">{{item.start_time}}接单</text>
									<!-- <text class="text-xs margin-left-xs text-right">19分52秒</text> -->
								</view>
							</view>
							<view class="flex">
								<view class="flex-sub padding-sm radius">
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-blue">
												<text class="text-xl">取</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df">{{item.start_address}}</text>
											</view>
										</view>
									</view>
									<view class="flex justify-center align-center">
										<view class="margin-xs">
											<view class="cu-avatar xxl round bg-gray">
												<text class="text-xl">送</text>
											</view>
										</view>
										<view class="flex-sub margin-xs">
											<view class="text-black justify-center align-center">
												<text class="text-df text-gray">{{item.end_address}}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex padding-sm  radius justify-center align-center">
									<text class="cuIcon-right justify-center align-center"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex">
			<view v-if="TabCur == 1" class="width100" style="margin-top:45px">
				<view class="list" v-for="(item,index) in monthList" :key="index">
					<view class=" bg-appblue margin-sm radius padding-sm radius20">
						<view class="padding-left-sm align-center">
							{{item.month}}<text class="margin-left-xs">01.01~01.31</text>
						</view>
						<view class="flex">
							<view class="flex-sub text-center">
								<view>完成单量</view>
								<view>{{item.complete_order}}</view>
							</view>
							<view class="flex-sub text-center">
								<view>取消订单</view>
								<view>{{item.cancel_order}}</view>
							</view>
							<view class="flex-sub text-center">
								<view>准时率</view>
								<view>{{item.ontime_order}}%</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Json from "../../Json.js";
	export default {
		data() {
			return {
				dateShow: false,
				TabCur: 0,
				scrollLeft: 0,
				TabCur1: 4,
				scrollLeft1: 0,
				tabList: [
					'2020-1-1',
					'月统计'
				],
				date: '2018-12-25',
				orderType: [
					'已完成',
					'已取消',
					'已超时'
				],
				history: [],
				monthList: [],
				orderstu: [],
			};
		},
		onLoad(options) {
			// 页面显示是默认选中第一个
			this.TabCur = 0;
			// this.TabCur1 = 4;
			this.loadData();
			this.getMoth();
			this.getOrdersT()
		},
		methods: {
			// 获取数据
			loadData() {
				setTimeout(() => {
					console.log("Json+++++", Json)
					this.history = Json.history
					console.log("this.history++++", this.history)
				}, 600);
			},


			// 获取月统计数据
			getMoth() {
				this.monthList = Json.monthill;
			},

			// 获取订单状态 已完成 已取消 已超时列表
			getOrdersT() {
				let order = []
				let orderList = Json.monthill[0].orderList;
				for (var i = 0; i < orderList.length; i++) {
					if(orderList[i].order_status==this.TabCur1){
						order.push(orderList[i]) 
					}
				}
				this.orderstu = order
				console.log("sdjgsdbghsdbg", this.orderstu)
			},


			/*
			 *触底事件 加载更多
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

			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				console.log("this.TabCur", this.TabCur)
				if (this.TabCur == 0) {
					// this.DateChange()
					// this.date = e.detail.value
				}
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			},
			tabSelect1(e) {
				this.TabCur1 = e.currentTarget.dataset.id;
				console.log("this.TabCur1", this.TabCur1)
				this.getOrdersT()
				this.scrollLeft1 = (e.currentTarget.dataset.id - 1) * 60;
			},
			
			//查看订单详情
			_goDetails(e) {
				uni.navigateTo({
					url: "/pages/order-processing/details?orderId=" + e.currentTarget.dataset.id
				});
			},
			// 日期
			DateChange(e) {
				this.date = e.detail.value
			},
		},
		computed: {
			// 比较日期
			isDuringDate: function(beginDateStr, endDateStr) {
				var curDate = new Date(),
					beginDate = new Date(beginDateStr),
					endDate = new Date(endDateStr);
				if (curDate >= beginDate && curDate <= endDate) {
					return true;
				}
				return false;
			},
			// 获取当前月的最后一天
			getCurrentMonthLastDay: function() {
				var current = new Date();
				var currentMonth = current.getMonth();
				var nextMonth = ++currentMonth;
				var nextMonthDayOne = new Date(current.getFullYear(), nextMonth, 1);
				var minusDate = 1000 * 60 * 60 * 24;
				return new Date(nextMonthDayOne.getTime() - minusDate);
				var lastDay = getCurrentMonthLastDay();
				alert(lastDay.getFullYear() + "-" + (lastDay.getMonth() + 1) + "-" + lastDay.getDate());
			}

		}

	};
</script>
<style>

</style>
