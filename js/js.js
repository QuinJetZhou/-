/*
* @Author: ZHOU
* @Date:   2018-09-12 16:50:41
* @Last Modified by:   ZHOU
* @Last Modified time: 2018-09-21 17:09:46
*/



// $(".change-bgc").click(function() {
// 	$(".bgc-block").slideToggle(400)
// });
 

$(function(){
	$(".change-bgc").bind('click',function(){
		$(".bgc-block").slideToggle(400);
	});
})


$(function(){
	$(".img-block > img").bind('click', function() {
		console.log(this.src);
		$("body").css("background-image","url("+this.src+")");
	});
})