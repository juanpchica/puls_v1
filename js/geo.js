
$(function(){


	var geo = navigator.geolocation;
	var opciones = {};

	geo.getCurrentPosition(geo_exito, geo_error, opciones);


	function geo_error(){
		alert("Por favor actualiza tu navegador");
	}

	function geo_exito(posicion){
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;
		var acc = posicion.coords.accuracy;
		
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lon+"&zoom=13&size=1000x1000";
		$("#mapa").append(mapa);
	}


})