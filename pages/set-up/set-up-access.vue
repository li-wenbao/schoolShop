<template>
	<view class="width100">
		<view class="cu-bar margin-top bg-white">
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">新消息通知</view>
					<switch :checked="isPushOn" @change="pushChange" />
				</view>
			</view>
			<!-- <view class="action">
				<text class="">新消息通知</text>
			</view>
			<view class="action">
				<switch @change="SetInfo" :class="info?'checked':''" color="#0099FF"></switch>
			</view> -->
		</view>
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="">播放提示音</text>
			</view>
			<view class="action">
				<switch @change="SetPlayers" :class="plays?'checked':''" color="#0099FF"></switch>
			</view>
		</view>
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="">震动</text>
			</view>
			<view class="action">
				<switch @change="SetMove" :class="move?'checked':''" color="#0099FF"></switch>
			</view>
		</view>
	</view>
</template>
<script>
	// #ifdef APP-PLUS
	import push from "@/common/dc-push/push.js"
	// #endif
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				info: false,
				plays: false,
				move: false,
				isPushOn: true,
				bordersize: ''
			};
		},
		onLoad() {
			this.updatePush();
		},
		methods: {

			// 信息推送
			pushChange(e) {
				this.isPushOn = e.detail.value;
				if (this.isPushOn) {
					// #ifdef APP-PLUS
					push.on();
					// #endif
				} else {
					// #ifdef APP-PLUS
					push.off();
					// #endif
				}
				this.title = this.isPushOn ? '已开启' : '已关闭';
			},
			updatePush() {
				// #ifdef APP-PLUS
				this.isPushOn = push.isOn();
				// #endif
				this.title = this.isPushOn ? '已开启' : '已关闭';
			},

			// 新消息提醒
			SetInfo(e) {
				console.log("新消息提醒", e.detail.value)
				this.info = e.detail.value
				console.log("新消息提醒+", this.info)
			},
			// 播放提示音
			SetPlayers(e) {
				console.log("播放提示音", e.detail.value)
				this.plays = e.detail.value
				console.log("播放提示音+", this.plays)

			},
			// 开启震动
			SetMove(e) {
				console.log("开启震动", e.detail.value)
				this.move = e.detail.value
				console.log("开启震动+", this.move)
			},
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		},
		computed: {
			getSysInfo() {
				var main = plus.android.runtimeMainActivity();
				var pkName = main.getPackageName();
				var NotificationManagerCompat = plus.android.importClass("android.support.v4.app.NotificationManagerCompat");
				var packageNames = NotificationManagerCompat.from(main);
				console.log(JSON.stringify(packageNames));
				if (packageNames.areNotificationsEnabled()) {
					console.log('已开启通知权限');
				} else {
					uni.showModal({
						title: '提示',
						content: '请先打开APP通知权限',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								var Intent = plus.android.importClass('android.content.Intent');
								var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS'); //可设置表中所有Action字段  
								intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
								main.startActivity(intent);
							}
						}
					});
				}
			}
		}
	}
</script>

<style>
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-pd {
		padding: 22upx 30upx;
	}

	.uni-list-cell-db {
		flex: 1;
	}
</style>
