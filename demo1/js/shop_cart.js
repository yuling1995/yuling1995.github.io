var cartList = [{
	title:"Neoflam Aeni陶瓷炒锅不粘锅",
	imgsrc:"img/pro_details_06.gif",
	type:"粉色 30CM",
	price:196.00,
	oldPrice:256.00,
	num:1,
	selected:false,
	show:false
},{
	title:"Neoflam Aeni陶瓷炒锅不粘锅",
	imgsrc:"img/pro_details_06.gif",
	type:"粉色 30CM",
	price:196.00,
	oldPrice:256.00,
	num:1,
	selected:false,
	show:false
}]
var vm = new Vue({
	el:"#shopcart",
	data:{
		cartList:cartList,
		goodsList:goodsList,
		onoff:false
	},
	created(){
		console.log(goodsList)
	},
	methods:{
		checkAll(){
			this.onoff = !this.onoff;
			for(var i=0;i<this.cartList.length;i++){
				this.cartList[i].selected = this.onoff;
			}
		},
		check(item){
			item.selected = !item.selected
			console.log(item.selected)
		},
		subNum(item){
			if(item.num>0){
				item.num--
			}
		},
		addNum(item){
			item.num++
		},
		del(index){
			this.cartList.splice(index,1);
		},
		delAll(){
			this.cartList=[]
		},
		shows(item){
			item.show = !item.show;
		}
	},
	computed:{
		
		numbers(){
			var nub = null;
			for(var i=0;i<this.cartList.length;i++){
				nub += parseInt(this.cartList[i].num);
			}
			return nub;
		},
		totol(){
			var tot = null;
			for(var i=0;i<this.cartList.length;i++){
				tot += this.cartList[i].price*this.cartList[i].num;
			}
			return tot;
		}
	}
})
