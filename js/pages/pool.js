 var pgwSlideshow; 

Initialize();


function Initialize(){
	
	
	
	// initialize news n update slide
	pgwSlideshow = $('#PgwSlideshowContainer').pgwSlideshow();	
	
	pgwSlideshow.reload({
     transitionEffect : 'fading',
    adaptiveDuration : 1000,
	displayList: false,
	autoSlide: true,
	intervalDuration: 3000,
	displayControls: true
	});
}

	