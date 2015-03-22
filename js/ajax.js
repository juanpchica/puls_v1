$(function(){
	/*
	$.get('logos.html',function(data){
		$("footer").append(data);
	})
	*/

	//Si hay un elemento vacio y queremos traer contenido a el hacemos
	//Puedo traer ciertos elementos de este archivo
	$("footer").load("logos.html")	


	//Peticion a un archivo json
	$.get('js/usuarios.json',function(usuarios){

		var avatar = new Image();
		avatar.src = usuarios.imagen;
		avatar.title = usuarios.nombre+" "+usuarios.apellido;
		$("#avatar").append(avatar);
	})

	

})

var url_base = 'https://query.yahooapis.com/v1/public/yql?';

function obtenerGeoInformacion(lat,lon){
	var query = "Select * from geo.placefinder where text = '"+lat+','+lon+"' and gflags='R'";

	//Codifico el texto para poder enviarlo por la url
	query = encodeURIComponent(query);

	$.ajax({
		url: url_base+"q="+query,
		dataType: 'jsonp',
		jsonpCallback:'procesarGeoInfo',
		data: {
			format:'json'
		},
	});
	
}

function procesarGeoInfo(datos){
	data = datos.query.results.Result;
	var barrio = data.neighborhood;
	var pais = data.country;
	var ciudad = data.city;
	var woeid = data.woeid;

	$("#mapa").append('<p><strong>'+pais+'</strong><br>'+ciudad+'<br>'+barrio+'</p>');

	obtenerClima(woeid);
}



function obtenerClima(woeid){
	var query = "Select * from weather.forecast where woeid = '"+woeid+"' and u='c'";

	//Codifico el texto para poder enviarlo por la url
	query = encodeURIComponent(query);

	$.ajax({
		url: url_base+"q="+query,
		dataType: 'jsonp',
		jsonpCallback:'procesarClima',
		data: {
			format:'json'
		},
	});

}

function procesarClima(data){
	var clima = data.query.results.channel;
	var tem = clima.item.condition.temp;
	var unit = clima.units.temperature;

	$("#clima").append(tem+' '+unit+'°');

}