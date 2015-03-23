	function fill_form(myArray){
		var myList;
		if (myArray == "menArray"){
			myList = $("ul .menForm");
		}else{
			myList = $("ul .womenForm");
		}
		myList = $("ul .menForm");
		alert("OK");

		myArray.each(function(key, value){
			myList.append($("<li/>").text(value).attr("id", value);
		});
	}

	fill_form(menArray);
	fill_form(womenArray);
