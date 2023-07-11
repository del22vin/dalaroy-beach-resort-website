 var pgwSlideshow; 

Initialize();


function Initialize(){
	
	InitializeProductGalleryViewer();
}

function InitializeProductGalleryViewer(){
	
$('#gallery1').imagesGrid({images: [
    'images/OtherPictures/IMG_1.jpg',
	'images/OtherPictures/IMG_2.jpg',
	'images/OtherPictures/IMG_3.jpg',
	'images/OtherPictures/IMG_4.jpg',
	'images/OtherPictures/IMG_5.jpg',
	'images/OtherPictures/IMG_6.jpg',
	'images/OtherPictures/IMG_7.jpg',
	'images/OtherPictures/IMG_8.jpg',
	'images/OtherPictures/IMG_9.jpg',
	'images/OtherPictures/IMG_10.jpg',
	'images/OtherPictures/IMG_11.jpg',
	'images/OtherPictures/IMG_12.jpg',
	'images/OtherPictures/IMG_13.jpg',
	'images/OtherPictures/IMG_14.jpg',
	'images/OtherPictures/Sign.jpg'
	
],
cells: 5
});

$('#gallery2').imagesGrid({images: [
     'images/OtherPictures/IMG_16.jpg',
	'images/OtherPictures/IMG_17.jpg',
	'images/OtherPictures/IMG_18.jpg',
	'images/OtherPictures/IMG_19.jpg',
	'images/OtherPictures/IMG_20.jpg',
	'images/OtherPictures/IMG_21.jpg',
	'images/OtherPictures/IMG_22.jpg',
	'images/OtherPictures/IMG_23.jpg',
	'images/OtherPictures/IMG_24.jpg',
	'images/OtherPictures/IMG_25.jpg',
	'images/OtherPictures/IMG_26.jpg',
	'images/OtherPictures/IMG_27.jpg',
	'images/OtherPictures/IMG_28.jpg',
	'images/OtherPictures/IMG_29.jpg',
	'images/OtherPictures/IMG_30.jpg',
	'images/OtherPictures/IMG_31.jpg',
	'images/OtherPictures/IMG_32.jpg',
	'images/OtherPictures/IMG_33.jpg',
	'images/OtherPictures/IMG_34.jpg',

],
cells: 5
});

	
	
	
	
		//$("#PopupGalleryContainer").hide();

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
    adaptiveDuration : 1000,
	displayList: false
	});
	



}

function GetPhotos(productID){
	
	var list = '';
	var imgsLink = 'images/OtherPictures/' + productID +'.jpg';
	
		list +='<li><img src="'+ imgsLink +'" ></li>';
	

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