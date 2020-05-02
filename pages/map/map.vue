<template>
	<view>
		    <map style="width: 100vw; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline" >
		    </map>
	</view>
</template>

<script>
	
	 import js_sdk  from '../../js_sdk/lyn4ever-gaode.js';
	
	export default {
		data() {
			return {
				longitude: 102.75205,
				          latitude: 25.11624,
				          markers: [],
				          polyline: [],
			}
		},
		methods: {
			
			
			
		}
	}
</script>

<style>

</style>
