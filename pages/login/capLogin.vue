<template>
	<view class="login">
		<view class="login-title">
			蓝鲸校园外卖骑手版
		</view>

		<view class="cu-form-group margin-xl radius50" style="border: 1px #e8e8e8 solid;">
			<view class="title">手机号码</view>
			<input placeholder="输入框带标签" name="input"></input>
			<view class="cu-capsule radius">
				<view class='cu-tag bg-blue '>
					+86
				</view>
				<view class="cu-tag line-blue">
					中国大陆
				</view>
			</view>
		</view>
		<view class="cu-form-group margin-xl radius50" style="border: 1px #e8e8e8 solid;">
			<view class="title">验证码</view>
			<input placeholder="输入框带个按钮" name="input"></input>
			<button class='cu-btn bg-green shadow'>验证码</button>
		</view>
		<view class="login-dl flex flex-direction margin-xl">
			<button class="cu-btn bg-white margin-tb-sm lg">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},

	}
</script>

<style>
	page {
		background-color: #0099FF;
	}

	.login {
		display: flex;
		flex-direction: column;

	}

	.login-title {
		height: 90upx;
		color: white;
		font-size: 60upx;
		text-align: center;
		margin-top: 120upx;
	}
	.cu-btn.lg {
		font-size: 32upx;
		height: 100upx;
		border-radius: 50upx;
	}
</style>
