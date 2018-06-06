var ip = "http://148.220.210.92:9999/realfit/";
function cargarFirst(){
	steps = document.getElementById("steps");
	steps.style.opacity="1";
}

function step2(){
	gender1 = document.getElementById("gender").value;
	gender = document.getElementById("gender");
	weight1 = document.getElementById("weight").value;
	weight = document.getElementById("weight");
	age1 = document.getElementById("age").value;
	age = document.getElementById("age");
	activity1 = document.getElementById("activity").value;
	activity = document.getElementById("activity");

	gender2 = false;
	weight2 = false;
	age2 = false;
	activity2 = false;

	if(gender1 =! null && gender1 != ""){
		gender2 = true;
		gender.style.background = "transparent";
		gender.style.borderColor = "#648c01";
	}
	else{
		gender.style.background = "rgba(255,0,0,.5)";
		gender.style.borderColor = "red";
	}

	if(weight1 =! null && weight1 != ""){
		weight2 = true;
		weight.style.background = "transparent";
		weight.style.borderColor = "#648c01";
	}
	else{
		weight.style.background = "rgba(255,0,0,.5)";
		weight.style.borderColor = "red";
	}

	if(age1 =! null && age1 != ""){
		age2 = true;
		age.style.background = "transparent";
		age.style.borderColor = "#648c01";
	}
	else{
		age.style.background = "rgba(255,0,0,.5)";
		age.style.borderColor = "red";
	}

	if(activity1 =! null && activity1 != ""){
		activity2 = true;
		activity.style.background = "transparent";
		activity.style.borderColor = "#648c01";
	}
	else{
		activity.style.background = "rgba(255,0,0,.5)";
		activity.style.borderColor = "red";
	}

	if (gender2 && weight2 && age2 && activity2) {
		step1 = document.getElementById("step1");
		step2 = document.getElementById("step2");
		progress = document.getElementById("progress");

		step1.style.opacity="0";
		step1.style.zIndex="0";
		step2.style.opacity="1";
		step2.style.zIndex="999";

		progress.style.width="33.3%";
		progress.innerHTML = "33.3%";
	}
	else{
		alert("Fill all the fields, please.");
	}

	

}

function step3(valor){
	step3 = document.getElementById("step3");
	step2 = document.getElementById("step2");
	body = document.getElementById("body");
	progress = document.getElementById("progress");

	step2.style.opacity="0";
	step2.style.zIndex="0";
	step3.style.opacity="1";
	step3.style.zIndex="999";

	progress.style.width="66.6%";
	progress.innerHTML = "66.6%";
	body.value=valor;

	if (valor == 1) {
		lose = document.getElementById('lose');
		lose.style.display = "none";
	}
}

function step4(valor){
	step3 = document.getElementById("step3");
	step4 = document.getElementById("step4");
	objective = document.getElementById("objective");
	progress = document.getElementById("progress");
	welcome = document.getElementById("welcome");
	need = document.getElementById("need");

	need.style.opacity="0";
	welcome.style.opacity="0";
	step3.style.opacity="0";
	step3.style.zIndex="0";
	step4.style.opacity="1";
	step4.style.zIndex="999";

	progress.style.width="100%";
	progress.innerHTML = "Completed...";
	objective.value=valor;
}
function start(){
	id = localStorage.getItem('id');
	user = localStorage.getItem('user');
	peso = document.getElementById('weight').value;
	actividad = document.getElementById('activity').value;
	sexo = document.getElementById('gender').value;
	edad = document.getElementById('age').value;
	cuerpo = document.getElementById('body').value;
	objetivo = document.getElementById('objective').value;

	localStorage.setItem('peso', peso);
	localStorage.setItem('actividad', actividad);
	localStorage.setItem('sexo', sexo);
	localStorage.setItem('edad', edad);
	localStorage.setItem('objetivo', objetivo);
	localStorage.setItem('cuerpo', cuerpo);

	firstAjax = new XMLHttpRequest();
	firstAjax.open('POST', ip+'php/start.php');

	firstAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	firstAjax.send('user=' + user + '&id=' + id + '&peso=' + peso + '&edad=' + edad + '&sexo=' + sexo + '&objetivo=' + objetivo + '&cuerpo=' + cuerpo + '&actividad=' + actividad);

	firstAjax.onreadystatechange = function() {

		if (firstAjax.readyState == 4 && firstAjax.status == 200) {

				resultado = firstAjax.responseText;

				if (resultado == "ok") {
					window.location.assign('dashboard.html');
				}			
		}
	}
}