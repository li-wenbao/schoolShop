<template>
	<view class="page">
		<view class="bg-cyan margin-sm padding-sm radius  radius20">
			<view class="flex border-bottom">
				<view class="flex flex-sub">
					<view class="padding-sm">
						<view class="cu-avatar xl round bg-blue">
							<text class="text-xl">取</text>
						</view>
					</view>
					<view class="flex-twice padding-sm">
						<view class="padding-left-sm border-left">
							<view class="text-blue margin-top-xs">
								<text class="text-sm">{{item.kilometres}}km</text>
							</view>
							<view class="text-black">
								<text class="text-sm">{{item.position}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="flex align-center padding-sm">
					<view class="icon-box bg-blue text-center" @click="_tel">
						<text class="cuIcon-phone"></text>
					</view>
					<navigator class="icon-box bg-black text-center margin-left-xs" url="../map/map">
						<text class="cuIcon-locationfill"></text>
					</navigator>
				</view>
			</view>
			<view class="flex border-bottom">
				<view class="flex flex-sub">
					<view class="padding-sm">
						<view class="cu-avatar xl round bg-orange">
							<text class="text-xl">送</text>
						</view>
					</view>
					<view class="flex-twice padding-sm">
						<view class="padding-left-sm border-left">
							<view class="order-get-users">
								<text class="cuIcon-people"></text>
								<text class="users-text text-xs">{{item.userss}}</text>
							</view>
							<view class="text-blue">
								<text class="text-sm">{{item.kilometress}}km</text>
							</view>
							<view class="text-black">
								<text class="text-sm">{{item.positions}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="flex align-center padding-sm">
					<view class="icon-box bg-blue text-center" @click="_tel">
						<text class="cuIcon-phone"></text>
					</view>
					<navigator class="icon-box bg-black text-center margin-left-xs" url="../map/map">
						<text class="cuIcon-locationfill"></text>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style>
</style>
