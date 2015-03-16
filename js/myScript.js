$(document).ready(function() {
	
	var menArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Decathlon", "Relay"];
	var womenArray = ["100m", "200m", "400m", "800m", "1500m", "3000m", "5000m", "10000m", "Hurdles", "Steeplechase", "Discus", "Javelin", "Shot Put", "Hammer Throw", "Pole Vault", "Long Jump", "High Jump", "Triple Jump", "Heptathlon", "Relay"];
	var teamArray = ["Ranking"];

	function fill_form(myArray){
		var myList;
		var myName;
		if (myArray == menArray){
			myList = $("ul[name=Men]");
			myName = 'men';
		}else if(myArray == womenArray){
			myList = $("ul[name=Women]");
			myName = 'women';
		}else{
			myList = $("ul[name=Team]");
			myName = 'team';
		}
		
		$.each(myArray, function(index, value){
			var li = $("<li>");
			var label = $("<label>");
			var input = $('<input>').attr({id: value, type: 'radio', name: 'radioButon'});

			
			input.appendTo(label);

			$('<textForm/>').html(value).appendTo(label);
			label.appendTo(li);
			myList.append(li);
		});
	}

	fill_form(menArray);
	fill_form(womenArray);
	fill_form(teamArray);

	$('input[type="radio"]').click(function(){
		if ($(this).is(':checked')){
			var pName = $(this).closest('ul');
			alert('You selected the ' + this.id + ' ' + $(pName[0]).attr('name') + ' event');
		}
  	});

  	$('input#sb,tBttn').click(getMainForm()); 

  	function getMainForm(){
  		alert("k");
		$.get('event.php', $('form#myForm').serialize(), function(data) {
		});
	}

});