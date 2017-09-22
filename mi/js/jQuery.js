//侧导航
 

	window.onload=function(){
		$('aside a').mouseenter(function(){
			 $('.cebian').css('display','none')
			 $(this).next('.cebian').css('display','block')
		})
		$('aside').mouseleave(function(){
			 $('aside .cebian').css('display','none')
		})
	   
	
	
//轮播

	//按键右边
	var num=0;
    var t;
	$('.huan-right').click(function(){
		fn(0);
	});
	$('.huan-left').click(function(){
		fn(1);
	});
	//自动轮播
	t = setInterval(function(){
		fn(0);
	},2000);

	//当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$('.banner').mouseenter(function(){
		clearInterval(t);
	})
	$('.banner').mouseleave(function(){
		t = setInterval(function(){
			fn(0);
		},2000);
	})

	
	//右
	function fn(a){
		var lis = $(".boximg li")
		if (a==0) {
			num++;
			if (num==lis.length) {
				num=0;
			}
		} else if(a==1){
			num--;
	
			if (num== -1) {
				num=lis.length-1;
			}
		}
		lis.css({
			opacity:0,
			"z-index":0
		})
		$(".dian li").css("background","#333")
		lis.eq(num).animate({"opacity":1},function(){
			lis.css({"z-index":3})
			$(".dian li").eq(num).css("background","#fff")
		})
	}
	//圆点点击
	for(let j=0;j<$('.dian li').length;j++){
		$('.dian li').eq(j).click(function () {
			$('.boximg li').css({opacity:0,'z-index':0});
			$('.dian li').css('background','#333');
			$('.boximg li').eq(j).css({opacity:1,'z-index':'3'});
			$('.dian li').eq(j).css('background','#fff');
        })
	}

//头部
$('.haha a').hover(function(){
	$('.innerxiaomi').css('display','none');
	$(this).next('.innerxiaomi').css('display','block');
},function(){
    $('.innerxiaomi').css('display','none');
})
//搜索
$('.sousuo').click(function(){
	$('.nav2li').css('display','block');
	$('.mr').css('display','none');
})
$('.sousuo').blur(function(){
	$('.nav2li').css('display','none');
	$('.mr').css('display','block');
})
//小米明星单品

















}

	
	
	





