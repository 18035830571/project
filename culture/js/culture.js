window.onload=function(){


//轮播
	//按键右边
	var num=0;
    var t;
	$('.back').click(function(){
		fn();
	});
	$('.forword').click(function(){
		fn1();
	});
	//自动轮播
	t = setInterval(function(){
		fn();
	},1000);

	//当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$('.banner').mouseenter(function(){
		clearInterval(t);
	})
	$('.banner').mouseleave(function(){
		t = setInterval(function(){
			fn();
		},3000);
	})
	//右
	function fn(){
		num++;
		if (num==$(".banner img").length) {
			num=0;
		}
		$(".banner img").css({opacity:0,"z-index":0})
		
		$(".banner img").eq(num).css({"opacity":1,"z-index":3})
	
	}
	//左
	function fn1(){
		num--;
		if (num== -1) {
			num=$(".banner img").length-1;
		}
		$(".banner img").css({opacity:0,"z-index":0})
		
		$(".banner img").eq(num).css({"opacity":1,"z-index":3})
		
	}

//团队	
	let term3 = $('.term3')
	$(".back1").click(function(){	
		term3.css({marginLeft:'-1265px'});//向左移动
	})
	$(".forword1").click(function(){
		term3.css({marginLeft:'0px'});//向右移动
	})


	







}