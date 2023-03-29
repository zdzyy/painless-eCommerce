// PRODUCTOS
const productos = [
    // hoodies
    {
        id: "nintendo",
        titulo: "Nintendo hoodie",
        imagen: "assets/nintendohoodieBack.png",
        precio: 1499.99
    },
    {
        id: "painless",
        titulo: "Painless hoodie",
        imagen: "assets/painlesshodieeBack.png",
        precio: 849.99
    },
    {
        id: "rndm",
        titulo: "RNDM XCLSV",
        imagen: "assets/rndmhoodie.png",
        precio: 1299.99
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".card__add")

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
            <div class="card__background" style="background-image: url(${producto.imagen});"></div>
	        <div class="content">
		        <div class="card__category">${producto.titulo}</div>
		        <h3 class="card__heading">${producto.precio}</h3>
		        <button class="card__add" id="${producto.id}">agregar</button>
	        </div>
        `;
        contenedorProductos.append(div)
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".card__add");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
} 