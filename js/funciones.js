var ip = "http://148.220.210.92:9999/realfit/";

function signPOP(){
	sign = document.getElementById("signup");
	btnsign = document.getElementById("btnSign");
	log = document.getElementById("login");
	btnlog = document.getElementById("btnLog");

	sign.style.opacity = "1";
	btnsign.style.opacity = "1";
	log.style.opacity = "0";
	btnlog.style.opacity = "0";
	log.style.zIndex = "0";
	btnlog.style.zIndex = "0";
	sign.style.zIndex = "999";
	btnsign.style.zIndex = "999";
}

function logPOP(){
	sign = document.getElementById("signup");
	btnsign = document.getElementById("btnSign");
	log = document.getElementById("login");
	btnlog = document.getElementById("btnLog");

	sign.style.opacity = "0";
	btnsign.style.opacity = "0";
	log.style.opacity = "1";
	btnlog.style.opacity = "1";
	sign.style.zIndex = "0";
	btnsign.style.zIndex = "0";
	log.style.zIndex = "999";
	btnlog.style.zIndex = "999";
}

function cargarContenido(){
	contenedor = document.getElementById("contenedor");
	contenedor.style.opacity="1";
}

function cargarIndex(){
	cont = document.getElementById("contIndex");
	cont.style.opacity="1";
	logoMain = document.getElementById("logoMain");
	logoMain.style.opacity="1";
}


function menu(){
	dmenu = document.getElementById("menu")
	if(dmenu.classList.contains("inactive")){
		dmenu.classList.remove("inactive");
		dmenu.classList.add("active");
	}else{
		dmenu.classList.remove("active");
		dmenu.classList.add("inactive");
	}
}

function ir(direccion){
	location.assign(direccion);
}

function openPop(pop){
	popUp = document.getElementById(pop);
	popUp.style.opacity="1";
	popUp.style.zIndex="999999";
	popUp.style.transform="translateX(0%)";
}

function closePop(pop){
	popUp = document.getElementById(pop);
	popUp.style.opacity="0";
	popUp.style.zIndex="-999999";
	popUp.style.transform="translateX(-1000%)";
}

function salir(){
	Sesion = localStorage.getItem('user');

	variableAjax = new XMLHttpRequest();
	variableAjax.open('POST', ip+'php/salir.php');

	variableAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	variableAjax.send('usuario=' + Sesion);

	variableAjax.onreadystatechange = function() {

		if (variableAjax.readyState == 4 && variableAjax.status == 200) {

				resultado = variableAjax.responseText;

				if (resultado == "ok") {
					window.location.assign('index.html');
					localStorage.removeItem('id');
					localStorage.removeItem('user');
					localStorage.removeItem('actividad');
					localStorage.removeItem('nombre');
					localStorage.removeItem('sexo');
						localStorage.removeItem('objetivo');
						localStorage.removeItem('edad');
						localStorage.removeItem('cuerpo');	
						localStorage.removeItem('peso');						
if (resultado == "ok") {
					window.location.assign('index.html');
				}
				}
					if (resultado == "noiniciada"){
						window.location.assign('index.html');
						localStorage.removeItem('id');
					localStorage.removeItem('user');
					localStorage.removeItem('actividad');
					localStorage.removeItem('nombre');
					localStorage.removeItem('sexo');
						localStorage.removeItem('objetivo');
						localStorage.removeItem('edad');
						localStorage.removeItem('cuerpo');	
						localStorage.removeItem('peso');							
if (resultado == "ok") {
					window.location.assign('index.html');
				}
					}
		}
	}	
}

function cargarMenu(){
	nombre = localStorage.getItem('nombre');
	user = localStorage.getItem('user');
	edad = localStorage.getItem('edad');
	peso = localStorage.getItem('peso');
	sexo = localStorage.getItem('sexo');
	document.getElementById('tunombre').innerHTML = nombre;
	document.getElementById('tuedad').innerHTML = edad+" años";
	document.getElementById('tupeso').innerHTML = peso+" kg";
	document.getElementById('tuuser').innerHTML = "@"+user;

	fotoperfil = document.getElementById('fotoperfil');

	if (sexo == 0) {
		fotoperfil.src = "media/male.jpg";
	}
	if (sexo == 1) {
		fotoperfil.src = "media/female.jpg";
	}
}

function validarFirst(){
	sexo = localStorage.getItem('sexo');
	actividad = localStorage.getItem('actividad');
	edad = localStorage.getItem('edad');
	peso = localStorage.getItem('peso');
	cuerpo = localStorage.getItem('cuerpo');
	objetivo = localStorage.getItem('objetivo');

	if (sexo == 0 && actividad == 0 && edad == 0 && peso == 0 && cuerpo == 0 && objetivo == 0  ) {
		location.assign('firstStep.html');
	}
}

function variable(){
	// Sesion = localStorage.getItem('user');

	// variableAjax = new XMLHttpRequest();
	// variableAjax.open('POST', ip+'php/sesion.php');

	// variableAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	// variableAjax.send('usuario=' + Sesion);

	// variableAjax.onreadystatechange = function() {

	// 	if (variableAjax.readyState == 4 && variableAjax.status == 200) {

	// 			resultado = variableAjax.responseText;

	// 			if (resultado == "ok") {	
									
	// 			}
	// 				if (resultado == "noiniciada"){
	// 					salir();
	// 				}
	// 	}
	// }
}

function variable2(){
	Sesion = localStorage.getItem('user');

	variableAjax = new XMLHttpRequest();
	variableAjax.open('POST', ip+'php/sesion.php');

	variableAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	variableAjax.send('usuario=' + Sesion);

	variableAjax.onreadystatechange = function() {

		if (variableAjax.readyState == 4 && variableAjax.status == 200) {

				resultado = variableAjax.responseText;

				if (resultado == "ok") {	
					location.assign('dashboard.html')				
				}
					if (resultado == "noiniciada"){
						
					}
		}
	}
}