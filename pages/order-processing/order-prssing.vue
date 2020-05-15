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
										<view class="cu-avatar xsl round bg-blue">
											<text class="text-xxl">取</text>
										</view>
									</view>
									<view class="flex-twice">
										<view class="padding-left-sm ">
											<view class="order-get-users">
												<text class="cuIcon-shop"></text>
												<text class="text-xsl text-black text-bold margin-left-xs">{{item.store}}</text>
											</view>
											<view class="text-blue">
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
										<view class="cu-avatar xsl round bg-orange">
											<text class="text-xxl">送</text>
										</view>
									</view>
									<view class="flex-twice">
										<view class="padding-left-sm">
											<view class="order-get-users">
												<text class="cuIcon-people"></text>
												<text class="text-xsl text-black text-bold margin-left-xs">{{item.userss}}</text>
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
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">送达</button>
							</view>
							<view v-if="item.order_status=='2'">
								<button class="cu-btn margin-xs line-blue" @click="_goDetails">详情</button>
								<button class="cu-btn margin-xs line-blue" @click="_grabSheet">抢单</button>
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
					<view v-if="loading" class="cu-load loading"></view>
					<view v-if="over" class="cu-load over text-gray"></view>
				</view>
				<!-- 空白页 -->
				<!-- <empty v-else v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty> -->
				<empty v-else></empty>
			</scroll-view>
		</view>
		<!-- <tra-order @hideModal="hideModal" @trchangOrder ="_trchangOrder" :modalName="modalName"></tra-order> -->
		<!-- 模态窗口设置 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog radius30" style="background: none;">
				<view class="bg-white radius30">
					<view class="cu-bar bg-blue justify-end">
						<view class="content">转单求助</view>
					</view>
					<view class="padding-sm margin-top-sm">
						<text class="text-left text-red">*</text>
						<text class="text-left">
							转单求助持续5分钟，如无人应答，转单将被取消，仍需自己配送，如果有指定人员接单，请输入他的手机号，他将直接收到你的转单求助。
						</text>
					</view>
					<view class="padding-sm margin-top-sm">
						<text class="text-xxl">- 指定骑手 -</text>
					</view>
					<view class="flex justify-center">
						<view class="cu-form-group margin-sm radius50" style="border: 1px #e8e8e8 solid;">
							<view class="title">
								<text class="cuIcon-people text-xxl" style="font-size: 36rpx;"></text>
							</view>
							<input placeholder="输入手机号" name="phone" @input="limit" v-model="phone"></input>
						</view>
					</view>
					<view class="flex justify-center">
						<button class="flex justify-center" @click="_trchangOrder">
							立即转单
						</button>
					</view>
				</view>
				<view class="action margin-top-xl" @click="hideModal">
					<text class="cuIcon-roundclose text-red text-xxl" style="font-size: 56rpx;"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import traOrder from '@/components/tra-order/tra-order.vue';
	import empty from "@/components/empty";
	import Json from "../../Json.js";
	export default {
		components: {
			// traOrder,
			empty
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
				phoneNumber:'',
				phone: "",
				leg: 0,
				emptyContent: "无数据~~~"
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
			this.emptyContent
			this.getqiShouOrderList()
		},
		onShow: function() {
			console.log("pages/order/home");
		},
		methods: {
			// 后添加的东西
			// 订单数据请求
			getqiShouOrderList: function() {
				let qiShouOrderList = Json.qiShouOrderList
				// console.log("qiShouOrderListOOOOO=",qiShouOrderList)
				
				// console.log("this.tabCur=",this.tabCur)
				let orderList = []
				for (var i = 0; i < qiShouOrderList.length; i++) {
					if(qiShouOrderList[i].order_status==this.tabCur){
						orderList.push(qiShouOrderList[i])
					}
				}
				this.orderList = orderList
				// this.$api.qiShouOrderListApi({
				// 	"order_status": this.tabCur,
				// }).then(res => {
				// 	console.log('数据:' + JSON.stringify(res.data));
				// 	this.orderList = res.data;
				// 	this.leg = this.orderList.length;
				// 	console.log("所在当前的列表数据条数", this.leg)
				// })
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
				// console.log("骑手到店取货", e)
				uni.showToast({
					title: '骑手到店取货',
					duration: 2000
				});
			},

			//抢单
			_grabSheet(e) {
				uni.showToast({
					title: '抢单了~!',
					duration: 2000
				});
			},

			//转单
			_changOrder(e) {
				console.log("转单+++++:", e.currentTarget.dataset.target)
				this.modalName = e.currentTarget.dataset.target
			},

			// 确认转单
			_trchangOrder() {
				console.log("this.phone+++++:",this.phone)
				this.hideModal()
				uni.showToast({
					title: "您转给了"+this.phone,
					duration: 2000
				});
				// this.modalName = e.currentTarget.dataset.target
			},

			limit(e) {
				e.target.value = e.target.value.replace(/[^\d]/g, '')
				console.log('value值-----' + e.target.value)
				console.log('model值-----' + this.phone)
				
			},
			// 打开模态框
			// showModal(e) {
			// 	this.modalName = e.currentTarget.dataset.target
			// },
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
