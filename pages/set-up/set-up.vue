<template>
	<view class="center">
		<view class="center_box_bg">
			<view class="center_menu" v-for="(item,index) in menus" :key="index">
				<view class="menu_item" :data-id="item.id" @tap="setList">
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
				// mIndex: 0,
				menus: [{
						name: '我的账户',
						icon: '../../static/fumou-center-template/5.png',
						id: 1,
					},
					// {
					// 	name: '我的评价',
					// 	icon: '../../static/fumou-center-template/6.png',
					// 	key: 2,
					// },
					{
						name: '我的客服',
						icon: '../../static/fumou-center-template/7.png',
						id: 3,
					},
					{
						name: '修改密码',
						icon: '../../static/fumou-center-template/8.png',
						id: 4,
					},
					{
						name: '手机权限设置',
						icon: '../../static/fumou-center-template/9.png',
						id: 5,
					},
					{
						name: '关于我们',
						icon: '../../static/fumou-center-template/10.png',
						id: 6,
					}
				]
			};
		},
		onLoad() {

		},

		methods: {
			setList(e) {
				// let serviceId = e.currentTarget.dataset.id
				let serviceId = e.currentTarget.dataset.id
				console.log("serviceId:", serviceId)
				switch (serviceId) {
					case 1:
						uni.navigateTo({
							url: "/pages/set-up/set-up-account"
						});
						break;
					case 4:
						uni.navigateTo({
							url: "/pages/set-up/set-up-chaPassword"
						});
						break;
					case 5:
						uni.navigateTo({
							url: "/pages/set-up/set-up-access"
						});
						break;
					case 6:
						uni.navigateTo({
							url: "/pages/set-up/set-up-about"
						});
						break
				}
			},
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

	.center {
		height: 100%;

		&_top {
			height: 18%;
			background: url('../../static/fumou-center-template/header.jpg') no-repeat 0% 50%;
			background-size: cover;

			.mask {
				background: rgba(0, 0, 0, .4);
				height: 100%;
			}
		}

		&_box_bg {
			background: #F9F9F9;
			position: relative;

			.profily {
				position: absolute;
				width: 90%;
				margin: 0 auto;
				top: -100upx;
				left: 5%;
				background: #FEFEFE;
				padding: 35upx;
				box-sizing: border-box;
				box-shadow: 0px 2px 5px #EDEDED;
			}
		}
	}

	.base {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #F6F6F6;
		padding-bottom: 35upx;
		position: relative;

		.profily_header {
			height: 120upx;
			width: 120upx;
			background-image: url('../../static/fumou-center-template/header.jpg');
			background-size: 100%;
		}

		text {
			margin-left: 20px;
			font-size: 30upx;
		}

		image {
			position: absolute;
			height: 40upx;
			width: 40upx;
			right: 0px;
			top: 0px;
		}
	}

	.order_status {
		display: flex;
		justify-content: space-between;
		margin-top: 35upx;

		.status {
			width: 140upx;
			font-size: 24upx;
			text-align: center;
			letter-spacing: .5px;
			display: flex;
			flex-direction: column;

			.icon {
				width: 50upx;
				height: 50upx;
				margin: 0 auto;
				margin-bottom: 5px;

			}
		}
	}

	.baiban {
		background: #FEFEFE;
		height: 300upx;
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

			&:nth-of-type(1) {
				margin-top: 20px;
			}

			&:nth-of-type(4) {
				margin-top: 20px;
			}
		}
	}
</style>
