let corredores = 0;
let tiempo=0;
let tiempo_primero=0;
let tiempo_segundo=0;
let segundo_lugar=0;
let primer_lugar=0;
let id = 0;
let promedio=0;
let tiempo_suma = 0;
let opcion = 0;

alert("Bienvenido, ingrese a los corredores");

ingresar_dato();

function ingresar_dato(){
    do{

        id = parseInt(prompt("Ingrese el id del corredor: \nIngrese ¨0¨ para pasar a la siguiente pantalla."));
        
        if(id != 0){
            tiempo = parseFloat(prompt("ingrese el tiempo de llegada a la meta:"));
            corredores++;
            tiempo_suma = tiempo + tiempo_suma;
            if(tiempo < tiempo_primero || corredores == 1){
                tiempo_segundo = tiempo_primero;
                tiempo_primero = tiempo;
                segundo_lugar = primer_lugar;
                primer_lugar = id;
            }
            if(corredores > 1 && tiempo_segundo == 0){
                tiempo_segundo = tiempo;
                segundo_lugar = id;
            }
            if(tiempo_segundo > tiempo && tiempo > tiempo_primero){
                tiempo_segundo = tiempo;
                segundo_lugar = id;
            }
        }

    }while(id != 0);
}

do{

    opcion = parseInt(prompt("Opcion 1: Total de corredores que llegaron a la meta \nOpcion 2: Tiempo promedio de los corredores \nOpcion 3: Id y tiempo del primer finalista \nOpcion 4: Id y tiempo del segundo finalista \nOpcion 5: Para ingresar mas datos \nOpcion 6: Salir "));
    
    switch(opcion){
        case 1:
            alert("Llegaron "+corredores+" corredores a la meta");
            break;
        case 2:
            promedio = tiempo_suma / corredores;
            alert("Tiempo promedio de los corredores: "+promedio.toFixed(2));
            break;
        case 3:
            alert("Primer lugar: " +primer_lugar+ "\nTiempo: "+tiempo_primero);
            break;
        case 4:
            alert("Segundo lugar: " +segundo_lugar+ "\ntiempo: "+tiempo_segundo);
            break;
        case 5:
            ingresar_dato();
            break;
        case 6:
            alert("Hasta la proxima.");
            break;
        default:
            alert("La opcion no es valida.");
            break;
    }
}while(opcion != 6);
