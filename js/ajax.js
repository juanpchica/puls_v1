$(function(){

	$.get('logos.html',function(data){
		$(".footer").append(data);
	})
})