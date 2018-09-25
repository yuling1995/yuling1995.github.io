<template>
	<div id="pro-categories">
		<div class="head">
			<span class="head_left" @click="backFn">
				<img src="../../assets/pro-gategories/pro_categories_03.gif"/>
			</span>
			<input type="text" placeholder="纸杯" />
			<span class="head_right" @click="search">
				搜索
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Homepage',
		components: {
			
		},
		methods:{
			search(){
				this.$router.push('/pro_categories/pro_search')
			},
			proFn(){
				this.$router.push('/pro_categories/pro_details')
			},
			backFn(){
				this.$router.back()
			}
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import '../../css/pro-categories.less';
	
</style>