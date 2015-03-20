
	/*------------------------------------------------/	
	$Declaracion de variables y objetos
	/*--------------------------------------------------*/
	var $form = $("#formulario"),
		$titulo = $("#titulo"),
		$url = $("#url"),
		$button = $("#mostrar-form"),
		$list = $("#main_content"),
		$post = $(".item:last-child"),
		$items = [],
		$obj_items={};


	
	/*------------------------------------------------/	
	$Eventos
	/*--------------------------------------------------*/

	$button.click(mostrarFormulario);
	$form.on('submit', agregarPost);



/*------------------------------------------------/	
	$Funciones
/*--------------------------------------------------*/

function agregarPost(){
	
	var url = $url.val(),
		titulo = $titulo.val(),

		//Clono un elemento
		$clone = $post.clone();

	//Reemplazo valores
	$clone.find(".item__titulo a").text(titulo).attr('href',url);
	$clone.hide();	

	$list.prepend($clone);
	$clone.fadeIn();


	$obj_items.titulo = titulo;
	$obj_items.url = url;


	//Agrego items a array
	$items.push($obj_items);

	localStorage.setItem("items", JSON.stringify($items));

	$titulo.val("");
	$url.val("");

	mostrarFormulario();

	return false;
}

function mostrarFormulario(){

	$form.slideToggle();

	//Reemplaza lo que es el preventDefault
	return false;
}
