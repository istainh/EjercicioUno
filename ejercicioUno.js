/**
 * Aqui dentro probar el codigo que quieran
 ara un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano*/

function probarEjercicio()
{
	var mascota;
	var pelaje;
	var edad;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperatura;
	var maximoPeso;
	var contadorMascotas=0;
	var contadorEnfermos=0;
	var promedioEnfermos;
	var nombreOtra;
	var minimoTemperatura;
	var maximoTemperatura;
	var animalSinpelo;
	var mascotaTemperatura;
	var contadorGatosperros=0;
	var porcentajeGatosperros;
	var contadorPeso;
	var minimoPeso;
	var continuar;
	var flagPerro=false;
	var flagTemperatura=false;
	var flagSinpelo=false;
	var enfermo;
	var internado;
	var adopcion;
	var menorEstado;
	var promedioPeso;
	var flagGato=false;
	var minimoGato;
	var minimoRaza;

	do 
	{

		for (;;) 
    	{
      		mascota=prompt("Ingrese el tipo de marcota: gato, perro u otra cosa.");
      		if (mascota=="gato"&&mascota=="perro"&&mascota=="otra cosa")
      		{
        		contadorMascotas=contadorMascotas+1;
        	 	break;
      		}
      		else
      		{	
        	alert("Mascota invalida.");
      		}
    	}

		pelaje=prompt("Ingrese el tipo de pelaje de la mascota.");
		while (pelaje!="corto"&&pelaje!="largo"&&pelaje!="sin pelo") 
		{
			pelaje=prompt("Pelaje invalido. Ingrese nuevamente el tipo de pelaje de la mascota.");
		}

		edad=prompt("Ingrese la edad en meses de la mascota.");
		edad=parseInt(edad);
		while (edad<0||edad>180) 
		{
			edad=prompt("Edad invalida. Ingrese nuevamente la edad de la mascota.");
			edad=parseInt(edad);
		}
	
		nombre=prompt("Ingrese el nombre de la mascota.");
		while (isNaN(nombre)==false||nombre==" ") 
		{
			nombre=prompt("Nombre invalido. Ingrese nuevamente el nombre de la mascota.");
		}
	
		raza=prompt("Ingrese la raza de la mascota.");
		while (isNaN(raza)==false||raza==" ")
		{
			raza=prompt("Raza invalida. Ingrese nuevamente la raza de la mascota.");
		}
	
		for (;;) 
    	{
			peso=prompt("Ingrese el peso de la mascota.");
			peso=parseInt(peso);
      		if (peso>0||peso<30)
      		{
        		contadorPeso=contadorPeso+1;
        	 	break;
      		}
      		else
      		{	
        	alert("Peso invalido.");
      		}
    	}

		estadoClinico=prompt("Ingrese el estado clínico de la mascota.");
		while (estadoClinico!="enfermo"&&estadoClinico!="abandonado"&&estadoClinico!="adopcion")
		{
			estadoClinico=prompt("Estado clínico invalido. Ingrese nuevamente el estado clínico de la mascota.");
		}
	
		temperatura=prompt("Ingrese la temperatura de la mascota.");
		while (temperatura)
		{
			temperatura=prompt("Temperatura invalida. Ingrese nuevamente la temperatura de la mascota.");
		}


		if (mascota=="perro")
		{
			contadorGatosperros=contadorGatosperros+1;
			if (flagPerro==false||peso>maximoPeso)
			{
				maximoPeso=peso;
				flagPerro=true;
			}
		}
		else if(mascota=="otra cosa") 
		{
			nombreOtra=nombre;
		}
		else if (mascota=="gato")
		{
			contadorGatosperros=contadorGatosperros+1;
			if (flagGato==false||peso<minimoPeso) 
			{
				minimoPeso=peso;
				minimoGato=nombre;
				minimoRaza=raza;
				flagGato=true;
			}

		}
	
		if (estadoClinico=="enfermo")
		{
			contadorEnfermos=contadorEnfermos+1;
		}
	
		if (flagTemperatura==false||temperatura>maximoTemperatura)
		{
			maximoTemperatura=temperatura;
			mascotaTemperatura=mascota;
			flagTemperatura=true;

		}
		else if (flagTemperatura==false||temperatura<minimoTemperatura) 
		{
			minimoTemperatura=temperatura;
			flagTemperatura=true;

			if (pelaje=="sin pelo")
			{
				animalSinpelo=mascota;
				flagSinpelo=true;
			}
		}

		switch (estadoClinico) {
			case "enfermo":
				enfermo++
				break;

			case "abandonado":
				internado++	
				break;
		
			default:
				adopcion++
				break;
		}


		continuar=confirm("¿Desea añadir otra mascota?");
	}	while (continuar=true)
	

	if (flagPerro==true)
	{
		alert(maximoPeso+" kilos tiene el perro más pesado ingresado.");
	}
	else if (flagSinpelo==true)
	{
		alert(animalSinpelo+" es el animal sin pelo con menor temperatura. Su temperatura es de "+minimoTemperatura+" °C.");
	}

	promedioEnfermos=contadorEnfermos/contadorMascotas;
	if (porcentajeEnfermos>0)
	{
		alert("El promedio de mascotas enfermas es de "+promedioEnfermos);
	}

	porcentajeGatosperros=contadorGatosperros*contadorMascotas/100;
	if (porcentajeGatosperros>0) 
	{
		alert("El porcentaje de gatos y perros con respecto a total de mascotas ingresadas es de "+porcentajeGatosperros+" %.");
	}

	if (enfermo<internado&&enfermo<adopcion) 
	{
		menorEstado=enfermo;
	}
	else if (internado<enfermo&&internado<adopcion) 
	{
		menorEstado=internado;
	}
	else 
	{
		menorEstado=adopcion;
	}

	promedioPeso=contadorPeso/contadorMascotas;
	alert("El promedio del peso de las mascotas es de "+promedioPeso+" kilos.");

	alert("El estado clinico con menor incidencia es "+menorEstado);

	alert("El nombre de la última mascota ingresada en la categoría otra cosa es "+nombreOtra);

	alert("El gato más liviano se llama "+minimoGato+" y su raza es "+minimoRaza);

	alert("El tipo de mascota que registró mayor temperatura fue "+mascotaTemperatura+" con una temperatura de "+maximoTemperatura+" °C.");
}