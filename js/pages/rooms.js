 var pgwSlideshow; 

Initialize();


function Initialize(){
	
	InitializeProductGalleryViewer();
}

function InitializeProductGalleryViewer(){
		$("#PopupGalleryContainer").hide();

}




function ShowPopUpGallery(product){
	
	$("#PopupGalleryContainer").show();
	pgwSlideshow = $('#PgwSlideshowContainer').pgwSlideshow();	
	// initialize photo
	
	var photos;
	
	photos = GetPhotos(product.id);
	
	
	
	$("#PgwSlideshowContainer").html(photos);

		//----event---------------------------------
	$("#PopupGalleryContainer").data('clicked', false);
	$("#PopupGalleryContainerMain > div").data('clicked', false);
	
	$("#PopupGalleryContainerMain > div").click(function(){
		$(this).data('clicked', true);
		
	});
	$("#PopupGalleryContainer").click(function(){
		if($("#PopupGalleryContainerMain > div").data('clicked') != true){
			$(this).data('clicked', true);
			
			ClosePopUpGallery();
		}
		else{
			
			$(this).data('clicked', false);
			$("#PopupGalleryContainerMain > div").data('clicked', false);
		}
		
	});
   
   pgwSlideshow.reload({
    transitionEffect : 'fading',
    adaptiveDuration : 1000
	});
	



}

function GetPhotos(productID){
	
	var list = '';
	var imgsLink = 'images/Rooms/' + productID;
	
	if(productID == "1_AngelFamilyRoom"){
		list +='<li><img src="'+ imgsLink +'/AFR_1.jpg"  alt="Deluxe Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AFR_2.jpg" alt="Deluxe Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AFR_3.jpg"  alt="Deluxe Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AFR_4.jpg" alt="Deluxe Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AFR_5.jpg" alt="Deluxe Family Room" data-description=""></li>';
	}
	else if(productID == "2_AngelSingleRoom"){
		list +='<li><img src="'+ imgsLink +'/ASR_1.jpg" alt="Single Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ASR_2.jpg" alt="Single Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ASR_3.jpg" alt="Single Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ASR_4.jpg" alt="Single Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ASR_5.jpg" alt="Single Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ASR_6.jpg" alt="Single Room" data-description=""></li>';		
	}
	else if(productID == "3_SpecialKuboRoom5"){
		list +='<li><img src="'+ imgsLink +'/SKR_1.jpg" alt="Special Kubo Room #5" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_2.jpg" alt="Special Kubo Room #5" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_3.jpg" alt="Special Kubo Room #5" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_4.jpg" alt="Special Kubo Room #5" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_5.jpg" alt="Special Kubo Room #5" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_6.jpg" alt="Special Kubo Room #5" data-description=""></li>';	
	}
	else if(productID == "4_FamilyRoom"){
		list +='<li><img src="'+ imgsLink +'/FR_1.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_2.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_3.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_4.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_5.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_6.jpg" alt="Regular Family Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/FR_7.jpg" alt="Regular Family Room" data-description=""></li>';
	}
	else if(productID == "5_KuboRoom"){
		list +='<li><img src="'+ imgsLink +'/KR_1.jpg" alt="Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/KR_2.jpg" alt="Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/KR_3.jpg" alt="Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/KR_4.jpg" alt="Kubo Room" data-description=""></li>';
		
	}
	else if(productID == "6_SpecialKuboRoom"){
		list +='<li><img src="'+ imgsLink +'/SKR_1.jpg" alt="Special Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_2.jpg" alt="Special Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_3.jpg" alt="Special Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_4.jpg" alt="Special Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_5.jpg" alt="Special Kubo Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/SKR_6.jpg" alt="Special Kubo Room" data-description=""></li>';
	}
	else if(productID == "7_PremiumRoom"){
		list +='<li><img src="'+ imgsLink +'/PR_1.jpg" alt="Premium Room" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/PR_2.jpg" alt="Premium Room" data-description=""></li>';
	}

	 return list;
}

function ClosePopUpGallery(){
	
	if($("#PopupGalleryContainer").data('clicked') == true && $("#PopupGalleryContainerMain > div").data('clicked') == false){
		
		$("#PopupGalleryContainer").hide();
		$("#PopupGalleryContainer").data('clicked', false);
		$("#PopupGalleryContainerMain > div").data('clicked', false);
		$("#PopupGalleryContainer").unbind();
		$("#PopupGalleryContainerMain > div").unbind();
		pgwSlideshow.destroy(true);
	}
	else{
		$("#PopupGalleryContainer").data('clicked', false);
		$("#PopupGalleryContainerMain > div").data('clicked', false);
		
	}
}