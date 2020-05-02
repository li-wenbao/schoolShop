<template>
	<view class="">
		

		<scroll-view class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub cu-item-text" :class="index == TabCur ? 'text-orange cur' : ''" v-for="(item, index) in navList" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.text }}
				</view>
			</view>
		</scroll-view>

		<!-- 显示区域 -->
		<view class="list" v-for="(item1, index) in orderList" :key="index" v-if="TabCur === index">
			<view class="order-item">	
						<view class="order-item-item">
				<view class="order-name">
			<view class="order-name-name">				
			<text>{{item1.product_image}}</text>
			
			</view>
			<view class="text-name">{{ item1.text_name }}</view>
			<view class="order-name-name-name">
			
			<view class="about-time">{{ item1.about_time }}</view>
			</view>
			</view>
			
			<view class="order-get" v-for="(itemget, index) in orderListget" :key="index" v-if="TabCur === index">
				<view class="order-get-kilometre">
					<view class="order-get-kilometres">
						{{itemget.kilometres}}
					</view>
					
				</view>
				
			
				<view class="order-get-kilometre1">
					<view class="order-get-kilometres">
						{{itemget.kilometres1}}
					</view>
					
				</view>
				
				<view class="order-get-kilometre2">
					<view class="order-get-kilometres">
						{{itemget.kilometres2}}
					</view>
					
				</view>
			</view>
			
			
			
		
			
			
			</view>
			</view>
		</view>
		<!-- 显示区域结束 -->
		<scroll-view class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub cu-item-text" :class="index == TabCur1 ? 'text-orange cur' : ''" v-for="(item1, index) in navList1" :key="index" @tap="tabSelect1" :data-id="index">
					{{ item1.text }}
				</view>
			</view>
		</scroll-view>
		<!-- 显示区域
		<view class="list" v-for="(item11, index) in orderList1" :key="index" v-if="TabCur1 === index">
			<view class="order-item">	
						<view class="order-item-item">
				<view class="order-name">
			<view class="order-name-name">				
			<image :src="item11.product_image" class="product-image"></image>
			<view class="text-name">{{ item11.text_name }}</view>
			</view>
			<view class="order-name-name-name">
			<image src="../../static/clock.png" mode="" class="clock"></image>
			<view class="about-time">{{ item11.about_time }}</view>
			</view>
			</view>
			
			<view class="order-get" v-for="(itemget1, index) in orderListget1" :key="index" v-if="TabCur1 === index">
				<view class="cu-avatar xl round margin-left bg-red order-get-get">取</view>
				<view class="order-get-underline"></view>
				<view class="order-get-kilometre">
					<view class="order-get-kilometres">
						{{itemget1.kilometres}}km
					</view>
					<view class="order-get-position">
						{{itemget1.position}}
					</view>
				</view>
				<view class="order-phone">
					<image src="../../static/clock.png" mode="" class="order-clock"></image>
				</view>
				<view class="order-position">
					<image src="../../static/clock.png" mode="" class="order-clock-position"></image>
				</view>
			</view>
			
			
			
		
			
			
			</view>
			</view>
		</view> -->
		<!-- 显示区域结束 -->
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			TabCur1: 0,
			scrollLeft1: 0,
			navList: [
				{
					text: '2020-1-1'
				},
				{
					text: '月统计'
				},
				
				
			],
			navList1: [
				{
					text: '已完成'
				},
				{
					text: '已取消'
				},
				{
					text: '已超时'
				},
				
			],
			orderList: [
				{
					text_name: '取消单量',
					product_image:'完成单量',
					about_time:'准时率'
				},
				{
					text_name: '取消单量',
					product_image:'完成单量',
					about_time:'准时率'
				},
				{
					text_name: '取消单量',
					product_image:'完成单量',
					about_time:'准时率'
				}
			],
			orderList1: [
				{
					text_name: 'ada',
					product_image:'../../static/product_image.jpg',
					about_time:50
				},
				{
					text_name: 'add',
					product_image:'../../static/product_image.jpg',
					about_time:40
				},
				{
					text_name: '藤谷拉面',
					product_image:'../../static/product_image.jpg',
					about_time:30
				}
			],
			orderListget: [				{
										kilometres: 1.1,
					kilometres1: 0,
					kilometres2: '100%'								},
				{
					
				kilometres: 1.2,
				kilometres1: 11,
				kilometres2: '70%'
					
				},
							],
			orderListget1: [
				{
					
					kilometres: 1.1,
					position: '昆明理工大学',
					users:'王同学'
				},
				{
					
					kilometres: 1.2,
					position: '昆明理工大学',
					users:'李同学'
				},
				{
					
					kilometres: 1.3,
					position: '昆明理工大学',
					users:'张同学'
				}
			],
			
		};
	},
	onLoad(options) {
		// 页面显示是默认选中第一个
		this.TabCur = 0;
		this.TabCur1 = 0;
	},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		tabSelect1(e) {
			this.TabCur1 = e.currentTarget.dataset.id;
			this.scrollLeft1 = (e.currentTarget.dataset.id - 1) * 60;
		}
		
	},
	
	
		
	
};
</script>
<style>
	.cu-item-text{
		font-size: 28upx;
	}
	.order-item{
		width: auto;
		height:350upx;
		background-color: #FFFFFF;
		    margin-top: 40upx;
			border: #CCCCCC 2upx solid;
			border-radius: 16upx;
			margin-right: 20upx;
			margin-left: 20upx;
			 background-color: #007AFF;
			
	}
	.order-item-item{
		width: 1500upx;
		height: 250upx;
		
		   
	}
	.order-name{
		align-items: center;
		display: flex;
		width:1270upx;
		height: 172upx;
		
		
	}
	.order-get{
		align-items: center;
		display: flex;
		width: 690upx;
		    height: 200upx;
		    background-color: #007AFF;
			margin-left: 12upx;
			border-top-color: #CCCCCC 1px solid; 
		}
		.order-push{
			align-items: center;
			display: flex;
			width: 690upx;
			    height: 200upx;
			    background-color: #39B54A;
				margin-left: 12upx;
				border-top-color: #CCCCCC 1px solid; 
			}
	.order-name-name{
		
		height: 130upx;
		margin-left:30upx;
		align-items: center;
		display: flex;
		color: #FFFFFF;
	}
	.product-image{
		width: 120upx;
		height: 120upx;
		
	}
	
	.text-name{
		
		height: 60upx;
		
		color: #FFFFFF;
		margin-left: 175upx;
		margin-top: 23upx;

		}
	.clock{
		width: 70upx;
		height: 70upx;
		
		
		
		
	}
	.order-clock{
		width: 70upx;
		height: 70upx;
		
		
		
		
	}
	.users-clock{
			width: 50upx;
			height: 50upx;
			
			
			
			
		}
	.order-clock-position{
		width: 70upx;
		height: 70upx;
		
		
		
		
	}
	.about-time{
		width: 130upx;
		height: 50upx;
	margin-top: 5upx;
		margin-left: 10upx;
		
		
	}
	.order-name-name-name{
		align-items: center;
		display: flex;
		width: 340upx;
		height: 90upx;
		margin-left: 140upx;
		color: #FFFFFF;
	}
	.order-get-underline{
		width: 2upx;
		height: 128upx;
		background-color: #39B54A;
		border-left-width: 2upx solid #cccccc;
		margin-left: 30upx;
	}
	.order-get-get{
		margin-left: 20upx;
	}
	.order-get-kilometre{
		width: 360upx;
		height: 128upx;
	color: #FFFFFF;
		margin-left: 37upx;
	}
	.order-get-kilometre1{
		width: 360upx;
		height: 128upx;
	color: #FFFFFF;
		margin-left: 161upx;
	}
	.order-get-kilometre2{
		width: 360upx;
		height: 128upx;
	color: #FFFFFF;
		margin-left: 83upx;
	}
	.order-account{
		align-items: center;
		
		width: 690upx;
		    height: 200upx;
		    background-color: #DD514C;
			margin-left: 12upx;
			border-top-color: #CCCCCC 1px solid; 
		}
		.view-details{
			width: 150upx;
			height: 80upx;
			float: left;
			

		}
		.view-detailsd{
			width: 150upx;
			height: 80upx;
			float: left;
			margin-left:250upx;
		
		}
		.grab-sheet{
			width: 150upx;
			height: 80upx;
			float: right;
		}
		.grab-sheetd{
			width: 150upx;
			height: 80upx;
			float: right;
		}
		.users-text{
			position: relative;
			top: -15upx;
			left: 15upx;

		}
		.view-arrived{
			width: 150upx;
			height: 80upx;
			float: right;
		}
		.view-arrive{
			float: left;
			width: 150upx;
			height: 80upx;
			
		}
		.view-change{
			width: 150upx;
			height: 80upx;
			float: left;
			
		}
		.view-changed{
			width: 150upx;
			height: 80upx;
			float: right;
			
		}
</style>
