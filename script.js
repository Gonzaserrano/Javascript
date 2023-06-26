const destinos = [
  { id:1, name: "Mar del plata", price: 15000, image: "https://www.mardelplataturismo.com.ar/img/paquetes-turisticos-mar-del-plata.jpg" },
  { id:2, name: "Bariloche", price: 30000, image: "https://images.almundo.com/205/image/fetch/fl_progressive,q_70,h_200/http://images.almundo.com/packages/img-2a9818af-0149-4887-b7ce-44429bad6942-cover" },
  { id:3, name: "Villa Carlos Paz", price: 17000, image: "https://cieloazul.com.ar/wp-content/uploads/2022/05/VCP-AereaNoche-696x489-1.jpg" },
  { id:4, name: "Villa General Belgrano", price: 23000, image: "https://cdn0.casamientos.com.ar/article/5569/3_2/1280/jpg/19655-arquitectura-centroeuropea-02.webp" },
  { id:5, name: "Ushuaia", price: 39000, image: "https://media.staticontent.com/media/pictures/3c387a50-2517-44c1-856b-87e2d906d03b/300x200" },
  { id:6, name: "Mendoza", price: 23000, image: "https://media.staticontent.com/media/pictures/c9912915-4583-4cf9-9d74-6515df0e74d5/300x200" },
  { id:7, name: "Tucuman", price: 15000, image: "https://www.newsdigitales.com/wp-content/uploads/2020/08/tucuman.jpg" },
  { id:8, name: "Iguazu", price: 20000, image: "https://www.tangol.com/Fotos/Tours/paquete-cataratas-del-iguazu-de-lujo_2155_201804301144002.Mobile.JPG" },
  { id:9, name: "Purmamarca", price: 15000, image: "https://ruta40turismo.com/uploads/fotos_sliders_paquetes/8015f99a86895b82b9a0545249c857b8.webp" }
];

function guardar() {
  localStorage.setItem("destinos", JSON.stringify(destinos));
}

function cargar() {
  return JSON.parse(localStorage.getItem("destinos"));
}

function calcularPrecio() {
  const dias = parseInt(document.getElementById("dias").value);
  const habitacion = parseInt(document.getElementById("habitacion").value);
  const destinoSeleccionado = destinos.find(destino => destino.id === parseInt(document.getElementById("detalle").dataset.destinoId));
  const precioDia = destinoSeleccionado.price * habitacion;
  const precioTotal = dias * precioDia;
  
  const cuotas = parseInt(document.getElementById("pago").value);
  const precioPorCuota = precioTotal / cuotas;
  let precioConCuotas = precioTotal;
  
  if (cuotas === 6) {
    precioConCuotas += precioTotal * 0.15; 
  } else if (cuotas === 12) {
    precioConCuotas += precioTotal * 0.20; 
  }
  
  if (document.getElementById("pago").value === "efectivo") {
    precioConCuotas -= precioTotal * 0.10; 
  }
  
  document.getElementById("detalle").innerHTML = `<div class="col-md-12">
  <h2 class="text-center">Resumen</h2>
  <p>Destino: ${destinoSeleccionado.name}</p>
  <p>Precio por dia: $${precioDia}</p>
  <p>Cuotas: ${cuotas} de $${precioPorCuota.toFixed(2)}</p>
  <p>Precio total por ${dias} dias: $${precioConCuotas.toFixed(2)}</p>
  </div>`;
  
  document.getElementById("total").textContent = `$${precioTotal.toFixed(2)}`; 
}

guardar();

function render() {
  let destinos = cargar();
  let contenido = "";

  destinos.forEach(destino => {
    contenido += `<div class="col-md-3">
      <div id="destino-${destino.id}" class="card text-center cuadro" onclick="seleccionarDestino(${destino.id})">
        <img src="${destino.image}" class="card-img-top" alt="${destino.name}">
        <div class="card-body">
          <p class="card-text text-danger"> $${destino.price}</p> 
          <h3>${destino.name}</h3>
        </div>
      </div>
    </div>`;

    
  const cuotasSelect = document.getElementById("pago");
  cuotasSelect.addEventListener("change", calcularPrecio); 
  const diasInput = document.getElementById("dias");
  diasInput.addEventListener("input", calcularPrecio); 

  const habitacionSelect = document.getElementById("habitacion");
  habitacionSelect.addEventListener("change", calcularPrecio); 

  });

  document.getElementById("contenido").innerHTML = contenido;
}

function seleccionarDestino(id, precio) {
  const destinos = document.querySelectorAll('.cuadro');
  destinos.forEach(destino => destino.classList.remove('seleccionado'));
  
  const destinoSeleccionado = document.getElementById(`destino-${id}`);
  destinoSeleccionado.classList.add('seleccionado');
  
  const detalleDestino = document.getElementById('detalle');
  detalleDestino.dataset.destinoId = id;
  detalleDestino.scrollIntoView({ behavior: 'smooth' }); 
  calcularPrecio();
  
  return false;
}
render();

