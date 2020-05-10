<template>
	<view class="login">
		<view class="login-title">
			蓝鲸校园外卖骑手版
		</view>
		<view class="cu-bar search" style="background-color: none;">
			<view class="login-phone search-form round" style="background-color: none;">
				<image src="../../static/logo.png" mode="" class="image-phone"></image>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入手机号" confirm-type="search"></input>
			</view>
		</view>
		<view class="cu-bar search cu-bar-pwd">
			<view class="login-pwd search-form round">
				<image src="../../static/logo.png" mode="" class="image-phone"></image>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入密码" confirm-type="search"></input>
			</view>
		</view>
		<view class="login-dl padding flex flex-direction">
			<button class="cu-btn bg-white margin-tb-sm lg">登录</button>
		</view>
		<view class="yzlogin">
			验证码登录
		</view>
		<view class="login-qs">
			登录遇到问题？
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

	.login-phone {
		/* background-color: #FFFFFF; */
		height: 90upx;
		min-height: 90upx;
	}

	.login-pwd {
		/* background-color: #FFFFFF; */
		height: 90upx;
		min-height: 90upx;
	}
	.cu-bar {
	    background-color: none;
		}

	.image-phone {
		width: 60upx;
		height: 60upx;
		margin-left: 40upx;
	}

	.uni-input-placeholder {
		position: absolute;
		top: 50%;
		left: 40upx;
		font-size: 40upx;
	}

	.cu-bar {
		margin-top: 120upx;
	}

	.cu-bar-pwd {
		margin-top: 50upx;
	}
	.cu-btn.lg {
		font-size: 32upx;
		height: 90upx;
		border-radius: 50upx;
	}

	.padding {
		padding: 30upx;
		padding-bottom: 0upx;
		padding-top: 60upx;
	}
	.yzlogin{
		margin-top: 80upx;
		height: 90upx;
		color: white;
		font-size: 36upx;
		text-align: center;
	}

	.login-qs {
		height: 90upx;
		color: white;
		font-size: 36upx;
		text-align: center;
        
	}
</style>
