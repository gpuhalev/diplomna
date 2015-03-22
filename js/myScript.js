$(document).ready(function() {
	
	var menArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Decathlon", "Relay"];
	var womenArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Heptathlon", "Relay"];
	var teamArray = ["Ranking"];
	var myType = "Start List";
	var myEvent;
	var myGender;

//	jQuery('body').append('<iframe name="uploadiframe" onload="iframeUpload.complete();"></iframe>');

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
		console.log(myType);
		if(myGender == "--SELECT--" || jQuery.type(myGender) === 'undefined'){
			alert("Please, select men/women/team");
		}else if(myEvent == "--SELECT--" || jQuery.type(myEvent) === 'undefined'){
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

	var iframeUpload = {
		init: function() {
			jQuery('#uploadForm').prop('target','uploadiframe');
			jQuery('#uploadForm').on('submit',iframeUpload.started);
		},
		started: function() {
			jQuery('#response').removeClass().addClass('loading').html('Loading, please wait.').show();
			jQuery('#uploadForm').hide();
		},
		complete: function(){
			jQuery('#uploadForm').show();
			var response = jQuery("iframe").contents().text();
			if(response){
				response = jQuery.parseJSON(response);
				jQuery('#response').removeClass()
				.addClass((response.status == 1) ? 'success' : 'error')
				.html(response.message);
			}
		}
	};
});