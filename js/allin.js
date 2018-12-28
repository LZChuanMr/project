
$(function(){
	/*全选*/
	$("#xq").click(function(){ 
	$("tbody input[name='checkbox']").attr("checked","true"); 
	})
	
	/*取消全选（全不选）*/
	$("#xq").click(function(){ 
	$("tbody input[name='checkbox']").removeAttr("checked"); 
	})
 
	/*反选*/
	$("#xq").click(function(){ 
	$("tbody input[name='checkbox']").each(function(){ 
	if($(this).attr("checked")) 
		{ 
			$(this).removeAttr("checked"); 
		} 
	else
		{ 
			$(this).attr("checked","true"); 
		} 
		}) 
	}) 
 

})
	
