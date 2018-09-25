<template>
	<div id="app">
		<router-view></router-view>
		<ul class="nav">
			<router-link to="/homepage" tag="li">
				<i class="iconfont icon-shouye"></i>
				<span>首页</span>
			</router-link>
			<router-link to="/pro_categories" tag="li">
				<i class="iconfont icon-icon04"></i>
				<span>分类</span>
			</router-link>
			<router-link to="/shop_cart" tag="li">
				<i class="iconfont icon-gouwuchekong"></i>
				<span>购物车</span>
			</router-link>
			<router-link to="/user" tag="li">
				<i class="iconfont icon-wode"></i>
				<span>我的</span>
			</router-link>
		</ul>
	

	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {
			
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	*{
		font-size: 26px;
	}
	.nav{
		width: 100%;
		height: 98px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #eeeeee;
		li{
			float:left;
			width: 90px;
			height: 100%;
			margin-left: 120px;
			text-align: center;
			list-style: none;
			i{
				display: block;
				font-size: 45px;
				width: 100%;
				height: 45px;
			}
			span{
				line-height: 60px;
			}
		}
		li:nth-of-type(1){
			margin-left: 0;
		}
		li.router-link-active{
			color: #f23030;
		}
	}
</style>