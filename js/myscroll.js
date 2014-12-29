//one page scroll
Zepto(function($){
//view video
    $('#container .page-arrowUp').on('click', function(){
      	var index = $(this).closest('.page').attr('data-index');
        if(index==9999){
            $("#container").moveTo(1);
        }else{
      		$("#container").moveTo(parseInt(index)+1);
      	};
    });

    $("#container").onePageScroll({
      	sectionContainer:'#container .page',
      	pagination:false,
        loop: false,
        animationTime:400,
        beforeMove:function(index, target) {
        	var box = $('#page'+index);
        	if(box.find('[data-animation]').length>0){
        		box.find('[data-animation]').css('opacity', 0);
        		box.find('[data-animation]').each(function(){
        			var animation = $(this).attr('data-animation');
        			$(this).removeClass(animation);
        			console.log(index+','+$(this).css('opacity'));
        		});
        	}
    		if(index==2){
        		$("#f-block").hide();
        		$("#f-block").css("bottom","100%");
        	}
        },
        afterMove:function(index, target) {
        	var box = $('#page'+index);
        	if(box.find('[data-animation]').length>0){
        		box.find('[data-animation]').css('opacity', 1);
        		box.find('[data-animation]').each(function(){
        			var animation = $(this).attr('data-animation');
        			$(this).addClass(animation);
        			console.log(index+','+$(this).css('opacity'));
        		});
        	}
        	if(index==2){
        		$("#f-block").show().animate({bottom:'25%'},"slow");
        	}
        }
    });
})