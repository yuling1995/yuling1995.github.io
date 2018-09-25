


var hotArr = [{
	title:"电饭煲3l迷你学生...",
	img:"img/shop_list_02.gif",
	oldPrice:199,
	price:100
},{
	title:"樱野原生态厨卫电器",
	img:"img/shop_list_03.gif",
	oldPrice:199,
	price:1350
},{
	title:"MB-WFS3018Q家用...",
	img:"img/shop_list_04.gif",
	oldPrice:199,
	price:155
},{
	title:"格兰仕K1电烤箱家用",
	img:"img/shop_list_05.gif",
	oldPrice:199,
	price:295
}]

var likeArr = [{
	title:"锅具套装7件套精铁炒锅不锈钢汤锅砧板勺铲菜...",
	img:"img/shop_list_14.gif",
	price:118.00
},{
	title:"锅具套装7件套精铁炒锅不锈钢汤锅砧板勺铲菜...",
	img:"img/shop_list_15.gif",
	price:128.00
},{
	title:"锅具套装7件套精铁炒锅不锈钢汤锅砧板勺铲菜...",
	img:"img/shop_list_16.gif",
	price:138.00
},{
	title:"锅具套装7件套精铁炒锅不锈钢汤锅砧板勺铲菜...",
	img:"img/shop_list_17.gif",
	price:148.00
}]

var brandArr = ['img/shop_list_07.gif',
				'img/shop_list_08.gif',
				'img/shop_list_09.gif',
				'img/shop_list_10.gif',
				'img/shop_list_11.gif',
				'img/shop_list_07.gif',
				'img/shop_list_08.gif',
				'img/shop_list_09.gif',
				'img/shop_list_10.gif'];

var correlationArr = ['烹饪锅具','多用途锅','电炖锅/电炖盅','电饼铛/烤饼机','电饭煲']

var potArr = ['炒锅','煎锅','汤锅','煎锅','压力锅','蒸锅','套锅','炖锅','奶锅','油炸锅','火锅','其它','套锅','炖锅','奶锅','油炸锅','火锅']

var preiceArr = ['0-100','100-300','300-500','500-700','700-900','900以上'];

var stoveArr = ['通用','煤气灶','电磁炉','燃气灶','电磁炉,天燃气']
var otherArr = [{
	otherTitle:'产品材质',
	others:['产品','材质'],
	onoff:false
},{
	otherTitle:'产品材质',
	others:['产品','材质'],
	onoff:false
},{
	otherTitle:'是否有盖',
	others:['有盖','无盖'],
	onoff:false
},{
	otherTitle:'是否无烟',
	others:['有烟','无烟'],
	onoff:false
},{
	otherTitle:'全部分类',
	others:['分类1','分类2'],
	onoff:false
}]





var vm = new Vue({
	el:"#shopList",
	data:{
		list:list,
		knife:knife,
		hotArr:hotArr,
		brandArr,
		correlationArr,
		potArr,
		preiceArr,
		stoveArr,
		otherArr,
		likeArr,
		goodsList
	},
	created(){
//		this.goodsListBox = this.goodsList
	},
	mounted(){//页面插入后触发
		//二级联动
		nav();
		//热门推荐自动轮播
		hot();
		//猜你喜欢轮播
		like();
	},
	methods:{
		brandFn(items){
			//品牌
			if(items == "img/shop_list_07.gif"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.brand == '苏泊尔'
				})
			}else if(items == "img/shop_list_08.gif"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.brand == '爱仕达'
				})
			}else if(items == "img/shop_list_09.gif"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.brand == '小熊'
				})
			}else if(items == "img/shop_list_10.gif"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.brand == '海尔'
				})
			}else if(items == "img/shop_list_11.gif"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.brand == 'wf'
				})
			}	
		},
		correlationFn(item){
			//相关分类
			this.goodsList = this.goodsList.filter(function(items){
				return items.correlation == item
			})
		},
		potFn(item){
			//锅具类型
			this.goodsList = this.goodsList.filter(function(items){
				return items.pot == item
			})
		},
		priceFn(items){
			//价格
			if(items == "0-100"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=0&&item.price<100
				})
			}else if(items == "100-300"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=100&&item.price<300
				})
			}else if(items == "300-500"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=300&&item.price<500
				})
			}else if(items == "500-700"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=500&&item.price<700
				})
			}else if(items == "700-900"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=700&&item.price<900
				})
			}else if(items == "900以上"){
				this.goodsList = this.goodsList.filter(function(item){
					return item.price>=900
				})
			}
		},
		stoveFn(item){
			//适合炉灶
			this.goodsList = this.goodsList.filter(function(items){
				return items.stove == item
			})
		},
		otherFn(item){
			for(var i=0;i<this.otherArr.length;i++){
				this.otherArr[i].onoff = false;
			}
			item.onoff = true;
		}
		
	}
})


//猜你喜欢轮播
function like(){
	var like = document.getElementsByClassName('like')[0];
	var ul = like.getElementsByTagName('ul')[0];
	var btnT = like.getElementsByTagName('button')[0];
	var btnB = like.getElementsByTagName('button')[1];
	var ula = document.createElement("ul");
	ula.innerHTML = ul.innerHTML;
	ula.style.top = '1116px';
	like.getElementsByClassName("box")[0].appendChild(ula);
	var i = 0;
	var ia = 1120;
	btnB.onclick = function(){
		i-=280;
		if (i<-1120) {
			i = 840;
		}
		ia-=280;
		if (ia<-1120) {
			ia = 840;
		}
		ul.style.top = i+'px';
		ula.style.top =ia+'px';
	}
	btnT.onclick = function(){
		if(i<0||ia<0){
			i+=280;
			if (i<-1120) {
				i = 840;
			}
			ia+=280;
			if (ia<-1120) {
				ia = 840;
			}
			ul.style.top = i+'px';
			ula.style.top =ia+'px';
		}
	}
}