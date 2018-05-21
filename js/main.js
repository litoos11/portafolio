

$(function(){
	$('.galeria .contenedor-imagen').on('click', function(){
		/*alert('123');*/
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		console.log(ruta_imagen);
		$('#imagen-modal').attr('src', ruta_imagen);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	})
})
/*
$(document).ready(function() {
	alert('123');
  // Instrucciones a ejecutar al terminar la carga
});*/