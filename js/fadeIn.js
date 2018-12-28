$(function(){
	//返回顶部JQ  淡入淡出  返回顶部
		$(window).scroll(function(event){
			var h =$(window).scrollTop();
			//console.log(h);
			if(h>500){
				$("#gd_f").fadeIn(100);
			}else{
				$("#gd_f").fadeOut(100);
			}
		});
		$("#gd_f").click(function(){
			$('body,html').animate({
				scrollTop:0
			},1000);
		})
		
	});