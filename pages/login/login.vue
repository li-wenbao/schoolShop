<template>
	<view class="content">
		<view class="flex justify-center">
			<view class="padding-sm margin-xs ">
				<view class="flex flex-wrap justify-center">
					<image class="logo margin-xs padding-sm" src="../../static/logo.png"></image>
				</view>
				<view>
					<text class="text-black text-center text-xxl">
						1点校园外卖骑手版
					</text>
				</view>
			</view>
		</view>
		<view class="flex justify-center margin-top-xl" style="margin-top: 60px;">
			<view class="input-row padding-xs round" style="border: #0099FF 1px solid;width: 60%;">
				<image class="user-image" src="../../static/user.png"></image>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
		</view>
		<view class="flex justify-center margin-top-xl">
			<view class="input-row padding-xs round" style="border: #0099FF 1px solid;width: 60%;">
				<image class="user-image" src="../../static/password.png"></image>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<button class="bg-appblue round margin-top-xl input-login" @tap="bindLogin">
			<text class="text-white">登录</text>
		</button>
		<view class="action-row margin-top-sm">
			<navigator url="/pages/login/capLogin">
				<text class="text-appcolor">验证码登录</text>
			</navigator>
			<text class="text-appcolor">|</text>
			<navigator url="/pages/login/login-reste-pwd">
				<text class="text-appcolor">遇到问题？</text>
			</navigator>
		</view>
	</view>
</template>


<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
			}
		},
		// computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),

			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					account: this.account,
					password: this.password
				};
				const validUser = service.getUsers().some(function(user) {
					return data.account === user.account && data.password === user.password;
				});
				if (validUser) {
					console.log(this.account)
					this.toMain(this.account);
				} else {
					uni.showToast({
						icon: 'none',
						title: '用户账号或密码不正确',
					});
				}
			},
			getUserInfo({
				detail
			}) {
				if (detail.userInfo) {
					this.toMain(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			this.initPosition();
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: #39B54A;
	}

	.action-row navigator {
		color: #39B54A;
		padding: 0 10px;
	}

	.logo {
		width: 180upx;
		height: 180upx;
		/* border-radius: 50%; */
		margin: 50px auto 20px auto;
	}

</style>
