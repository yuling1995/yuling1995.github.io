var vm = new Vue({
	el:"#pro",
	data:{
		list:list,
		knife:knife,
		likeArr:likeArr,
		num:1,
		hash:'',
		onoff:true
	},
	created(){
		window.location.hash = 'details'
	},
	mounted(){
		//二级联动
		nav();
		//猜你喜欢轮播
		like();
		like2();
		//滚动条事件2
		gundong2();
	},
	methods:{
		reduce(){
			if(this.num>0){
				this.num--
			}
		},
		add(){
			this.num++
		},
		
	},
	watch:{
		hash:{
			handler(val,val2){
				if(this.hash == "details"){
					this.onoff = true
				}else if(this.hash == "comments"){
					this.onoff = false
				}
			}
		}
	}
})
window.onhashchange =function(){
	vm.hash = window.location.hash.substring(1);
}

//放大镜
magnifier()
function magnifier(){
	var goodsImg = $('.goodsImg');
	var img = $('.goodsImg img');
	var goodsImgs = $('.goodsImgs');
	var lis = $('.goodsImgs li');
	var magnifierDiv = $('.magnifierDiv');
	var maskDiv = $('.maskDiv');
	var newDiv = $('.newDiv');
	var newImg = $('.newDiv img')
	
	lis.on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
//		img.attr('src') = $(this).children().attr('src');
//		newImg.attr('src') = $(this).children().attr('src');
//		console.log(img.attr('src'))
	})
	
	goodsImg.mouseenter(function(){
		newDiv.show();
		maskDiv.show();
		magnifierDiv.hide();
	})
	goodsImg.mouseleave(function(){
		newDiv.hide();
		maskDiv.hide();
		magnifierDiv.show();
	})
	goodsImg.mousemove(function(ev){
		var left = ev.pageX-100-$(this).offset().left;
		var top = ev.pageY-100-$(this).offset().top;
		if(left<0){
			left=0;
		}
		if(left>201){
			left=201
		}
		if(top<0){
			top=0
		}
		if(top>201){
			top=201
		}
		maskDiv.css({left:left+'px',top:top+'px'});
		newImg.css({left:-left*2+'px',top:-top*2+'px'});
	})
}

