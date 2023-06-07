var cantidadDias;
var cantidadHuespedes;
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
            siguiente();
            break;
        case '5':
            
            break;
        default:
            prompt("La opcion ingresada es incorrecta.");
            break;
    }

}while(opcion != "Salir")


function destino(){

    alert("Seleccione el destino");

    do{
    
        var listaLugares = "";

        for( var i = 0; i < ubicacion.length; i++){ 
        listaLugares  += ubicacion[i].abreviatura + " . " + ubicacion[i].destino + "\nPrecio: $" + ubicacion[i].precio + "\n";

        }


        nombreLugar = prompt ("Lista de Lugares:\n\n" + listaLugares + "\n Salir" );
    
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
    
    if (cantidadHuespedes <= 0) {
        alert("La cantidad de huéspedes ingresada no es válida.");
        return;
    }
    
    var cantidadHabitaciones = Math.ceil(cantidadHuespedes / 4);
    
    alert("Para " + cantidadHuespedes + " huéspedes, se necesitarán " + cantidadHabitaciones + " habitaciones.");
    }

function precioEstadia(){

    var precioTotal = ubicacion[precioHotel].precio * cantidadDias;

    alert("el precio total de la estadia es: $"+ precioTotal);
}

function siguiente(){
    do{
        var segundaOpcion = parseInt(prompt("Opcion 1. Precio total de la estadia:  \nOpcion 2. Datos para la reserva: \nOpcion 3. Metodo de pago: \nOpcion 4. Volver"))
        switch(segundaOpcion){
            case '1':
                precioEstadia();
                break;
            case '2':
                break;
            case '3':
                break;
        }

    }while(repeticion)
}