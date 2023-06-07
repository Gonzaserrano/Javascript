var cantidadDias = 0;
var cantidadHabitaciones = 0;
var precioHotel;
const personas = [];
const ubicacion = [

{ abreviatura: "MDP", destino: "Mar del plata", precio: 15000 },

{ abreviatura: "BRC", destino: "Bariloche", precio: 30000 },

{ abreviatura: "VCP", destino : "Villa carlos paz", precio: 17000 },

{ abreviatura: "VGB", destino : "Villa general belgrano", precio: 23000 },

{ abreviatura: "USH", destino: "Ushuaia", precio: 39000 },

{ abreviatura: "MDZ", destino: "Mendoza", precio: 23000 },

{ abreviatura: "TCM", destino: "Tucuman", precio: 15000 },

{ abreviatura: "IGZ", destino: "Iguazu", precio: 20000 },

{ abreviatura: "PMC", destino: "Purmamarca", precio: 15000 }

];

alert("Bienvenido/a para planificar sus proximas vacaciones.");

do{

    opcion = prompt("Bienvenido/a \nOpcion 1. Seleccione destino:  \nOpcion 2. Seleccione cantidad de dias: \nOpcion 3. Datos de los huespedes: \nOpcion 4. Siguiente");
    
    switch (opcion){
        case '1':
            destino();
            break;
        case '2':
            dias();
            break;
        case '3':
            huespedes();
            break;
        case '4':

            if(precioHotel <= -1 ){
                alert("No se ha seleccionado el destino.")
            }

            if(cantidadDias <= 0 ){
                alert("No se ha seleccionado la cantidad de dias a hospedarse.")
            }

            if(cantidadHabitaciones <=0 ){
                alert("No se ha seleccionado de huespedes.")
            }

            else{
                siguiente();
            }
            break;
        default:
            alert("La opcion ingresada es incorrecta.");
            break;
    }

}while(opcion.toUpperCase() != "Salir")


function destino(){

    alert("Seleccione el destino escribiendo su abreviatura:");

    do{


    
        /*var listaLugares = "";

        for( var i = 0; i < ubicacion.length; i++){ 
        listaLugares  += ubicacion[i].abreviatura + " . " + ubicacion[i].destino + "\nPrecio: $" + ubicacion[i].precio + "\n";

        }*/
        function listas(ubicacion){
        var lista = "";
        ubicacion.forEach(function(lugar){
            lista += lugar.abreviatura + " . " + lugar.destino + "\nPrecio: $" + lugar.precio + "\n";
        });

        return lista;
        }

        var listaLugares = listas(ubicacion);

        var nombreLugar = prompt ("Lista de Lugares:\n\n" + listaLugares + "\n Salir" );
    
        var lugarEncontrado; 

        for (var i = 0; i < ubicacion.length; i++) { 

            if (ubicacion[i].abreviatura === nombreLugar.toUpperCase()){ 

            lugarEncontrado = ubicacion[i]; 

            break; 
            } 
        } 

        if (lugarEncontrado) {

            alert("Ha seleccionado " + lugarEncontrado.destino );

            precioHotel = i;

            break;
        }

        else if (nombreLugar.toUpperCase() === "SALIR" ){

        break;
        }

        else { 

        alert("El producto no se encontró en la lista."); 
        } 

    }while(nombreLugar != "SALIR")

}

function dias(){

    cantidadDias = parseInt(prompt("Ingrese la cantidad de dias que desee hospedarse"));

}

function huespedes(){
    
    alert("Se pueden hospedar hasta 4 huespedes por habitacion.")

    var cantidadHuespedes = parseInt(prompt("Ingrese la cantidad de huéspedes:"));
    
    if ( cantidadHuespedes <= 0 ) {
        alert("La cantidad de huéspedes ingresada no es válida.");
        return;
    }
    
    cantidadHabitaciones = Math.ceil(cantidadHuespedes / 4);
    
    alert("Para " + cantidadHuespedes + " huéspedes, se necesitarán " + cantidadHabitaciones + " habitaciones.");
    }

function siguiente(){
    do{
        var segundaOpcion = prompt("Opcion 1. Precio total de la estadia:  \nOpcion 2. Datos para la reserva: \nOpcion 3. Metodo de pago: \nOpcion 4. Volver");
        switch(segundaOpcion){
            case '1':
                precioEstadia()
                break;
            case '2':
                reserva();
                break;
            case '3':
                break;
            case '4':
                return;
            default:
                alert("La opcion ingresada es incorrecta.");
                break;
        }
    
    }while(segundaOpcion.toUpperCase() != "Salir")
}    

function precioEstadia(){

    var precioTotal = ubicacion[precioHotel].precio * cantidadHabitaciones * cantidadDias;

    alert("el precio total de la estadia es: $"+ precioTotal);

}

function reserva(){
    switch(opcionReserva){
        case'1':
            nombreApellido = prompt("Igrese nombre y apellido: ");
            break;
        case '2':
            email = prompt("Ingrese direccion de E-mail:");
            break;
        case '3':
            telefono = prompt("Ingrese numero de telefono:");
            break;
        case '4':
            dni = prompt("Ingrese numero de documnto:");  
            break;
        default:
            alert("La opcion ingresada es incorrecta.");
            break;
    }
}

