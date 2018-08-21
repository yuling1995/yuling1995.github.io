var banner = document.getElementsByClassName('banner')[0];
var a = banner.getElementsByTagName('a')[0];
var imgArr = ['url(img/banner1.jpg)','url(img/banner2.jpg)','url(img/banner3.jpg)']
// a.style.backgroundImage = 'url(img/banner2.jpg)';
var left = banner.getElementsByTagName('dt')[0];
var right = banner.getElementsByTagName('dd')[0];
var liArr = banner.getElementsByTagName('li');
var i = 0;
right.onclick = function(){
	butRight()
}
function butRight(){
	i++;
	if (i == imgArr.length) {
		i = 0;
	}
	go(i)
}
left.onclick = function(){
	i--;
	if (i < 0) {
		i = imgArr.length-1;
	}
	go(i);
}
function go(n){
	clearInterval(set);
	set = setInterval(function(){
		butRight()
	},4000)
	for (var j = 0; j < imgArr.length; j++) {
		a.style.backgroundImage = '';
		liArr[j].className = '';
	}
	a.style.backgroundImage = imgArr[n];
	liArr[n].className = 'active';
}

for (var m = 0; m < liArr.length; m++) {
	clicks(m);
}
function clicks(k){
	liArr[k].onclick = function(){
		go(k)
		i = k;
	}
}
var set = setInterval(function(){
	butRight()
},4000)

banner.onmouseenter=function(){
	clearInterval(set);
}
banner.onmouseleave=function(){

	set = setInterval(function(){
		butRight()
	},4000)
}