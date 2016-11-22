init();
function init(){
	if(!document.addEventListener){
	    window.open('../浏览器/index.html','_self')
	    return
	}
/*******我想****/
var srowtop=document.getElementsByClassName('icon-jiantoushang iconfont')[0];
var srowdown=document.getElementsByClassName('icon-jiantou-copy iconfont')[0];
var want=document.getElementsByClassName('want')[0];
var wanLiBar=document.getElementsByClassName("want-li-bar")[0];
var navContBar=document.getElementsByClassName('nav-cont-bar')[0];
srowtop.onmouseover=function(){
	srowtop.style.display="none";
	srowdown.style.display="block";
}
function xiala(obj1,obj2,h){//下拉函数
	obj1.onmouseover=function(){
		obj1.style.cssText="color:#f00;border-bottom: 1px solid #f00;"
		navContBar.style.height="55px";
		obj2.style.display="block";
		sMove(navContBar,{
		height: h
		})	
	}
	obj2.onmouseleave=function(){
		obj1.style.cssText="";
		obj2.style.display="none";
		sMove(navContBar,{
		height:55
	})	
	}
}
xiala(want,wanLiBar,262);
/******行业洞察***/
var insight=document.getElementsByClassName('insight')[0];
var insightLiBar=document.getElementsByClassName("insight-li-bar")[0];
xiala(insight,insightLiBar,338);

/*******解决方案*****/
var solution=document.getElementsByClassName('solution')[0];
var solutionLiBar=document.getElementsByClassName("solution-li-bar")[0];
xiala(solution,solutionLiBar,414);
/*******服务*****/
var service=document.getElementsByClassName('service')[0];
var serviceLiBar=document.getElementsByClassName("service-li-bar")[0];
xiala(service,serviceLiBar,344);
/*******产品*****/
var product=document.getElementsByClassName('product')[0];
var productLiBar=document.getElementsByClassName("product-li-bar")[0];
xiala(product,productLiBar,377);
/*******产品*****/
var technical=document.getElementsByClassName('technical')[0];
var technicalLiBar=document.getElementsByClassName("technical-li-bar")[0];
xiala(technical,technicalLiBar,376);
/*******合作伙伴*****/
var partner=document.getElementsByClassName('partner')[0];
var partnerLiBar=document.getElementsByClassName("partner-li-bar")[0];
xiala(partner,partnerLiBar,354);



/**********banner*****/
var bannerImg=document.getElementsByClassName('banner-img')[0];
var Img=bannerImg.getElementsByTagName('img');
var dot=document.getElementsByClassName('dot')[0];
var imgLi=dot.getElementsByTagName('li');
var jiantou=document.getElementsByClassName('jiantou')[0];
var jiantouI=jiantou.getElementsByTagName('i');
for(var i=0;i<imgLi.length;i++){//手动
	imgLi[i].index=i;
	imgLi[i].onmouseover=function(){
		for(var j=0;j<imgLi.length;j++){
			imgLi[j].id="";
			Img[j].style.display="none";
		}
		this.id="active";
		Img[this.index].style.display="block";
	}
}
bannerImg.onmouseover=function(){
	jiantouI[1].style.display="block";
	jiantouI[0].style.display="block";
	jiantouI[1].onmouseover=function(){
		jiantouI[1].style.display="block";
	}
	jiantouI[0].onmouseover=function(){
		jiantouI[0].style.display="block";
	}
}
bannerImg.onmouseleave=function(){
	jiantouI[1].style.display="none";
	jiantouI[0].style.display="none";
	jiantouI[1].onmouseleave=function(){
		jiantouI[1].style.display="none";
	}
	jiantouI[0].onmouseleave=function(){
		jiantouI[0].style.display="none";
	}
}
var m=0;
jiantouI[1].onclick=function(){
	m++;
	for(var j=0;j<imgLi.length;j++){
		imgLi[j].id="";
		Img[j].style.display="none";
	}
	imgLi[m].id="active";
	Img[m].style.display="block";	
	if(m===2){
		m=-1;
	}
}
var n=3;
jiantouI[0].onclick=function(){
	n--;
	for(var j=0;j<imgLi.length;j++){
		imgLi[j].id="";
		Img[j].style.display="none";
	}
	imgLi[n].id="active";
	Img[n].style.display="block";	
	if(n===0){
		n=3;
	}
}

var move=0;//自动
function play(){
	for(var j=0;j<imgLi.length;j++){
			imgLi[j].id="";
			Img[j].style.display="none";
		}
	move++;
	if(move>imgLi.length-1){
		move=0;
	}
	imgLi[move].id="active";
	Img[move].style.display="block";
}
setInterval(play,3000);
/*******新闻*****/
var fan=document.getElementsByClassName('fan')[0];
var arrows=fan.getElementsByTagName('i');
var newsBoxUl=document.getElementsByClassName('news-box-ul')[0];
var newsLi=newsBoxUl.getElementsByTagName('li');
var numTop=0,len=newsLi.length;
arrows[0].onclick=function(){
	numTop++;
	if(numTop===len){
		numTop=0;
	}
	sMove(newsBoxUl,{
		marginTop:-60*numTop
	})
}
arrows[1].onclick=function(){
	numTop--;
	if(numTop<0){
		numTop=len-1;
	}
	sMove(newsBoxUl,{
		marginTop:-60*numTop
	})
}
function timer(){
	numTop++;
	if(numTop===len){
		numTop=0;
	}
	sMove(newsBoxUl,{
		marginTop:-60*numTop
	})
}
setInterval(timer,2000);
/***********视屏****/
var videoImg=document.getElementsByClassName('video-img')[0];
var videoBtn=document.getElementsByClassName('video-btn')[0];
var videoBtnActive=document.getElementsByClassName('video-btn-active')[0];
videoImg.onmouseover=function(){
	videoBtn.style.display="none";
	videoBtnActive.style.display="block"
}
videoImg.onmouseout=function(){
	videoBtn.style.display="block";
	videoBtnActive.style.display="none"
}
/*********右边****/
var rightNav=document.getElementsByClassName('right-nav')[0];
var chatBox=document.getElementsByClassName('chat-box')[0];
var chat=document.getElementsByClassName('chat')[0];
var emalBox=document.getElementsByClassName('emal-box')[0];
var emal=document.getElementsByClassName('emal')[0];
var telBox=document.getElementsByClassName('tel-box')[0];
var tel=document.getElementsByClassName('tel')[0];
function huan(obj1,obj2){
	obj1.onmouseover=function(){
		obj1.style.display="none";
		obj2.style.display="block";
	}
	obj2.onmouseleave=function(){
		obj1.style.display="block";
		obj2.style.display="none";
	}
}
huan(chatBox,chat);
huan(emalBox,emal);
huan(telBox,tel);
/********返回顶部********/
var backTop=document.getElementsByClassName('back-top')[0];
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		backTop.onclick=function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		}
		if(scrollT>300)
		{
			backTop.style.display="block";
		}else{
			backTop.style.display="none";
		}
}

//将速度去掉,速度靠计算得到
function sMove(obj,json,fn) {
    clearInterval(obj.timer);
    var cur = 0;
    obj.timer = setInterval(function () {
        var isTrue = true;
        for(var attr in json){
            //如果attr是opacity
            if(attr === "opacity"){
                cur = Math.round(getStyle(obj,attr)*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }

            speed = (json[attr] - cur)/8;
            //对速度取整
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur !== json[attr]){
                isTrue = false;
                if(attr === "opacity"){
                    obj.style.opacity = (cur + speed)/100
                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }
        //console.log(isTrue)
        //等所有属性都到达目标值  再结束动画
        if(isTrue){
            clearInterval(obj.timer);
            fn && fn.call(obj);
        }
    },30)
}

function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}


if(!document.addEventListener){
        //ie8 以下跳转到 下载浏览器的地址
        window.open('http://www.baidu.com','_self')
 }
}