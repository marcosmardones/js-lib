function validarFecha(fecha,formato) {
	//acepta formato de fecha: dd-mm-yyyy, dd-mm-yy, yyyy-mm-dd, yy-mm-dd, dd/mm/yyyy, dd/mm/yy, yyyy/mm/dd, yy/mm/dd
	var formato_valido = false;
	var RegExPattern,fechaf,d,m,y;
		
	if( (formato == 'dd-mm-yyyy' && fecha.match(/^\d{2}\-\d{2}\-\d{4}$/)) || (formato == 'dd-mm-yy' && fecha.match(/^\d{2}\-\d{2}\-\d{2}$/)) ){
		fechaf = fecha.split("-");
		d = fechaf[0];
		m = fechaf[1];
		y = fechaf[2];
		formato_valido = true;
	}
	if( (formato == 'yyyy-mm-dd' && fecha.match(/^\d{4}\-\d{2}\-\d{2}$/)) || (formato == 'yy-mm-dd' && fecha.match(/^\d{2}\-\d{2}\-\d{2}$/)) ){
		fechaf = fecha.split("-");
		d = fechaf[2];
		m = fechaf[1];
		y = fechaf[0];
		formato_valido = true;
	}	

	
	if( (formato == 'dd/mm/yyyy' && fecha.match(/^\d{2}\/\d{2}\/\d{4}$/)) || (formato == 'dd/mm/yy' && fecha.match(/^\d{2}\/\d{2}\/\d{2}$/)) ){
		fechaf = fecha.split("/");
		d = fechaf[0];
		m = fechaf[1];
		y = fechaf[2];
		formato_valido = true;
	}		
	if( (formato == 'yyyy/mm/dd' && fecha.match(/^\d{4}\/\d{2}\/\d{2}$/)) || (formato == 'yy/mm/dd' && fecha.match(/^\d{2}\/\d{2}\/\d{2}$/)) ){
		fechaf = fecha.split("/");
		d = fechaf[2];
		m = fechaf[1];
		y = fechaf[0];
		formato_valido = true;
	}		
	  
	if (formato_valido) {			
		return (m > 0) && (m < 13) && (y > 0) && (y < 32768) && (d > 0) && (d <= (new Date(y, m, 0)).getDate());
	} else {
		return false;
	}
}


function validarEmail( email ){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}


function formatearNumero(valor) {
    var num = valor.replace(/\./g,'');
	if(!isNaN(num)){
		num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
		num = num.split('').reverse().join('').replace(/^[\.]/,'');
		return num;
	}
}


function ajax(url,parametros,callback_done,callback_fail,callback_always){
	$.post( url, parametros ,function(data) {
	})
	.done(function(data) {
		callback_done(data);
	})
	.fail(function(data){
		callback_fail(data);
	})
	.always(function(data) {
		callback_always(data)
	});
}