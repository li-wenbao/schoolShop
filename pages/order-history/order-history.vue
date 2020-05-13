<template>
	<view class="page">
		<view>
			<scroll-view scroll-x class="bg-white nav" :style="'position:fixed;top: '+ CustomBar + 'px;z-index:99'"
			 scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="TabCur ==0?'text-blue cur':''" @click="tabSelect" :data-id="0">
						2020-01-01
						<!-- <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01">
							<view class="picker" style="height: 45px;line-height: 45px;">
								{{date}}
							</view>
						</picker> -->
					</view>
					<view class="cu-item flex-sub" :class="TabCur ==1?'text-blue cur':''" @tap="tabSelect" :data-id="1">
						<text>
							月统计
						</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="flex">
			<!-- 显示区域 -->
			<view v-if="TabCur == 0" class="width100" style="margin-top:45px">
				<view class="flex bg-blue margin-sm radius padding-sm radius20">
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
				<view class="">
					<view class="">
						<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
							<view class="flex text-center">
								<view class="cu-item flex-sub" :class="TabCur1 ==index?'text-blue cur':''" v-for="(item,index) in orderType"
								 :key="index" @tap="tabSelect1" :data-id="index">
									{{item}}
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="flex">
						<view v-if="TabCur1 == 0" class="width100">
							<view class="list">
								<view class="bg-white margin-sm padding-sm radius  radius20">
									<view class="flex justify-between border-bottom">
										<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
											20:30准时达
										</view>
										<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
											<text class="text-black text-xs">19:25接单</text>
											<text class="text-xs margin-left-xs text-right">19分52秒</text>
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
														<text class="text-df">云南大学</text>
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
														<text class="text-df">云南大学</text>
													</view>
												</view>
											</view>
										</view>
										<view class="flex padding-sm  radius justify-center align-center">
											<text class="cuIcon-right justify-center align-center"></text>
										</view>
									</view>
								</view>
								<view class="bg-white margin-sm padding-sm radius  radius20">
									<view class="flex justify-between border-bottom">
										<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
											20:30准时达
										</view>
										<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
											<text class="text-black text-xs">19:25接单</text>
											<text class="text-xs margin-left-xs text-right">19分52秒</text>
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
														<text class="text-df">云南大学</text>
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
														<text class="text-df">云南大学</text>
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
						<view v-if="TabCur1 == 1" class="width100">
							<view class="list">
								<view class="bg-white margin-sm padding-sm radius  radius20">
									<view class="flex justify-between border-bottom">
										<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
											订单已取消
										</view>
										<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
											<text class="text-black text-xs">19:25接单</text>
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
														<text class="text-df">云南大学</text>
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
														<text class="text-df text-gray">云南大学</text>
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
						<view v-if="TabCur1 == 2" class="width100">
							<view class="list">
								<view class="bg-white margin-sm padding-sm radius  radius20">
									<view class="flex justify-between border-bottom">
										<view class="flex flex-sub padding-sm padding-bottom-none padding-top-none align-center">
											订单已超时
										</view>
										<view class="flex padding-sm padding-bottom-none padding-top-none align-center">
											<text class="text-black text-xs">19:25接单</text>
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
														<text class="text-df">云南大学</text>
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
														<text class="text-df text-gray">云南大学</text>
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
			</view>
			<view v-if="TabCur == 1" class="width100" style="margin-top:45px">
				<view class="bg-blue margin-sm radius padding-sm radius20">
					<view class="padding-left-sm align-center">
						2019年1月<text class="margin-left-xs">01.01~01.31</text>
					</view>
					<view class="flex">
						<view class="flex-sub text-center">
							<view>完成单量</view>
							<view>99</view>
						</view>
						<view class="flex-sub text-center">
							<view>取消订单</view>
							<view>0</view>
						</view>
						<view class="flex-sub text-center">
							<view>准时率</view>
							<view>99%</view>
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
				dateShow: false,
				TabCur: 0,
				scrollLeft: 0,
				TabCur1: 0,
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
				]
			};
		},
		onLoad(options) {
			// 页面显示是默认选中第一个
			this.TabCur = 0;
			this.TabCur1 = 0;
		},
		methods: {
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

				this.scrollLeft1 = (e.currentTarget.dataset.id - 1) * 60;
			},
			// 日期
			DateChange(e) {
				this.date = e.detail.value
			},
		},
	};
</script>
<style>

</style>
