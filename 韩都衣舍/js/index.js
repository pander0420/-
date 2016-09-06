$(function(){
	//轮播图
	var $index=0;
	var oBannerTimer=null;
	function bannermove(index){
		
		$(".banner-nav li").eq(index).removeClass("banner-nav-on");
		$(".banner-pic li").eq(index).fadeOut(1000);

		if(index==3){
			index=-1;
		}
		$(".banner-nav li").eq(index+1).addClass("banner-nav-on");
		$(".banner-pic li").eq(index+1).fadeIn(1000);
	}
	//自动轮播
	oBannerTimer=setInterval(function(){
		bannermove($index);
		$index++;
	},2000);
	//鼠标悬停
	$("#index-banner").hover(
		function(){
			clearInterval(oBannerTimer);
		},
		function(){
			oBannerTimer=setInterval(function(){
				bannermove($index);
				$index++;
			},2000);
		}
	);
	//轮播导航鼠标滑过时间
	$(".banner-nav li").on("mouseenter",function(){
		$index=$(this).index()-1
		bannermove($index)
	})

	//选项卡
	
	$(".hd_msg-right-con li").eq(0).siblings().removeClass("block");
	$(".hd_msg-right-nav li").mouseenter(
		function(){
			$(this).addClass("hd_msg-right-nav-hover");
			$(".hd_msg-right-con>li").eq($(this).index()).addClass("block");
			$(this).siblings().removeClass("hd_msg-right-nav-hover");

			$(".hd_msg-right-con>li").eq($(this).index()).siblings().removeClass("block");
		})
	


	//尾部友情链接
	function links(){
		$("#friend-links").animate({left:-816},15000,"linear",function(){
			$("#friend-links").css({left:0});
			links();
		})
	}
	links();
});