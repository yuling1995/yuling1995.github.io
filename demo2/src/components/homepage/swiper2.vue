<template>
	<swiper :options="swiperOption">
	    <swiper-slide v-for="item in customizationList">
	    	<img :src="item.img" @click="proFn()"/>
	    	<p>￥{{item.price}}</p>
	    	<del>￥{{item.oldPrice}}</del>
	    	<span class="hotSale" v-show="item.hotSale">热卖</span>
	    	<span class="goodValue" v-show="item.goodValue">值得买</span>
	    </swiper-slide>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import 'swiper/dist/css/swiper.css';
	let customizationList = [{
		img:"../../assets/homepage/homepage_28.gif",
		price:"139",
		oldPrice:"229",
		hotSale:true,
		goodValue:false
	},{
		img:"../../assets/homepage/homepage_30.gif",
		price:"169",
		oldPrice:"299",
		hotSale:false,
		goodValue:true
	},{
		img:"../../assets/homepage/homepage_33.gif",
		price:"139",
		oldPrice:"229",
		hotSale:false,
		goodValue:false
	},{
		img:"../../assets/homepage/homepage_28.gif",
		price:"139",
		oldPrice:"229",
		hotSale:true,
		goodValue:false
	},{
		img:"../../assets/homepage/homepage_30.gif",
		price:"169",
		oldPrice:"299",
		hotSale:false,
		goodValue:true
	},{
		img:"../../assets/homepage/homepage_33.gif",
		price:"139",
		oldPrice:"229",
		hotSale:false,
		goodValue:false
	}]
	export default {
		components: {
			swiper, 
			swiperSlide,
		},
		data(){
			return{
				customizationList:customizationList,
				swiperOption:{
					slidesPerView: 3,
			        spaceBetween: 30,
			        pagination: {
			            el: '.swiper-pagination',
			            clickable: true
			        }
				}
				
			}
		},
		methods:{
			proFn(){
				this.$router.push('/pro_categories/pro_details')
			}
		}
	}
</script>

<style>
</style>