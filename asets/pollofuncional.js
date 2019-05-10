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
var losPollos = 1231231231230;
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

//1 = paredes - 2 = puerta -- 3 = ventanas.
var costecasa = [250, 200, 350];
var posecion = [false, false, false];
var poderPoseer = [true, false ,false];

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

var comprarParedes = function(){
	if (losPollos >= costecasa[0] && posecion[0] == false) {
		paredes.style.opacity = "1";
		losPollos-= costecasa[0];
		comprarParedesB.style.opacity = "0.2";
		posecion[0] = true;
		poderPoseer[1] = true;
		comprarVentanasB.style.opacity = "1";
	};
}
var comprarVentanas = function(){
	if (losPollos >= costecasa[2] && posecion[2] == false && poderPoseer[1] == true) {
		ventanas.style.opacity = "1";
		losPollos-= costecasa[2];
		comprarVentanasB.style.opacity = "0.2";
		posecion[2] = true;
		poderPoseer[1] = true;
	};
}
// var comprarPuerta = function(){
// 	if (losPollos >= costecasa[2] && posecion[2] == false && poderPoseer[1] == true) {
// 		ventanas.style.opacity = "1";
// 		losPollos-= costecasa[2];
// 		comprarVentanasB.style.opacity = "0.2";
// 		posecion[2] = true;
// 		poderPoseer[1] = true;
// 	};
// }

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


//MAIN
var main = function(){
	clickSumar();
	hornoSumar();
	farbricaSumar();
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