<template>
	<view class="page">
		<view style="height: 30vh;">
			<map style="width: 100vw; height:100%;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline">
			</map>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="flex margin-sm justify-between text-black line-gray">
				<view class="flex text-content">
					<view class="align-center">
						<image src="../../static/clock.png" class="Image">
					</view>
					<view class="align-center margin-left-sm">
						<text class="text-blue text-sm">33分钟内</text>
						<text class="margin-left-sm">
							送达
						</text>
					</view>
				</view>
				<view class="text-content">
					<text class="text-bold text-red">￥3</text>
				</view>
			</view>
			<view class="flex  p-xs margin-bottom-sm mb-sm">
				<view class="padding-sm">
					<view class="cu-avatar xl round bg-blue">
						<text class="text-xxl">取</text>
					</view>
				</view>
				<view class="flex-twice padding-sm">
					<view class="margin-bottom-sm text-blue">
						<text class="text-sm">56km</text>
					</view>
					<view class="text-black">
						<text class="text-sm">理工大学城市学院</text>
					</view>
				</view>
			</view>	
			<view class="flex  p-xs margin-bottom-sm mb-sm">
				<view class="padding-sm">
					<view class="cu-avatar xl round bg-orange">
						<text class="text-xxl">送</text>
					</view>
				</view>
				<view class="flex-twice padding-sm">
					<view class="order-get-users">
						<text class="cuIcon-people"></text>
						<text class="users-text">王鑫</text>
					</view>
					<view class="margin-bottom-sm text-blue">
						<text class="text-sm">56km</text>
					</view>
					<view class="text-black">
						<text class="text-sm">理工大学城市学院</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="text-xl text-black">商品清单</text>
			</view>
			<!-- 清单列表开始 -->
			<view class="list">
				<view class="flex p-xs margin-bottom-sm mb-sm">
					<view class="flex-treble padding-sm">汤圆</view>
					<view class="flex-sub  padding-sm">1</view>
					<view class="flex-twice  padding-sm text-right">￥2.00</view>
				</view>
			</view>
			<!-- 清单列表结束 -->
			<view>
				<view class="flex justify-between">
					<view class="padding-sm">包装费</view>
					<view class="padding-sm"><text>￥3</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm">实付</view>
					<view class="padding-sm"><text>￥3</text></view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="text-xl text-black">订单信息</text>
			</view>
			<view>
				<view class="flex justify-between">
					<view class="padding-sm">订单号码</view>
					<view class="padding-sm"><text>15657913113</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm">期望送达</view>
					<view class="padding-sm"><text>2020.06.8 12：30：15</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm">发票抬头</view>
					<view class="padding-sm"><text>无(不需要发票)</text></view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="text-xl text-black">订单配送收入</text>
			</view>
			<view class="flex justify-between">
				<view class="padding-sm">订单配送收入</view>
				<view class="padding-sm"><text class="text-red">￥3</text></view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="text-xl text-black">要求送达</text>
			</view>
			<view class="grid margin-bottom text-center margin-top-sm col-4">
				<view>
					<view>
						15:30
					</view>
					<view>
						抢单
					</view>
				</view>
				<view>
					<view>
						16:30
					</view>
					<view>
						到店
					</view>
				</view>
				<view>
					<view>
						16:30
					</view>
					<view>
						取货
					</view>
				</view>
				<view>
					<view>
						16:40
					</view>
					<view>
						送达
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="text-xl text-black">备注</text>
			</view>
			<view class="text-left padding-sm" style="height: 180rpx;overflow-y: auto;">
				少放盐少放辣椒少放盐少放辣椒少放盐少放辣椒少放盐
				少放辣椒少放盐少放辣椒少放盐少放辣椒少放盐少放辣椒
				少放盐少放辣椒少放盐少放辣椒少放盐少放辣椒少放盐
				少放辣椒少放盐少放辣椒少放盐少放辣椒少放盐少放辣椒
			</view>
		</view>
		<view class="margin-sm padding-xs">
			<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">确认抢单</button>
		</view>
	</view>
</template>

<script>
	import js_sdk from '../../js_sdk/lyn4ever-gaode.js';

	export default {
		data() {
			return {
				ColorList: this.ColorList,
				longitude: 102.75205,
				latitude: 25.11624,
				markers: [

				],
				polyline: [],
			}
		},
		methods: {



		}
	}
</script>

<style>
	.Image {
		width: 40rpx;
		height: 40rpx;
	}
</style>
