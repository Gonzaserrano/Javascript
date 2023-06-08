var hotel = {};
var persona = {};
let tarjeta = {};
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

    var opcion = prompt("Bienvenido/a \nOpcion 1. Seleccione destino:  \nOpcion 2. Seleccione cantidad de dias: \nOpcion 3. Seleccione la cantidad de huespedes: \nOpcion 4. Siguiente");
    
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

            if(hotel.precioHotel == null ){
                alert("No se ha seleccionado el destino.");
            }

            if(hotel.cantidadDias == null ){
                alert("No se ha seleccionado la cantidad de dias a hospedarse.");
            }

            if(hotel.cantidadHabitaciones == null ){
                alert("No se ha seleccionado de huespedes.");
            }

            else{
                siguiente();
            }
            break;
        default:
            alert("La opcion ingresada es incorrecta.");
            break;
    }

}while(opcion != null)


function destino(){

    alert("Seleccione el destino escribiendo su abreviatura:");

    do{

        var listaLugares = "";

        for( var i = 0; i < ubicacion.length; i++){
        listaLugares  += ubicacion[i].abreviatura + " . " + ubicacion[i].destino + "\nPrecio: $" + ubicacion[i].precio + "\n";

        }

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

            hotel.precioHotel = lugarEncontrado.precio;


            break;
        }

        else if (nombreLugar.toUpperCase() === "SALIR" ){

        break;
        }

        else { 

        alert("El producto no se encontró en la lista."); 
        } 

    }while(nombreLugar)

}


function dias(){

    hotel.cantidadDias = parseInt(prompt("Ingrese la cantidad de dias que desee hospedarse"));

}

function huespedes(){
    
    alert("Se pueden hospedar hasta 4 huespedes por habitacion.")

    var cantidadHuespedes = parseInt(prompt("Ingrese la cantidad de huéspedes:"));
    
    if ( cantidadHuespedes <= 0 ) {
        alert("La cantidad de huéspedes ingresada no es válida.");
        return;
    }
    
    hotel.cantidadHabitaciones = Math.ceil(cantidadHuespedes / 4);
    
    alert("Para " + cantidadHuespedes + " huéspedes, se necesitarán " + hotel.cantidadHabitaciones + " habitaciones.");
    }

function siguiente(){

    do{
        var segundaOpcion = prompt("Opcion 1. Precio total de la estadia:  \nOpcion 2. Datos para la reserva: \nOpcion 3. Metodo de pago: \nOpcion 4. Volver");
        switch(segundaOpcion){
            case '1':
                precioEstadia();
                break;
            case '2':
                reserva();
                break;
            case '3':
                metodoPago();
                break;
            case '4':
                return;
            default:
                alert("La opcion ingresada es incorrecta.");
                break;
        }
    
    }while(segundaOpcion)
}    

function precioEstadia(){

    var precioTotal = hotel.precioHotel * hotel.cantidadHabitaciones * hotel.cantidadDias;

    alert("el precio total de la estadia es: $"+ precioTotal);

}

function reserva(){

    do{

        var opcionReserva = prompt("Opcion 1. Nombre y Apellido:  \nOpcion 2. Direccion E-mail: \nOpcion 3. Numero de telefono: \nOpcion 4. Numero de documento: \nOpcion 5. Datos de la tarjeta a pagar: \nOpcion 6. Volver");

        switch(opcionReserva){
            case '1':
                persona.nombre = prompt("Ingrese nombre: ");
                persona.apellido = prompt("Ingrese apellido: ");
                break;
            case '2':
                persona.email = prompt("Ingrese direccion de E-mail:");
                break;
            case '3':
                persona.telefono = parseInt(prompt("Ingrese numero de telefono:"));
                break;
            case '4':
                persona.dni = parseInt(prompt("Ingrese numero de documento:"));  
                break;
            case '5':
                tarjeta.numero = parseInt(prompt("Ingrese numero de tarjeta:"));  
                tarjeta.nombre = prompt("Ingrese nombre que figura en la tarjeta:");
                tarjeta.vencimiento = prompt("Ingrese fecha de vencimiento de la tajeta:");
                tarjeta.seguridad = prompt("Ingrese codigo de seguridad");
                break;
            case '6':
                return; 
            default:
                alert("La opcion ingresada es incorrecta.");
                break;
        }
        var mensaje =
    'Nombre: ' + persona.nombre + '\n' +
    'Apellido: ' + persona.apellido + '\n' +
    'Teléfono: ' + persona.telefono + '\n' +
    'Email: ' + persona.email + '\n' +
    'DNI: ' + persona.dni;

  alert(mensaje);
    }while(opcionReserva)

}

function metodoPago(){

    const cuotasDisponibles = [3, 6, 12]; 
    const precioTotal = hotel.precioHotel * hotel.cantidadHabitaciones * hotel.cantidadDias;

    alert("El precio total de la estadía es: $" + precioTotal);

    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas:"));
    
    if (cuotasDisponibles.includes(cuotas)) {
        const montoCuota = precioTotal / cuotas;
        alert("Monto de cada cuota: $" + montoCuota);
    } else {
        alert("La cantidad de cuotas ingresada no es válida.");
    }
}
