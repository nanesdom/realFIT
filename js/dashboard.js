var ip = "http://192.168.0.25:9999/realfit/";
function dia(){
	var diasSemana = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	f =new Date();
	dias = diasSemana[f.getDay()];
	day = document.getElementById(dias);
	day.classList.add('activo');
}

function cargarDash(){
	tuobjetivo=document.getElementById('tuobjetivo');
	imgobjetivo = document.getElementById('imgobjetivo');
	objetivo = localStorage.getItem('objetivo');
	cuerpo = localStorage.getItem('cuerpo');//small, mid, fat ---> 1,2,3

		if (objetivo == 1) {
		tuobjetivo.innerHTML = "Perder Grasa";
		imgobjetivo.src = "media/perder.jpeg";
		}
		if (objetivo == 2) {
			tuobjetivo.innerHTML = "Aumentar Músculo";
			imgobjetivo.src = "media/aumentar.jpeg";
		}
		if (objetivo == 3) {
			tuobjetivo.innerHTML = "Mantener";
			imgobjetivo.src = "media/mantener.jpeg";
		}
	
}

function cargarDieta(){
	tudieta = document.getElementById('tudieta');
	objetivo = localStorage.getItem('objetivo');
	cuerpo = localStorage.getItem('cuerpo');//small, mid, fat ---> 1,2,3
	if (cuerpo == 1) {
		if (objetivo == 2) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Ectomorfo/Aumento.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Ectomorfo/Aumento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Ectomorfo/Aumento.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 3) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Ectomorfo/Mantenimiento.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Ectomorfo/Mantenimiento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Ectomorfo/Dieta.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}
	}

	if (cuerpo == 2) {
		if (objetivo == 1) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Mesomorfo/Baja.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Mesomorfo/Baja.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Mesomorfo/Baja.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 2) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Mesomorfo/Subir.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Mesomorfo/Subir.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Mesomorfo/Subir.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 3) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Mesomorfo/Mantenimiento.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Mesomorfo/Mantenimiento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Mesomorfo/Mantenimiento.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}
	}

	if (cuerpo == 3) {
		if (objetivo == 1) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Endomorfo/Baja.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Endomorfo/Baja.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Endomorfo/Baja.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 2) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Endomorfo/Aumento.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Endomorfo/Aumento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Endomorfo/Aumento.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 3) {
			tudieta.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='dietas/Endomorfo/Mantenimiento.pdf'>Dieta PDF</a>"+
				"<iframe src='dietas/Endomorfo/Mantenimiento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='dietas/Endomorfo/Mantenimiento.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}
	}		
}

function cargarEjercicio(){
	tuejercicio = document.getElementById('tuejercicio');
	objetivo = localStorage.getItem('objetivo');
	cuerpo = localStorage.getItem('cuerpo');//small, mid, fat ---> 1,2,3

		if (objetivo == 1) {
			tuejercicio.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='ejercicios/Endomorfo/Baja.pdf'>Ejercicio PDF</a>"+
				"<iframe src='ejercicios/Baja.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='ejercicios/Baja.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 2) {
			tuejercicio.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='ejercicios/Fuerza.pdf'>Ejercicio PDF</a>"+
				"<iframe src='ejercicios/Fuerza.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='ejercicios/Fuerza.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		if (objetivo == 3) {
			tuejercicio.innerHTML = 
			"Si el PDF no carga, puedes descargarlo dando click aqui: <a href='ejercicios/Mantenimiento.pdf'>Ejercicio PDF</a>"+
				"<iframe src='ejercicios/Mantenimiento.pdf#page=1' width='100%'' height='80%'' type='application/pdf'>"+
					"This browser does not support PDFs. Please download the PDF to view it: <a href='ejercicios/Mantenimiento.pdf'>Download PDF</a>"+
			"</iframe>";
			
		}

		
}