<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="content">
			<view class="smsCodeLogin_11">
				<image v-on:click="smsCodeLogin_12_12_click()"  src="/static/smsCodeLogin/images/smsCodeLogin_12_12.jpg" mode="scaleToFill" border="0"    class="smsCodeLogin_12"></image>
				<text decode="true" class="smsCodeLogin_13">帮助</text>
			</view>
			<view class="smsCodeLogin_22">
				<text decode="true" class="smsCodeLogin_14">请输入验证码</text>
				<view class="smsCodeLogin_15">
					<text decode="true" class="smsCodeLogin_16">验证码已通过短信发送至+86</text>
					<text decode="true" class="smsCodeLogin_17">13982056253</text>
				</view>
				<view class="smsCodeLogin_18">
					<input placeholder="请输入验证码" :value="code" @input="code_input" class="code" />
		
					<text decode="true" class="dsj">56</text>
				</view>
				<button v-on:click="btLogin_21_click()" class="btLogin">登录
				</button>
			</view>
		

		<view class="loading">{{loadingText}}</view>
		<view class="ymBbottom"></view>
	</view>
</template>

<script>
import smsCodeLogin from "./smsCodeLogin.js";
export default smsCodeLogin;
</script>

<style lang="scss" scoped>
   @import './smsCodeLogin.scss'
</style>