$(document).ready(function() {
	
	var menArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Decathlon", "Relay"];
	var womenArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Heptathlon", "Relay"];
	var teamArray = ["Ranking"];
	var myType;
	var myEvent;
	var myGender;

	$( "#gendSelect" ).change(function() {
		myGender = $( "#gendSelect option:selected" ).text();
		if (myGender == 'Men'){
			fillDropdown(menArray);
		}else if(myGender == 'Women'){
			fillDropdown(womenArray);
		}else if(myGender == 'Team'){
			fillDropdown(teamArray);
		}else{
			clearDropdown();
		}
	});

	$( "#eventSelect" ).change(function() {
		myEvent = $( "#eventSelect option:selected" ).text();
	});

	$( "#typeSelect" ).change(function() {
		myType = $( "#typeSelect option:selected" ).text();
	});

	function fillDropdown(myArray){
		var myDropdown = $('#eventSelect');
		clearDropdown();

		$.each(myArray, function(index, value){
			myDropdown.append($('<option></option>').val(value).html(value));
		});
	}

	function clearDropdown(){
		$("#eventSelect option").each(function(){
		    if($(this).attr("class") != "select"){
		    	$(this).remove();
		    }
		});		
	}

	$("#mainForm").submit(function( event ) {
		event.preventDefault();
		console.log(myGender);
		console.log(myEvent);
		if(myGender == "--SELECT--" || jQuery.type(myGender) == undefined){
			alert("Please, select type");
		}else if(myEvent == "--SELECT--" || jQuery.type(myEvent) == undefined){
			alert("Please, select event");
		}else{
			showPage("page2");
		}
	});

	function showPage(divId) {
		$('.pages').each(function(index) {
			if ($(this).attr("id") == divId) {
				$(this).show(200);
			}else {
				$(this).hide(600);
			}
    	});
	}

	$('#prevBttn1').click(function(){
		showPage("page1");
	});

	jQuery('#uploadForm').submit(function(){
		// show loader [optional line]
		$('#msg').html('uploading....').fadeIn();
		if(document.getElementById('upload_frame') == null) {
			// create iframe
			$('body').append('<iframe id="upload_frame" name="upload_frame"></iframe>');

			$('#upload_frame').on('load',function(){
				if($(this).contents()[0].location.href.match($(this).parent('form').attr('action'))){
					// display server response [optional line]
					$('#server_response').html($(this).contents().find('html').html());
					    // hide loader [optional line]
					$('#msg').hide();
				}
			})

			$(this).attr('method','post'); 
			$(this).attr('enctype','multipart/form-data'); 
			$(this).attr('target','upload_frame').submit(); 
		} 
	});

});