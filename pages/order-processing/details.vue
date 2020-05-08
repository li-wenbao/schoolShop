<template>
	<view class="page">
		<view style="height: 30vh;">
			<map style="width: 100vw; height:100%;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline">
			</map>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="flex margin-sm justify-between text-black line-gray">
				<view class=" margin-xs">
					<image src="../../static/clock.png" class="Image">
						<text class="text-blue text-sm">33分钟内</text>
						<text class="margin-left">
							送达
						</text>
				</view>
				<view class="margin-xs"><text class="text-bold text-red">￥3</text></view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="order-get">
				<view class="cu-avatar xl round margin-left bg-red order-get-get">取</view>
				<view class="order-get-underline"></view>
				<view class="order-get-kilometre ">
					<view class="order-get-kilometres text-blue">
						<text class="text-sm">56km</text>
					</view>
					<view class="order-get-position">
						<text class="text-sm">理工大学城市学院</text>
					</view>
				</view>
			</view>
			<view class="order-push">
				<view class="cu-avatar xl round margin-left bg-red order-get-get1">送</view>
				<view class="order-get-underline"></view>
				<view class="order-get-kilometre text-sxl">
					<view class="order-get-kilometres text-blue">
						<text class="text-sm">56km</text>
					</view>
					<view class="order-get-position">
						<text class="text-sm">理工大学城市学院</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="cuIcon-title text-blue text-sxl"></text>商品清单
			</view>
			<!-- 清单列表开始 -->
			<view class="list">
				<view class="flex p-xs margin-bottom-sm mb-sm">
					<view class="flex-treble padding-sm margin-xs ">汤圆</view>
					<view class="flex-sub  padding-sm margin-xs ">1</view>
					<view class="flex-twice  padding-sm margin-xs text-right">￥2.00</view>
				</view>
			</view>
			<!-- 清单列表结束 -->
			<view>
				<view class="flex justify-between">
					<view class="padding-sm margin-xs">包装费</view>
					<view class="padding-sm margin-xs"><text>￥3</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm margin-xs">配送费</view>
					<view class="padding-sm margin-xs"><text>￥3</text></view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="cuIcon-title text-blue text-sxl"></text>订单信息
			</view>
			<view>
				<view class="flex justify-between">
					<view class="padding-sm margin-xs">订单号码</view>
					<view class="padding-sm margin-xs"><text>15657913113</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm margin-xs">期望送达</view>
					<view class="padding-sm margin-xs"><text>2020.06.8 12：30：15</text></view>
				</view>
				<view class="flex justify-between">
					<view class="padding-sm margin-xs">发票抬头</view>
					<view class="padding-sm margin-xs"><text>无(不需要发票)</text></view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="cuIcon-title text-blue text-sxl"></text>订单配送收入
			</view>
			<view class="flex justify-between">
				<view class="padding-sm margin-xs">订单配送收入</view>
				<view class="padding-sm margin-xs"><text class="text-orange">￥3</text></view>
			</view>
		</view>
		<view class="bg-white margin-sm padding-xs radius30">
			<view class="action margin-sm">
				<text class="cuIcon-title text-blue text-sxl"></text>要求送达
			</view>
			<view class="flex justify-between">
				<view class="padding-sm margin-xs">订单配送收入</view>
				<view class="padding-sm margin-xs"><text class="text-orange">￥3</text></view>
			</view>
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
		width: 30rpx;
		height: 30rpx;
	}
</style>
