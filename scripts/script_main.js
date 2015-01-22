$(document).ready(function() {
	
	var menArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Decathlon", "Relay"];
	var womenArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Heptathlon", "Relay"];
	var teamArray = ["Team Ranking"];

	function fill_form(myArray){
		var myList;
		if (myArray == menArray){
			myList = $("ul.menForm");
		}else if(myArray == womenArray){
			myList = $("ul.womenForm");
		}else{
			myList = $("ul.teamForm");
		}
		
		$.each(myArray, function(index, value){
			var label = $("<label>");
			var input = $('<input>').attr({id: value, name: value})
									.attr('type', 'checkbox');
			input.appendTo(label);
			$('<text_form/>').html(value).appendTo(label);
			$("<br>").appendTo(label);
			myList.append(label);
		});
	}

	fill_form(menArray);
	fill_form(womenArray);
	fill_form(teamArray);

	function toggleDiv(divId) {
	    $('.boxes').each(function(index) {
		    if ($(this).attr("id") == divId) {
		    	$(this).show(200);
		    }else{
		    	$(this).hide(600);
		    }
	    });
	}

	$("#start.header_button").click(function() {
		toggleDiv("start_box");
	});

	$("#continue.header_button").click(function() {
		toggleDiv("continue_box");
	});



});