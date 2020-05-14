<template>
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
						<!-- <input placeholder="请输入电话号码" name="phoneNumber"></input> -->
						<input placeholder="输入手机号" name="input" v-model="phone"></input>
					</view>
				</view>
				<view class="flex justify-center">
					<button class="flex justify-center" @click="trchangOrder">
						立即转单
					</button>
				</view>
			</view>
			<view class="action margin-top-xl" @click="hideModal">
				<text class="cuIcon-roundclose text-red text-xxl" style="font-size: 56rpx;"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'traOrder',
		data() {
			return {
				modalName: this.setModalName,
				phone: this.setPhone,
			}
		},
		props: {
			modalName:{
				type: String,
				default:""
			},
			phone:{
				type: String,
				default:""
			}
		},
		methods: {
			hideModal(){
				this.$emit("hideModal",this.phone)
			},
			trchangOrder(e){
				this.$emit("trchangOrder",this.modalName)
			}
		}
	}
</script>

<style>
</style>
