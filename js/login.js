var ip = "http://192.168.137.170:9999/realfit/";
function entrar(){
	usuario = document.getElementById('username');
	password = document.getElementById('password');
	//Validaciones
	if (usuario.value == "") {
		usuario.style.border= "none";
		usuario.style.backgroundColor="rgba(255, 0, 0, .1)";
		usuario.style.borderBottom= "3px solid #e74c3c";
		usuarioColocado  = false;

	}else{
		usuario.style.border= "none";
		usuario.style.backgroundColor="transparent";
		usuario.style.borderBottom= "1px solid #648c01";
		usuarioColocado  = true;
	}
	if (password.value == "") {
		password.style.border= "none";
		password.style.backgroundColor="rgba(255, 0, 0, .1)";
		password.style.borderBottom= "3px solid #e74c3c";
		passwordColocado  = false;
	}else{
		password.style.border= "none";
		password.style.backgroundColor="transparent";
		password.style.borderBottom= "1px solid #648c01";
		passwordColocado  = true;
	}

	//ENVIAR DATOS
	if (!desconectadoInternet) {
		if(usuarioColocado && passwordColocado){
			loginAjax = new XMLHttpRequest();
			loginAjax.open('POST', 'http://192.168.137.170:9999/realfit/php/login.php');

			loginAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			loginAjax.send('usuario=' + usuario.value + '&password=' + password.value);

			loginAjax.onreadystatechange = function() {

				if (loginAjax.readyState == 4 && loginAjax.status == 200) {

						respuesta = JSON.parse(loginAjax.responseText);						

						resultado = respuesta.logueado;


						if (resultado == "ok") {							
							localStorage.setItem('user', respuesta.username);
							localStorage.setItem('nombre', respuesta.nombre);
							localStorage.setItem('sexo', respuesta.sexo);
							localStorage.setItem('edad', respuesta.edad);
							localStorage.setItem('actividad', respuesta.actividad);
							localStorage.setItem('cuerpo', respuesta.cuerpo);
							localStorage.setItem('objetivo', respuesta.objetivo);
							localStorage.setItem('id', respuesta.id);
							localStorage.setItem('peso', respuesta.peso);
							window.location.assign('dashboard.html');						
						}

						if (resultado == "mal") {
							verMensaje("Usuario o contraseña incorrectos :(");
							usuario.style.border= "none";
							usuario.style.backgroundColor="rgba(255, 0, 0, .1)";
							usuario.style.borderBottom= "3px solid #e74c3c";
							password.style.border= "none";
							password.style.backgroundColor="rgba(255, 0, 0, .1)";
							password.style.borderBottom= "3px solid #e74c3c";
						}
				}				
			}			
		}else{
			verMensaje('Ups! Por favor completa los campos señalados :(');
			}
	}else{
		verMensaje('No puedes iniciar, revisa tu conexión a internet');
	}
}

function verMensaje(msj){
				mensaje = document.getElementById('mensaje');
				mensaje2 = document.getElementById('mensaje2');

				mensaje2.style.top="-80px";	
				
				mensaje2.style.background= "#e74c3c";

				mensaje.style.background= "#e74c3c";	
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";	
																		
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";
				},5000);
			}

			function verMensaje2(msj){
				mensaje = document.getElementById('mensaje2');
				mensaje2 = document.getElementById('mensaje');

				mensaje2.style.top="-80px";		
				

				mensaje.style.background="green";
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";				
													
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";					
				},5000);
			}

			function verMensaje3(mensaje){
				ventana = document.getElementById('ventana');
				ventana.style.transition=".5s all";			
				ventana.style.left="10%";
				ventana.innerHTML="<h3>"+mensaje+"</h3>"																						
			}

			window.addEventListener('offline', desconectado, true);
			window.addEventListener('online', conectado, true);
			var desconectadoInternet = false;

			function desconectado(){
				verMensaje('Por favor revisa tu conexion a internet');
				desconectadoInternet = true;
			}
			function conectado(){
				verMensaje2('Ya hay internet!');
				desconectadoInternet = false;
			}


function registrarme(){
	user = document.getElementById('user');
	pass = document.getElementById('pass');
	pass2 = document.getElementById('pass2');
	correo = document.getElementById('name');
	//Validaciones
	if (user.value == "") {
		user.style.border= "none";
		user.style.backgroundColor="rgba(255, 0, 0, .1)";
		user.style.borderBottom= "3px solid #e74c3c";
		userColocado  = false;

	}else{
		user.style.border= "none";
		user.style.backgroundColor="transparent";
		user.style.borderBottom= "1px solid #648c01";
		userColocado  = true;
	}

	if (pass.value == "") {
		pass.style.border= "none";
		pass.style.backgroundColor="rgba(255, 0, 0, .1)";
		pass.style.borderBottom= "3px solid #e74c3c";
		passColocado  = false;
	}else{
		pass.style.border= "none";
		pass.style.backgroundColor="transparent";
		pass.style.borderBottom= "1px solid #648c01";
		passColocado  = true;
	}

	if (pass2.value == "") {
		pass2.style.border= "none";
		pass2.style.backgroundColor="rgba(255, 0, 0, .1)";
		pass2.style.borderBottom= "3px solid #e74c3c";
		pass2Colocado  = false;
	}else{
		pass2.style.border= "none";
		pass2.style.backgroundColor="transparent";
		pass2.style.borderBottom= "1px solid #648c01";
		pass2Colocado  = true;
	}

	if (correo.value == "") {
		correo.style.border= "none";
		correo.style.backgroundColor="rgba(255, 0, 0, .1)";
		correo.style.borderBottom= "3px solid #e74c3c";
		correoColocado  = false;
	}else{
		correo.style.border= "none";
		correo.style.backgroundColor="transparent";
		correo.style.borderBottom= "1px solid #648c01";
		correoColocado  = true;
	}

	//ENVIAR DATOS
	if (!desconectadoInternet) {
		if(userColocado && passColocado && pass2Colocado && correoColocado){
			registroAjax = new XMLHttpRequest();
			registroAjax.open('POST', ip+'php/registro.php');

			registroAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			registroAjax.send('usuario=' + user.value + '&password=' + pass.value + '&nombre=' + correo.value + '&password2=' + pass2.value);

			registroAjax.onreadystatechange = function() {

				if (registroAjax.readyState == 4 && registroAjax.status == 200) {

						resultado = registroAjax.responseText;

						if (resultado == "ok") {
										loginAjax = new XMLHttpRequest();
						loginAjax.open('POST', 'http://192.168.137.170:9999/realfit/php/login.php');

						loginAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

						loginAjax.send('usuario=' + user.value + '&password=' + pass.value);

						loginAjax.onreadystatechange = function() {

							if (loginAjax.readyState == 4 && loginAjax.status == 200) {

									respuesta = JSON.parse(loginAjax.responseText);						

									resultado = respuesta.logueado;


									if (resultado == "ok") {							
										localStorage.setItem('user', respuesta.username);
										localStorage.setItem('nombre', respuesta.nombre);
										localStorage.setItem('sexo', respuesta.sexo);
										localStorage.setItem('edad', respuesta.edad);
										localStorage.setItem('actividad', respuesta.actividad);
										localStorage.setItem('cuerpo', respuesta.cuerpo);
										localStorage.setItem('objetivo', respuesta.objetivo);
										localStorage.setItem('id', respuesta.id);
										localStorage.setItem('peso', respuesta.peso);
										window.location.assign('dashboard.html');						
									}

									if (resultado == "mal") {
										verMensaje("Usuario o contraseña incorrectos :(");
										usuario.style.border= "none";
										usuario.style.backgroundColor="rgba(255, 0, 0, .1)";
										usuario.style.borderBottom= "3px solid #e74c3c";
										password.style.border= "none";
										password.style.backgroundColor="rgba(255, 0, 0, .1)";
										password.style.borderBottom= "3px solid #e74c3c";
									}
							}				
						}}

						if (resultado == "error") {
							verMensaje('Ocurrió un error, inténtalo más tarde...');
						}

						if (resultado == "contraseña") {
							verMensaje('Las contraseñas no coinciden');
							pass.style.border= "none";
							pass.style.backgroundColor="rgba(255, 0, 0, .1)";
							pass.style.borderBottom= "3px solid #e74c3c";
							pass2.style.border= "none";
							pass2.style.backgroundColor="rgba(255, 0, 0, .1)";
							pass2.style.borderBottom= "3px solid #e74c3c";
						}else{
							pass.style.border= "none";
							pass.style.backgroundColor="transparent";
							pass.style.borderBottom= "1px solid #648c01";
							pass2.style.border= "none";
							pass2.style.backgroundColor="transparent";
							pass2.style.borderBottom= "1px solid #648c01";
						}

						if (resultado == "existe") {
							verMensaje('El usuario ya existe');
							user.style.border= "none";
							user.style.backgroundColor="rgba(255, 0, 0, .1)";
							user.style.borderBottom= "3px solid #e74c3c";
						}else{
							user.style.border= "none";
							user.style.backgroundColor="transparent";
							user.style.borderBottom= "1px solid #648c01";
						}
						
				}
			}					
	}else{
			verMensaje('Ups! Por favor completa los campos señalados :(');
			}
	}else{
		verMensaje('No puedes iniciar, revisa tu conexión a internet');
	}
}