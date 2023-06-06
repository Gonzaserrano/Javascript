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
            precioEstadia();
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

    alert("cantidad de dias" + cantidadDias);
    cantidadDias = parseInt(prompt("Ingrese la cantidad de dias que desee hospedarse"));
    alert("cantidad de dias" + cantidadDias);

}

function huespedes(){

   cantidadHuespedes = parseInt(prompt("Ingrese cantidad de huespedes"));

}

function precioEstadia(){

    var precioTotal = ubicacion[precioHotel].precio * cantidadDias;

    alert("el precio total de la estadia es: $"+ precioTotal);
}

function siguiente(){
    do{
        var segundaOpcion = parseInt(prompt(""))
        switch(segundaOpcion){
            case '1':
                
                break;
            case '2':
                break;
            case '3':
                break;
        }

    }while(repeticion)
}
gf