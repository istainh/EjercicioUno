// 1. El alumno deberá ingresar:
// Nombre del alumno
// Carrera (Programación, Psicología, Diseño gráfico)
// Estado de la carrera: en curso-abandono-finalizado
// Sexo (femenino-masculino-nobinario)
// Edad (18 o más)
// Nota (entre 1 y 10)
// 2. Se desconoce la cantidad de alumnos que se ingresaran.
// 3. Se deberán validar los casos resaltados en negrita.
// 4. El programa deberá informar a través del documento html:
// A. Cantidad total de alumnos de cada carrera.
// B. Cantidad total de mujeres que cursan la carrera de programación
// C. Cantidad de alumnos no binarios.
// D. Promedio de notas de los alumnos finalizantes.
// E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
// F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
// G. ¿Cuál es la carrera que tiene más alumnos?



function probarEjercicio()
{
	var nombre;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var repetir;
	var cantidadAlumnos=0;
	var alumnosprogramacion=0;
	var alumnospsicologia=0;
	var alumnosdiseño=0;
	var mujeresprogramadoras;
	var alumnosnobinarios=0;
	var notas=[];
	var suma=0;
	var promedio;
	var carreraMax;


	do 
	{
		nombre=prompt("Ingrese el nombre del alumno.");
		
		while (nombre==" ")
		{
			alert("Nombre invalido.");
			nombre=prompt("Ingrese el nombre del alumno.");
			if (nombre!=" ") 
			{
				nombre=nombre;
			}
		}

		carrera=prompt("Ingrese la carrera.");
		while (carrera!="programacion"&&carrera!="psicologia"&&carrera!="diseño grafico")
		{
			alert("Carrera invalida.");
			carrera=prompt("Ingrese la carrera.");
			if (carrera=="programacion"&&carrera=="psicologia"&&carrera=="diseño grafico") 
			{
				break;
			}
		}

		estadoCarrera=prompt("Ingrese el estado de la carrera.");
		while (estadoCarrera!="en curso"&&estadoCarrera!="abandonado"&&estadoCarrera!="finalizado")
		{
			alert("Estado de la carrera invalida.");
			estadoCarrera=prompt("Ingrese el estado de la carrera.");
			if (estadoCarrera=="en curso"&&estadoCarrera=="abandonado"&&estadoCarrera=="finalizado")
			{
				break;;
			}
		}

		sexo=prompt("Ingrese el sexo.");
		while (sexo!="femenino"&&sexo!="masculino"&&sexo!="nobinario")
		{
			alert("Sexo invalido.");
			sexo=prompt("Ingrese el sexo.");
			if (sexo=="femenino"&&sexo=="masculino"&&sexo=="nobinario") 
			{
				sexo=sexo;
			}
		}

		for ( ; ; )
		{
			edad=prompt("Ingrese la edad.");
			edad=parseInt(edad);
			if (edad>16&&edad<40) 
			{
				break;
			}
			else 
			{
				alert("Edad invalida.");
			}

		}

		for (; ;)
		{
			nota=prompt("Ingrese la nota.");
			nota=parseInt(nota);
			if (nota>1&&nota<11) 
			{
				notas.push(nota);
				break;
			}
			else 
			{
				alert("Nota invalida.");
			}
		}
		
		switch (carrera) {
			case "programacion":
				alumnosprogramacion=alumnosprogramacion+1;
				
				switch (sexo) {
					case "femenino":
						mujeresprogramadoras=mujeresprogramadoras+1;
						break;
				}
			break;

			case "diseño grafico":
				alumnosdiseño=alumnosdiseño+1;
				break;

			case "psicologia":
				alumnospsicologia=alumnospsicologia+1;
				break;	
		}
	
		switch (sexo) {
			case "nobinario":
				alumnosnobinarios=alumnosnobinarios+1;
				break;
		}


		cantidadAlumnos=cantidadAlumnos+1;
		repetir=confirm("¿Desea añadir a otro alumno?");
	}while (repetir==true)

	alert("La cantidad de alumnos ingresados son "+cantidadAlumnos);
	
	for (var i=0;i<notas.length;i++)
	{
		suma+=notas[i];
	}
	promedio=suma/cantidadAlumnos;
	alert("La nota promedio es "+promedio);
	
	carreraMax=Math.max(alumnosprogramacion, alumnosdiseño, alumnospsicologia);
	alert("La carrera con mayor cantidad de alumnos tiene "+carreraMax);

	alert("La cantidad de alumnos nobinarios "+alumnosnobinarios);
}
		