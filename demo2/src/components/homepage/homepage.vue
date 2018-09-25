<template>
	<div id="homepage">
		<div class="head">
			<div class="head_left">
				<img src="../../assets/homepage/homepage_06.gif"/>
				<p>扫一扫</p>
			</div>
			<input type="text" placeholder="纸杯" @blur="search"/>
			<div class="head_right">
				<img src="../../assets/homepage/homepage_03.gif"/>
				<p>消息</p>
			</div>
		</div>
		<div class="banner">
			<swiper1></swiper1>
		</div>		
	    <ul class="nav-icon">
	    	<li v-for="item in navLconList">
	    		<div :style="{background: item.color}">
	    			<img :src="item.img"/>
	    		</div>
	    		<p>{{item.title}}</p>
	    	</li>
	    </ul>
	    <div class="customization">
	    	<h3>
	    		值定制<span>免费设计</span>
	    	</h3>
	    	<swiper2></swiper2>
	    </div>
	    <div class="goodQuality">
	    	<h2>好品质</h2>
	    	<div class="left">
	    		<h4>品牌日</h4>
	    		<p>朗亚礼品袋5折抢购</p>
	    		<img src="../../assets/homepage/homepage_42.gif"/>
	    	</div>
	    	<div class="right">
	    		<div>
	    			<h5>新欢</h5>
	    			<p>朗亚循环胶碗首发</p>
	    		</div>
	    		<div>
	    			<h5>值得买</h5>
	    			<p>餐巾纸19.9包邮</p>
	    		</div>
	    	</div>
	    </div>
	    <div class="recommend">
	    	<h2>为您推荐</h2>
	    	<ul>
	    		<li v-for="item in recommendList">
	    			<img :src="item.img" @click="proFn()"/>
	    			<h4 @click="proFn()">{{item.title}}</h4>
	    			<p><span>￥</span>{{item.price}}<b>找相似</b></p>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	
	
	import Swiper1 from './swiper1.vue';
	import Swiper2 from './swiper2.vue';
	

	let navLconList = [{
		img:"../../assets/homepage/homepage_11.gif",
		color:"#f8982d",
		title:"纸杯定制"
	},{
		img:"../../assets/homepage/homepage_13.gif",
		color:"#93f78e",
		title:"胶盒定制"
	},{
		img:"../../assets/homepage/homepage_15.gif",
		color:"#8e00fe",
		title:"出口"
	},{
		img:"../../assets/homepage/homepage_17.gif",
		color:"#ff6100",
		title:"领券"
	},{
		img:"../../assets/homepage/homepage_20.gif",
		color:"#50e7de",
		title:"送货上门"
	}]
	
	
	
	let recommendList = [{
		img:"../../assets/homepage/homepage_51.gif",
		price:"139",
		title:"胶杯专用封口膜-纸杯胶杯通口膜定做-胶杯封口膜定制"
	},{
		img:"../../assets/homepage/homepage_49.gif",
		price:"159",
		title:"雪糕铲甜品小勺子"
	},{
		img:"../../assets/homepage/homepage_51.gif",
		price:"139",
		title:"胶杯专用封口膜-纸杯胶杯通口膜定做-胶杯封口膜定制"
	},{
		img:"../../assets/homepage/homepage_49.gif",
		price:"159",
		title:"雪糕铲甜品小勺子"
	}]
	export default {
		name: 'Homepage',
		components: {
			Swiper1,
			Swiper2
		},
		data(){
			return{
				navLconList:navLconList,
				recommendList:recommendList
			}
		},
		methods:{
			search(){
				this.$router.push('/pro_categories/pro_search')
			},
			proFn(){
				this.$router.push('/pro_categories/pro_details')
			}
		}
	}
 
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import '../../css/homepage.less';
	
</style>