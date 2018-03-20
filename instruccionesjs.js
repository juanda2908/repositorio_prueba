
instrucciones javascript

cuando el script se hace en el heat, se ejecuta lo que esta dentro del 
script y  se ejecuta el body, es decir la pagina web.
en cambio si esta en el body no seria simultaneamente.


admin
Uq-4GIt3M


document.write("texto");  	//escribimos un texto
---------------------------------------------------------------
alert("hola mundo");  		//alert solo se abre en primer plano y no 
							//	ejecuta nada en segundo plano
-----------------------------------------------------------------
<script src="nombre.js"></script> /// para enlazar un archivo js externo a
 										//donde estamos trabajando
-----------------------------------------------------------------
## para usar los efectos de jquery primero llamamos a jquery

<script src="Jquery/jquery-1.6.3.min.js">  //ruta de jquery

$(function(){ 

		$("body").hide().fadeIn(milseg);}) // para dar efecto
											//de desvanecimiento a completo
-------------------------------------------------------------------
 en java script hay que declarar primero las variables y luego se inician

 var precio,cantidad,total

 precio=5
 cantidad=2
 total= precio*cantidad

 --------------------------------------------------------------------

 el signo (+) tiene dos utilidades, el de operacion y el de concatenar.
 alert("el total de su compra es: " + total);

 --------------------------------------------------------------------


 number(...)  // transforma a valor numerico aquel texto que este entre sus
 					parentesis

---------------------------------------------------------------------

// con esto conseguimos escribir codigo html con datos alamcenados en variales
 
 document.write("<p>");    


	 document.write(nombre+" "+apellido);

	 document.write("</p>");

-----------------------------------------------------------------------

 // para ingresar datos dinamicamente usamos la funcion prompt.
 //	cuando hacemos uso del prompt aparecera un recuadro con el 
 //	cursor parpadeando esperando a que se ingrese un dato.


 var nombre= prompt("introduce tu nombre, por favor. "); // ingresar datos


------------------------------------------------------------------------
operadores de incremento/decremento

 += ------------- incrementa en x el valor de una variable
 -= ------------- decrementa en x el valor de una variable
 *= ------------- multiplica en x el valor de una variable
 /= ------------- divide en x el valor de una variable
 ++ ------------- incrementa en x el valor de una variable
 --               decrementa en x el valor de una variable

var nombre= prompt("introduce tu nombre, por favor. ");
	 var apellido=prompt("introduce tu apellido.");
	 var edad= prompt("introduce tu edad");
	 var restando= prompt("¿cuantos años deseas quitarte?");

	 edad-= restando;  // restando sera el valor x que decrementara

-------------------------------------------------------------------------------
// los arrays o vectores se hacen de la siguiente manera

	var articulos=["articulo1","articulo2","articulo3"];

// para mostrar en en la pagina un articulo especifico en un parrafo
// hacemos un scrip en el body de la pagina señalando que 
//articulo queremos.

//  <strong> </strong> con oesto colocamos el articulo 1 en negrita.


	document.write("<p> el primer articulo es <strong>"); // esto va sobre el body

    document.write(articulos[0] + "</strong></p>"); // esto va sobre el body

--------------------------------------------------------------------------------

//programacion orientada a objetos: un objeto posee caracteristicas y
// funcionalidades, por ejemplo un pushbutton donde se presiona aceptar.

// metodos= que puede hacer el objeto;
//propiedades= como es;


la sintaxis para la creacion y modificacion de un objeto es:

	nombre_de_objeto.Propiedad_a_modificar="valor";


// nomenclatura del punto
// 	se utiliza la jerarquia y el operador punto:
//		ejemplo:
//			*document.write();
//			*window.alert()	;
//			*nombre_del_boton.style.width="500px";	// modifica el ancho de un boton
//			*boton.style.backgroundColor="red"; 	// modifica color de fondo del boton
//			*boton.focus();
//




