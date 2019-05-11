// Variables.
var botonClick = document.getElementById('botonClick');
var botonHorno = document.getElementById('botonHorno');
var imgPollo = document.getElementById('imgPollo');
var pollosCant = document.getElementById('pollosCant');
var inventario = document.getElementById('inventario');
var botonFabrica = document.getElementById('botonFabrica');
var mejorarCBoton = document.getElementById('mejorarCBoton');
var costo = document.getElementById('costo');
var costo2 = document.getElementById('costo2');
var mejorarHBoton = document.getElementById('mejorarHBoton');
var costo3 = document.getElementById('costo3');
var mejorarFBoton = document.getElementById('mejorarFBoton');

var costeMejoras = [1000, 5000, 10000];

// Variables Globales.
var fps = 1;
var fps2 = 30;
var losPollos = 0;
var precios = [50, 150, 500];
var produccion = [1, 2, 5];
var cantidadInventario = [0, 0, 0];
var ganancia;
var gananciaHorno;
var gananciaFabrica;
var ps = document.getElementById('ps');

//------------
var comprarParedesB = document.getElementById('comprarParedesB');
var comprarVentanasB = document.getElementById('comprarVentanasB');
var comprarPuertaB = document.getElementById('comprarPuertaB');
var paredes = document.getElementById('paredes');
var puerta = document.getElementById('puerta');
var ventanas = document.getElementById('ventanas');
var beneficios;
var beneficiosDos;
var beneficiosTres;
var mejorasactuales = document.getElementById('mejorasactuales');
//0 = paredes, 1 = ventana 2 = puerta.
var costecasa = [250, 200, 350];
var posecion = [false, false, false];
var poderPoseer = [true, false ,false];

var mejoras = document.getElementById('mejoras');
var mejorasBoton = document.getElementById('mejorasBoton');
var mejorasBotonC = document.getElementById('mejorasBotonC');
var poder = 0;

var tit0 = document.getElementById('tit0');
var tit1 = document.getElementById('tit1');
var polloHijo = document.getElementById('polloHijo');

var abrirMejoras = function(){
	if (poder == 0) {
		mejoras.style.marginLeft = "10px";
		mejorasBoton.style.opacity = "0";
		mejorasBotonC.style.opacity = "1";
		poder = 1;
	};
}

var cerrarMejoras = function(){
	if (poder == 1) {
		mejoras.style.marginLeft = "-130px";
		mejorasBoton.style.opacity = "1";
		mejorasBotonC.style.opacity = "0";
		poder = 0;
	};
}
//Funciones de compra.

var comprarClick = function(){
	if (losPollos >= precios[0] ) {
		cantidadInventario[0]++;
		losPollos -= precios[0];
		losPollos = parseInt(losPollos);
		precios[0] = parseInt(precios[0] + precios[0] * 107) / 100;
		botonClick.innerHTML = "Click (" + precios[0] + ")";
	};
}

var comprarHorno = function(){
	if (losPollos >= precios[1]) {
	cantidadInventario[1]++;
	losPollos -= precios[1];
	losPollos = parseInt(losPollos);
	precios[1] = parseInt(precios[1] + precios[1] * 107) / 100;
	botonHorno.innerHTML = "Horno (" + precios[1] + ")";
	};
}
var comprarFabrica = function(){
	if (losPollos >= precios[2]) {
	cantidadInventario[2]++;
	losPollos -= precios[2];
	losPollos = parseInt(losPollos);
	precios[2] = parseInt(precios[2] + precios[2] * 107) / 100;
	botonFabrica.innerHTML = "Fabrica (" + precios[2] + ")";
	};
}

//Comprar la casa.
//0 = paredes, 1 = ventana 2 = puerta.
// var costecasa = [250, 200, 350];
// var posecion = [false, false, false];
// var poderPoseer = [true, false ,false];

var comprarParedes = function(){
	if (losPollos >= costecasa[0] && posecion[0] == false) {
		paredes.style.opacity = "1";
		losPollos-= costecasa[0];
		comprarParedesB.style.opacity = "0.5";
		posecion[0] = true;
		poderPoseer[1] = true;
		poderPoseer[2] = true;
		comprarVentanasB.style.opacity = "1";
		comprarPuertaB.style.opacity = "1";
		produccion[0] += 0.25;
		beneficios = "Click + 0.25 pollos.<br /><i>(Paredes)</i>.<br /><br />";
		mejorasactuales.innerHTML = beneficios;
	};
}
var comprarVentanas = function(){
	if (losPollos >= costecasa[1] && posecion[1] == false && poderPoseer[1] == true) {
		ventanas.style.opacity = "1";
		losPollos-= costecasa[1];
		comprarVentanasB.style.opacity = "0.5";
		posecion[1] = true;
		produccion[0] += 0.25;
		beneficiosDos = "Click + 0.25 pollos.<br /><i>(Ventanas)</i>.<br /><br />";
			if (posecion[1] == true && posecion[2] == true) {
					mejorasactuales.innerHTML = beneficios + beneficiosDos + beneficiosTres;
			}else {
				mejorasactuales.innerHTML = beneficios + beneficiosDos;
			}
		// mejorasactuales.innerHTML = beneficios + beneficiosDos;
		// poderPoseer[2] = true;
	};
}
 var comprarPuerta = function(){
 	if (losPollos >= costecasa[2] && posecion[2] == false && poderPoseer[2] == true) {
		puerta.style.opacity = "1";
		losPollos-= costecasa[2];
		comprarPuertaB.style.opacity = "0.5";
		posecion[2] = true;
		produccion[0] += 0.50;
		beneficiosTres = "Click + 0.50 pollos.<br /><i>(Puerta)</i>.<br /><br />";
			if (posecion[1] == true && posecion[2] == true) {
					mejorasactuales.innerHTML = beneficios + beneficiosDos + beneficiosTres;
			}else {
					mejorasactuales.innerHTML = beneficios + beneficiosTres;
			};
		// mejorasactuales.innerHTML = beneficiosDos + beneficiosTres;
		// poderPoseer[3] = true;
	};
}

//Funciones.

var sumarPollo = function(){
	losPollos++;
}

var clickSumar = function(){
	var ganancia = cantidadInventario[0] * produccion[0];
	losPollos += ganancia;
}

var hornoSumar = function(){
	var gananciaHorno = cantidadInventario[1] * produccion[1];
	losPollos += gananciaHorno;
}

var farbricaSumar = function(){
	var gananciaFabrica = cantidadInventario[2] * produccion[2];
	losPollos += gananciaFabrica;
}



//Sub Main xd.
var render = function(){
	pollosCant.innerHTML = "Pollos: " + losPollos;
	inventario.innerHTML = "Click: " + cantidadInventario[0] + "<br />" + " Horno: " + cantidadInventario[1] + "<br />" + "Fabricas: " + cantidadInventario[2];
	ps.innerHTML = "P/S: " + ( ( produccion[0] * cantidadInventario[0] ) + ( produccion[1] * cantidadInventario[1] ) + ( produccion[2] * cantidadInventario[2] ) );
}


//Funciones de mejora.
var mejorarClick = function(){
	if (losPollos >= costeMejoras[0]) {
		produccion[0]++;
		losPollos -= costeMejoras[0];
		costeMejoras[0] = (costeMejoras[0] + costeMejoras[0] * 3);
		costo.innerHTML = costeMejoras[0] + " Pollos";

	};
}

var mejorarHorno = function(){
	if (losPollos >= costeMejoras[1]) {
		produccion[1] += 2;
		losPollos -= costeMejoras[1];
		costeMejoras[1] = (costeMejoras[1] + costeMejoras[1] * 3);
		costo2.innerHTML = costeMejoras[1] + " Pollos";

	};
}

var mejorarFabrica = function(){
	if (losPollos >= costeMejoras[2]) {
		produccion[2] += 5;
		losPollos -= costeMejoras[2];
		costeMejoras[2] = (costeMejoras[2] + costeMejoras[2] * 3);
		costo3.innerHTML = costeMejoras[2] + " Pollos";

	};
}

//DESBLOQUEO
var logros = [false, false];
var mejorasFamilia = document.getElementById('mejorasFamilia');
var desbloqhijo = function(){
	if(losPollos >= 1000 && logros[0] == false){
		polloHijo.style.opacity = "1";
		tit0.innerHTML = "Familia.";
		tit0.style.opacity = "1";
		tit1.innerHTML = "Hijo.";
		tit1.style.opacity = "1";
		produccion[0] += 1;
		produccion[1] += 1;
		produccion[2] += 1;
		logros[0] = true;
		mejorasFamilia.innerHTML = "+1 Pollo para cada objeto.";
		mejorasFamilia.style.opacity = "1";
	};
}

//MAIN
var main = function(){
	clickSumar();
	hornoSumar();
	farbricaSumar();
	desbloqhijo();
}

var main2 = function(){
	render();
}
setInterval(main, 1000/fps);
setInterval(main2, 1000/fps2);



//Eventos.
imgPollo.addEventListener("click", sumarPollo);
botonClick.addEventListener("click", comprarClick);
botonHorno.addEventListener("click", comprarHorno);
botonFabrica.addEventListener("click", comprarFabrica);
mejorarCBoton.addEventListener("click", mejorarClick);
mejorarHBoton.addEventListener("click", mejorarHorno);
mejorarFBoton.addEventListener("click", mejorarFabrica);

comprarParedesB.addEventListener("click", comprarParedes);
comprarVentanasB.addEventListener("click", comprarVentanas);
comprarPuertaB.addEventListener("click", comprarPuerta);

mejorasBoton.addEventListener("click", abrirMejoras);
mejorasBotonC.addEventListener("click", cerrarMejoras);
