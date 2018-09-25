

var oneArr = [{
	title:"通用少油烟砂锅+锅铲",
	img:"img/index_49.gif",
	oldPrice:199,
	price:135
},{
	title:"新飞燃气灶煤气单灶",
	img:"img/index_50.gif",
	oldPrice:199,
	price:100
},{
	title:"电饭煲3l迷你学生小电饭锅",
	img:"img/index_51.gif",
	oldPrice:199,
	price:1350
},{
	title:"樱野原生态厨卫电器",
	img:"img/index_52.gif",
	oldPrice:199,
	price:235
},{
	title:"炒锅32cm无油烟不粘锅平底",
	img:"img/index_53.gif",
	oldPrice:199,
	price:155
},{
	title:"MB-WFS3018Q家用电饭煲",
	img:"img/index_54.gif",
	oldPrice:199,
	price:295
},{
	title:"格兰仕K1电烤箱家用",
	img:"img/index_55.gif",
	oldPrice:199,
	price:135
},{
	title:"压力锅24cm蒸格铝合金高压锅",
	img:"img/index_56.gif",
	oldPrice:199,
	price:199
}];
var ambryArr = [{
	title:"整体厨房橱柜定制...",
	img:"img/index_128.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_128.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_129.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_130.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_131.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_132.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_110.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_111.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_112.gif",
	oldPrice:199,
	price:1050
},{
	title:"整体厨房橱柜定制...",
	img:"img/index_113.gif",
	oldPrice:199,
	price:1050
}];
var brandArr = ['img/index_140.gif',
				'img/index_141.gif',
				'img/index_142.gif',
				'img/index_143.gif',
				'img/index_144.gif',
				'img/index_145.gif',
				'img/index_146.gif',
				'img/index_140.gif',
				'img/index_141.gif',
				'img/index_142.gif',
				'img/index_143.gif',
				'img/index_144.gif',
				'img/index_145.gif',
				'img/index_146.gif',];
				
				
var vm = new Vue({
	el:"#indexBox",
	data:{
		list:list,
		knife:knife,
		oneArr:oneArr,
		ambryArr:ambryArr,
		brandArr:brandArr
	},
	mounted(){
		//二级联动		
		nav()
	}
})






//banner
banner()
function banner(){
	var banner = document.getElementsByClassName('banner')[0];
	var a = banner.getElementsByTagName('a')[0];
	var imgArr = ['img/banner01.JPG', 'img/banner02.JPG', 'img/banner03.JPG'];
	var left = banner.getElementsByTagName('button')[0];
	var right = banner.getElementsByTagName('button')[1];
	var liArr = banner.getElementsByTagName('li');
	var i = 0;
	right.onclick = function(){
		clearInterval(set);
		butRight()
	}
	function butRight() {
		i++;
		if(i == imgArr.length) {
			i = 0;
		}
		go(i)
	}
	left.onclick = function() {
		i--;
		if(i < 0) {
			i = imgArr.length - 1;
		}
		go(i);
	}
	function go(n) {
		for(var j = 0; j < imgArr.length; j++) {
			a.style.background = 'url(' + imgArr[n] + ') no-repeat center';
			liArr[j].className = '';
		}
		a.style.background = 'url(' + imgArr[n] + ') no-repeat center';
		liArr[n].className = 'active';
	}
	for(var m = 0; m < liArr.length; m++) {
		clicks(m);
	}
	function clicks(k) {
		liArr[k].onclick = function() {
			go(k)
			i = k;
		}
	}
	var set = setInterval(function() {
		butRight()
	}, 4000)
	
	banner.onmouseenter = function() {
		clearInterval(set);
	}
	banner.onmouseleave = function() {
		set = setInterval(function() {
			butRight()
		}, 4000)
	}	
}

//秒杀倒计时
countdown()
function countdown(){
	var time = document.getElementById('time');
	var hour = time.getElementsByTagName('span')[0];
	var min = time.getElementsByTagName('span')[1];
	var sec = time.getElementsByTagName('span')[2];
//	console.log(hour.innerText)
	function seckill(){
		
		
		var Tdate = new Date(2018, 9, 10, 00, 00, 00); //设置成明天
		var nowDate = new Date(); //现在的每时每刻
		//  把8号的时间换成时间戳
		var tTime = Tdate.getTime();
		// 现在每时每刻的
		var nowTime = nowDate.getTime();
		var dis = parseInt((tTime - nowTime) / 1000);
		var h = parseInt(dis / (60 * 60));
		var m = parseInt((dis - h * 60 * 60) / 60);
		var s = dis - h * 60 * 60 - m * 60;
	
		hour.innerText = buling(h);
		min.innerText = buling(m);
		sec.innerText = buling(s);
		
	}
	
	seckill();
	var seckill = setInterval(seckill, 1000)

	function buling(n){
		return n>9?n:'0'+n;
	}	
}



//秒杀场次到时间切换
field()
function field(){
	var field = document.getElementById('field');
	var Oa = field.getElementsByTagName('a');
	fieldSet();
	function fieldSet(){
		var date = new Date();
		var hour = date.getHours();
		if(hour >= 0&&hour < 10){
			for(var i=0;i<Oa.length;i++){
				Oa[i].className = '';
			}
			Oa[0].className = 'active';
		}else if(hour >= 10&&hour < 12){
			for(var i=0;i<Oa.length;i++){
				Oa[i].className = '';
			}
			Oa[1].className = 'active';
		}else if(hour >= 12&&hour < 17){
			for(var i=0;i<Oa.length;i++){
				Oa[i].className = '';
			}
			Oa[2].className = 'active';
		}else if(hour >= 17&&hour < 22){
			for(var i=0;i<Oa.length;i++){
				Oa[i].className = '';
			}
			Oa[3].className = 'active';
		}
		else if(hour >= 22&&hour < 24){
			for(var i=0;i<Oa.length;i++){
				Oa[i].className = '';
			}
			Oa[4].className = 'active';
		}
	}
	var timer = setInterval(fieldSet, 1000);	
}





//秒杀商品数据
setSeckill();
function setSeckill(){
	var list = [{
		id:01,
		title:"通用少油烟砂锅+锅铲",
		price:135.00,
		percent:"99",
		imgsrc:"img/index_22.gif"
	},{
		id:02,
		title:"压力锅24cm蒸格铝合金高压锅",
		price:123.00,
		percent:"50",
		imgsrc:"img/index_24.gif"
	},{
		id:03,
		title:"电磁炉灶特价包邮超薄触屏一级",
		price:99.00,
		percent:"78",
		imgsrc:"img/index_26.gif"
	},{
		id:04,
		title:"100智能 电压力锅双胆正品 5L",
		price:199.00,
		percent:"88",
		imgsrc:"img/index_28.gif"
	},{
		id:05,
		title:"九阳 DJ13B-D600SG豆浆机",
		price:299.00,
		percent:"42",
		imgsrc:"img/index_30.gif"
	},{
		id:06,
		title:"象印保温壶家用暖壶1.5/1.9L",
		price:299.00,
		percent:"78",
		imgsrc:"img/index_37.gif"
	},{
		id:07,
		title:"顺祥陶瓷餐具杯碗盘40头礼品套装",
		price:498.00,
		percent:"88",
		imgsrc:"img/index_39.gif"
	},{
		id:08,
		title:"德国WOLL不粘锅蓝宝石30CM炒锅",
		price:2195.00,
		percent:"99",
		imgsrc:"img/index_41.gif"
	},{
		id:09,
		title:"德国福腾宝不锈钢儿童卡通餐具",
		price:259.00,
		percent:"42",
		imgsrc:"img/index_43.gif"
	},{
		id:10,
		title:"德国福腾宝不锈钢儿童卡通餐具",
		price:3123.00,
		percent:"50",
		imgsrc:"img/index_45.gif"
	}];
	var seckill = document.getElementById('seckill');
	var str = '';
	for(var i=0;i<list.length;i++){
		str += '<li>'+
					'<a href="pro_details.html"><img src="'+list[i].imgsrc+'" /></a>'+
					'<div class="prograssBar">'+
						'<div class="percent" style="width:'+list[i].percent+'%;"></div>'+
						'<p>已秒杀'+list[i].percent+'%</p>'+
					'</div>'+
					'<h5><a href="pro_details.html">'+list[i].title+'</a></h5>'+
					'<p>秒杀价：<b>¥ '+list[i].price+'</b></p>'+
				'</li>'
	}
	seckill.innerHTML = str;
}

//关注or已关注
follow()
function follow(){
	var follow = document.getElementsByClassName('follow');
	for(var i=0;i<follow.length;i++){
		var b = follow[i].getElementsByTagName('b')[0];
		var onoff = false;
		b.onclick = function(){
			onoff = !onoff;
			if(onoff){
				this.innerHTML = "已关注";
				this.style.background = "url(img/index_158.png) no-repeat left center"
			}else{
				this.innerHTML = "关注";
				this.style.background = "url(img/index_157.gif) no-repeat left center"
			}
		}
	}

}

//点击左右箭头可切换轮播品牌商标
brand()
function brand(){
	var brand = document.getElementsByClassName('brand')[0];
	var ul = brand.getElementsByTagName('ul')[0];
	var btnl = brand.getElementsByTagName('button')[0];
	var btnr = brand.getElementsByTagName('button')[1];
	var ula = document.createElement("ul")
	ula.innerHTML = ul.innerHTML;
	ula.style.left = '1090px';
	document.getElementsByClassName("box")[0].appendChild(ula);
	var i = 0;
	var ia = 1090;
	btnr.onclick = function(){
		i-=155.7;
		if (i<-1090) {
			i = 934.3;
		}
		ia-=155.7;
		if (ia<-1090) {
			ia = 934.3;
		}
		ul.style.left = i+'px';
		ula.style.left =ia+'px';
	}
	btnl.onclick = function(){
		if(i<0||ia<0){
			i+=155.7;
			if (i<-1090) {
				i = 1090;
			}
			ia+=155.7;
			if (ia<-1090) {
				ia = 1090;
			}
			ul.style.left = i+'px';
			ula.style.left =ia+'px';
		}
	}
}


//爆款推荐中的banner
smailbanner()
function smailbanner(){
	var smailBanner = document.getElementsByClassName('smailBanner')[0];
	var img = smailBanner.getElementsByTagName('img')[0];
	var liArr = smailBanner.getElementsByTagName('li');
	var imgArr = ['img/index_126.gif', 'img/index_126_1.gif', 'img/index_126_2.gif'];
	var i = 0;
	function butRight() {
		i++;
		if(i == imgArr.length) {
			i = 0;
		}
		go(i)
	}
	function go(n) {
		for(var j = 0; j < imgArr.length; j++) {
			img.src = imgArr[n];
			liArr[j].className = '';
		}
		img.src = imgArr[n];
		liArr[n].className = 'active';
	}
	for(var m = 0; m < liArr.length; m++) {
		clicks(m);
	}
	function clicks(k) {
		liArr[k].onclick = function() {
			go(k)
		}
	}
	var set = setInterval(function() {
		butRight()
	}, 4000)
	
	smailBanner.onmouseenter = function() {
		clearInterval(set);
	}
	smailBanner.onmouseleave = function() {
		set = setInterval(function() {
			butRight()
		}, 4000)
	}	
}


//滚动条事件1
gundong()
function gundong(){
	var leftsideBar = document.getElementsByClassName('leftsideBar')[0];
	var rightsideBar = document.getElementsByClassName('rightsideBar')[0];
	var Oa = leftsideBar.getElementsByTagName('a');
	if(window.scrollY<840){
		leftsideBar.style.display = 'none';
		rightsideBar.style.display = 'none';
	}
	window.onscroll = function(ev){
		if(window.scrollY<1000){
			leftsideBar.style.display = 'none';
			rightsideBar.style.display = 'none';
		}else{
			leftsideBar.style.display = 'block';
			rightsideBar.style.display = 'block';
			if(window.scrollY>1900&&window.scrollY<2700){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[1].className = 'active'
			}else if(window.scrollY>2700&&window.scrollY<3500){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[2].className = 'active'
			}else if(window.scrollY>3500&&window.scrollY<4300){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[3].className = 'active'
			}else if(window.scrollY>4300&&window.scrollY<5000){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[4].className = 'active'
			}else if(window.scrollY>5000&&window.scrollY<5600){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[5].className = 'active'
			}else if(window.scrollY>5600&&window.scrollY<6200){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[6].className = 'active'
			}else if(window.scrollY>6200){
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[7].className = 'active'
			}else{
				for(var i=0;i<Oa.length;i++){
					Oa[i].className = ''
				}
				Oa[0].className = 'active'
			}
		}
//		console.log(window.scrollY)
	}
}