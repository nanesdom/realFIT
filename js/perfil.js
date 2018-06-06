var ip = "http://192.168.137.170:9999/realfit/";
function cargarPerfil(){

	cargarPeso();

	nombre = localStorage.getItem('nombre');
	objective = localStorage.getItem('objetivo');
	edad = localStorage.getItem('edad');
	peso = localStorage.getItem('peso');
	sexo = localStorage.getItem('sexo');
	
	document.getElementById('name').value = nombre;
	document.getElementById('age').value = edad;
	document.getElementById('weight').value = peso;
	document.getElementById('gender').value = sexo;
	document.getElementById('objective').value = objective;

	fotoperfil = document.getElementById('imgper');

	if (sexo == 0) {
		fotoperfil.src = "media/male.jpg";
	}
	if (sexo == 1) {
		fotoperfil.src = "media/female.jpg";
	}
}

function editUser(){
	nombre = document.getElementById('name');
	edad = document.getElementById('age');
	peso = document.getElementById('weight');
	sexo = document.getElementById('gender');
	objective = document.getElementById('objective');
	editUser1 = document.getElementById('editUser');
	saveUser1 = document.getElementById('saveUser');

	nombre.disabled=false;
	edad.disabled=false;
	peso.disabled=false;
	sexo.disabled=false;
	objective.disabled=false;

	objective.style.borderBottom="2px solid #648c01";
	sexo.style.borderBottom="2px solid #648c01";
	peso.style.borderBottom="2px solid #648c01";
	edad.style.borderBottom="2px solid #648c01";
	nombre.style.borderBottom="2px solid #648c01";

	editUser1.style.display="none";
	saveUser1.style.display="block";

	editUser1.style.opacity="0";
	saveUser1.style.opacity="1";
}

function saveUser(){
	nombre = document.getElementById('name');
	edad = document.getElementById('age');
	peso = document.getElementById('weight');
	sexo = document.getElementById('gender');
	objective = document.getElementById('objective');

	id = localStorage.getItem('id');
	user = localStorage.getItem('user');
	nombre1 = document.getElementById('name').value;
	edad1 = document.getElementById('age').value;
	peso1 = document.getElementById('weight').value;
	sexo1 = document.getElementById('gender').value;
	objective1 = document.getElementById('objective').value;

	editUser1 = document.getElementById('editUser');
	saveUser1 = document.getElementById('saveUser');

	localStorage.setItem('nombre', nombre1);
	localStorage.setItem('sexo', sexo1);
	localStorage.setItem('edad', edad1);
	localStorage.setItem('objetivo', objective1);
	localStorage.setItem('peso', peso1);

	editUserAjax = new XMLHttpRequest();
	editUserAjax.open('POST', ip+'php/editUser.php');

	editUserAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	editUserAjax.send('user=' + user + '&id=' + id + '&peso=' + peso1 + '&edad=' + edad1 + '&sexo=' + sexo1 + '&objetivo=' + objective1 + '&nombre=' + nombre1 );

	editUserAjax.onreadystatechange = function() {

		if (editUserAjax.readyState == 4 && editUserAjax.status == 200) {

				resultado = editUserAjax.responseText;

				if (resultado == "ok") {
					nombre.disabled=true;
					edad.disabled=true;
					peso.disabled=true;
					sexo.disabled=true;
					objective.disabled=true;

					objective.style.border="none";
					sexo.style.border="none";
					peso.style.border="none";
					edad.style.border="none";
					nombre.style.border="none";

					editUser1.style.display="block";
					saveUser1.style.display="none";

					editUser1.style.opacity="1";
					saveUser1.style.opacity="0";

					cargarPerfil();
					cargarMenu();
				}			
		}
	}


}


function cargarPeso(){
	id = localStorage.getItem('id');
	user = localStorage.getItem('user');
	pesoAjax = new XMLHttpRequest();
			pesoAjax.open('POST', ip+'php/cargarPeso.php');

			pesoAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			pesoAjax.send('id=' + id + '&user=' + user);

			pesoAjax.onreadystatechange = function() {

				if (pesoAjax.readyState == 4 && pesoAjax.status == 200) {

						var datas = JSON.parse(pesoAjax.responseText);		

						categories = [];
						Highcharts.chart('container', {
						    chart: {
						        type: 'line'
						    },
						    title: {
						        text: ''
						    },
						    xAxis: {
						        categories: categories
						    },
						    yAxis: {
						        title: {
						            text: 'Peso (kg)'
						        }
						    },
						    plotOptions: {
						        line: {
						            dataLabels: {
						                enabled: true
						            },
						            enableMouseTracking: false
						        }
						    },
						    series: [{
						        name: 'Tu evolución',
						        data: datas, 
						        color: 'green'
						    }]
						});										
				}				
			}
}