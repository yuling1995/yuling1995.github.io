<template>
	<swiper :aspect-ratio="320/720" dots-position="center" loop auto>
	    <swiper-item class="swiper-demo-img">
	      	<img src="../../assets/homepage/banner_01.gif">
	    </swiper-item>
	    <swiper-item class="swiper-demo-img">
	      	<img src="../../assets/homepage/banner_02.jpg">
	    </swiper-item>
	    <swiper-item class="swiper-demo-img">
	      	<img src="../../assets/homepage/banner_03.jpg">
	    </swiper-item>
    </swiper>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux';
	export default {
		components: {
			Swiper, 
			SwiperItem
		}
	}
</script>

<style lang="less">
	.vux-slider>.vux-indicator>a>.vux-icon-dot,.vux-slider .vux-indicator-right>a>.vux-icon-dot {
        width: 16px!important;
        height: 16px!important;
        border-radius: 50%!important;
        margin: 0 5px!important;
    }
    .vux-slider > 
    .vux-indicator > a > 
    .vux-icon-dot.active, 
    .vux-slider 
    .vux-indicator-right > a > 
    .vux-icon-dot.active{
        background: #1AA5CA!important;
    }
</style>