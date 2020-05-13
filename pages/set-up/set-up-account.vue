<template>
	<view class="page width100">
		<view class="flex bg-appblue p-xs margin-bottom-sm mb-sm justify-center align-center">
			<view class="flex-twice padding-sm margin-xs radius">
				<view class="padding-sm">账户余额(元)</view>
				<view class="padding-sm padding-top-none text-xl">888</view>
			</view>
			<view class="flex-sub padding-sm margin-xs justify-center align-center">
				<button class="cu-btn round line-white">去提现</button>
			</view>
		</view>
		<view class="flex">
			<view class="flex-sub padding-sm text-center" v-for="(item,index) in accList" :key="index">
				<image :src="item.image" class="iconImage"></image>
				<view class="text-xs">{{item.title}}</view>
			</view>
		</view>
		<view>
			<view class="margin-sm padding-left-sm text-df">
				今日订单
			</view>
			<view class="flex border-gray margin-sm radius20">
				<view class="flex-sub padding-sm text-center">
					<view>收入</view>
					<view>888</view>
				</view>
				<view class="flex-sub padding-sm text-center">
					<view>支出</view>
					<view>888</view>
				</view>
				<view class="flex-sub padding-sm text-center">
					<view>提现</view>
					<view>888</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accList: [{
						id: "1",
						image: "../../static/account.png",
						title: "账户明细"
					},
					{
						id: "2",
						image: "../../static/income.png",
						title: "收支统计"
					},
					{
						id: "3",
						image: "../../static/card.png",
						title: "银行卡"
					},
				]
			}

		}
	}
</script>

<style>
</style>
