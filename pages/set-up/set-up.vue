<template>
	<view class="center width100">
		<view class="center_box_bg">
			<view class="center_menu width100" v-for="(item,index) in menus" :key="index">
				<view class="menu_item width100" :data-id="item.id" @tap="setList">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "110119",
				menus: [{
						name: '个人信息',
						icon: '../../static/fumou-center-template/5.png',
						id: "0",
					},
					{
						name: '我的账户',
						icon: '../../static/fumou-center-template/5.png',
						id: "1",
					},
					// {
					// 	name: '我的评价',
					// 	icon: '../../static/fumou-center-template/6.png',
					// 	key: 2,
					// },
					{
						name: '我的客服',
						icon: '../../static/fumou-center-template/7.png',
						id: "3",
					},
					{
						name: '修改密码',
						icon: '../../static/fumou-center-template/8.png',
						id: "4",
					},
					{
						name: '手机权限设置',
						icon: '../../static/fumou-center-template/9.png',
						id: "5",
					},
					{
						name: '关于我们',
						icon: '../../static/fumou-center-template/10.png',
						id: "6",
					}
				]
			};
		},
		onLoad() {

		},

		methods: {
			setList(e) {
				let serviceId = e.currentTarget.dataset.id
				console.log("serviceId:", serviceId)
				switch (serviceId) {
					case "0":
						uni.navigateTo({
							url: "/pages/set-up/set-up-info"
						});
						break;
					case "1":
						uni.navigateTo({
							url: "/pages/set-up/set-up-account"
						});
						break;
					case "3":
						// this.makePhone()
						this.getTell()
						break;
					case "4":
						uni.navigateTo({
							url: "/pages/login/login-reste-pwd"
						});
						break;
					case "5":
						uni.navigateTo({
							url: "/pages/set-up/set-up-access"
						});
						break;
					case "6":
						uni.navigateTo({
							url: "/pages/set-up/set-up-about"
						});
						break
				}
			},
			getTell() {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: '110119',
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				});
			}

		},
		computed: {

		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.profily,
	.profily_header {
		border-radius: 8px;
	}

	.center_menu {
		width: 100%;
		display: inline-block;

		.menu_item {
			font-size: 28upx;
			letter-spacing: 1px;
			padding: 14px 5%;
			background: #FEFEFE;
			overflow: hidden;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px solid #EFEFEF;

			&:hover {
				background: #F6F6F6 !important;
			}

			&::after {
				content: '';
				width: 30upx;
				height: 30upx;
				position: absolute;
				right: 5%;
				background: url('../../static/fumou-center-template/right.png') no-repeat;
				background-size: 100%;
			}

			text:nth-of-type(1) {
				margin-left: 10px;
			}

			image {
				width: 40upx;
				height: 40upx;
			}

			&:nth-of-type(4) {
				margin-top: 20px;
			}
		}
	}

	.center_menu:nth-child(1) {
		margin: 20upx 0;
	}

	.center_menu:nth-child(2) {
		margin: 0upx 0 20upx 0;
	}

	.center_menu:nth-child(3) {
		margin: 0upx 0 20upx 0;
	}
</style>
