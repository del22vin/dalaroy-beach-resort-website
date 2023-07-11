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
	var imgsLink = 'images/Cottages/' + productID;
	
	if(productID == "1_AgustinasPavillion_1"){
		list +='<li><img src="'+ imgsLink +'/AP1_1.jpg"  alt="Pavillon 1" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AP1_2.jpg" alt="Pavillon 1" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AP1_3.jpg" alt="Pavillon 1" data-description=""></li>';
	}
	else if(productID == "2_AgustinasPavillion_2"){
		list +='<li><img src="'+ imgsLink +'/AP2_1.jpg" alt="Pavillon 2" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AP2_2.jpg" alt="Pavillon 2" data-description=""></li>';
	}
	else if(productID == "3_AgustinasPavillion_3"){
		list +='<li><img src="'+ imgsLink +'/AP3_1.jpg" alt="Pavillion 3" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AP3_2.jpg" alt="Pavillion 3" data-description=""></li>';
	}
	else if(productID == "4_AngelsBigKubo"){
		list +='<li><img src="'+ imgsLink +'/ABK_1.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ABK_2.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ABK_3.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ABK_4.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ABK_5.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/ABK_6.jpg" alt="Angel\'s Big Kubo" data-description=""></li>';
	}
	else if(productID == "5_NipaHut(Special)"){
		list +='<li><img src="'+ imgsLink +'/NHS_4.jpg" alt="Large Cottage" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/NHS_1.jpg" alt="Large Cottage" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/NHS_2.jpg" alt="Large Cottage" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/NHS_3.jpg" alt="Large Cottage" data-description=""></li>';
		
	}
	else if(productID == "6_NipaHut"){
		list +='<li><img src="'+ imgsLink +'/NH_1.jpg" alt="Medium Cottage" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/NH_2.jpg" alt="Medium Cottage" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/NH_3.jpg" alt="Medium Cottage" data-description=""></li>';
	}
	else if(productID == "7_Cavana"){
		list +='<li><img src="'+ imgsLink +'/Cavana.jpg" alt="Cavana" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/Cavana2.jpg" alt="Cavana" data-description=""></li>';
	}	
	else if(productID == "8_AngelsKubo"){
		list +='<li><img src="'+ imgsLink +'/AK_1.jpg" alt="Angels Kubo" data-description=""></li>';
		list +='<li><img src="'+ imgsLink +'/AK_2.jpg" alt="Angels Kubo" data-description=""></li>';
	}
	else if(productID == "9_SC"){
		list +='<li><img src="'+ imgsLink +'/SC_1.jpg" alt="Small Cottage" data-description=""></li>';
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