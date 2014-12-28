/* Default */
/* Elementos de la lista del formulario */
$( "#nav-1 ul #li-1" ).click(function(event) {
	event.preventDefault();
	$( "#nav-1 ul li" ).attr("class","");
	$( "#li-1" ).attr("class","li-select");

	$( "#nav-1 ul li a" ).attr("class","");
	$( "#nav-1 ul li #a-1" ).attr("class","a-select");

	$( "#div-2 form #div-taxonomia" ).show();
	$( "#div-2 form #div-4" ).hide();
	$( "#div-2 form #div-5" ).hide();
});

$( "#nav-1 ul #li-2" ).click(function(event) {
	event.preventDefault();
  	$( "#nav-1 ul li" ).attr("class","");
	$( "#li-2" ).attr("class","li-select");

  	$( "#nav-1 ul li a" ).attr("class","");
  	$( "#nav-1 ul li #a-2" ).attr("class","a-select");

  	$( "#div-2 form #div-taxonomia" ).hide();
  	$( "#div-2 form #div-4" ).show();
  	$( "#div-2 form #div-5" ).hide();
});

$( "#nav-1 ul #li-3" ).click(function(event) {
	event.preventDefault();
  	$( "#nav-1 ul li" ).attr("class","");
	$( "#li-3" ).attr("class","li-select");

  	$( "#nav-1 ul li a" ).attr("class","");
  	$( "#nav-1 ul li #a-3" ).attr("class","a-select");

  	$( "#div-2 form #div-taxonomia" ).hide();
  	$( "#div-2 form #div-4" ).hide();
  	$( "#div-2 form #div-5" ).show();
});

/* Condición if de origen fitogeográfico */
$( "#input4" ).click(function(event) {
	event.preventDefault();
  	if (this.value == "Nativo" || this.value == "Endémico" || this.value == "Cosmopolito") {
  		$("#label-1").html("Regiones");
  	}
  	else if(this.value == "Introducido"){
  		$("#label-1").html("Lugar de origen");
  	};
});

$( "#boton-true-taxonomia" ).click(function(event) {
  event.preventDefault();
  $( "#nav-1 ul li" ).attr("class","");
  $( "#li-2" ).attr("class","li-select");

  $( "#nav-1 ul li a" ).attr("class","");
  $( "#nav-1 ul li #a-2" ).attr("class","a-select");

  $( "#div-2 form #div-taxonomia" ).hide();
  $( "#div-2 form #div-4" ).show();
  $( "#div-2 form #div-5" ).hide();
});

$( "#boton-true-descripcion" ).click(function(event) {
  event.preventDefault();
  $( "#nav-1 ul li" ).attr("class","");
  $( "#li-3" ).attr("class","li-select");

  $( "#nav-1 ul li a" ).attr("class","");
  $( "#nav-1 ul li #a-3" ).attr("class","a-select");

  $( "#div-2 form #div-taxonomia" ).hide();
  $( "#div-2 form #div-4" ).hide();
  $( "#div-2 form #div-5" ).show();
});

$( "#boton-true-distribucion" ).click(function(event) {
  event.preventDefault();
 
});


