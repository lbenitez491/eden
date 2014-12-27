<script>
	$( "#nav-1 ul #li-1" ).click(function(event) {
		event.preventDefault();
		$( "#nav-1 ul #li-1" ).attr("class","li-select");
		$( "#nav-1 ul #li-2" ).attr("class","");
	  	$( "#nav-1 ul #li-3" ).attr("class","");

	  	$( "#nav-1 ul #li-1 #a-1" ).attr("class","a-select");
	  	$( "#nav-1 ul #li-2 #a-2" ).attr("class","");
	  	$( "#nav-1 ul #li-3 #a-3" ).attr("class","");
	});

	$( "#nav-1 ul #li-2" ).click(function(event) {
		event.preventDefault();
	  	$( "#li-1" ).attr("class","");
		$( "#li-2" ).attr("class","li-select");
	  	$( "#li-3" ).attr("class","");

	  	$( "#nav-1 ul #li-1 #a-1" ).attr("class","");
	  	$( "#nav-1 ul #li-2 #a-2" ).attr("class","a-select");
	  	$( "#nav-1 ul #li-3 #a-3" ).attr("class","");
	});

	$( "#nav-1 ul #li-3" ).click(function(event) {
		event.preventDefault();
	  	$( "#li-1" ).attr("class","");
		$( "#li-2" ).attr("class","");
	  	$( "#li-3" ).attr("class","li-select");

	  	$( "#nav-1 ul #li-1 #a-1" ).attr("class","");
	  	$( "#nav-1 ul #li-2 #a-2" ).attr("class","");
	  	$( "#nav-1 ul #li-3 #a-3" ).attr("class","a-select");
	});
</script>