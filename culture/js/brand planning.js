window.onload=function(){


	$(".sbl li").eq(0).hover(function(){
		$(".sbl li").css({"background":"#000","padding-top":"0px"})
		$(this).css({"background":"#2B2B2B","padding-top":"20px"})

		$(".sbr1 .sbr").css({"display":"none"});
        $(".sbr1 .sbr").eq(0).css({"display":"block"});
	})
	$(".sbl li").eq(1).hover(function(){
		$(".sbl li").css({"background":"#000","padding-top":"0px"})
		$(this).css({"background":"#2B2B2B","padding-top":"20px"})
		$(".sbr1 .sbr").css({"display":"none"});
        $(".sbr1 .sbr").eq(1).css({"display":"block"});
	})
	$(".sbl li").eq(2).hover(function(){
		$(".sbl li").css({"background":"#000","padding-top":"0px"})
		$(this).css({"background":"#2B2B2B","padding-top":"20px"})
		$(".sbr1 .sbr").css({"display":"none"});
        $(".sbr1 .sbr").eq(2).css({"display":"block"});
	})
	$(".sbl li").eq(3).hover(function(){
		$(".sbl li").css({"background":"#000","padding-top":"0px"})
		$(this).css({"background":"#2B2B2B","padding-top":"20px"})
		$(".sbr1 .sbr").css({"display":"none"});
        $(".sbr1 .sbr").eq(3).css({"display":"block"});
	})




}