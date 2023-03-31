const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")

if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito__producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito__producto-titulo">
                <small>nombre</small>
                <h3>painless hoodie</h3>
            </div>
            <div class="carrito__producto-cantidad">
                <small>cantidad</small>
                <p>1</p>
            </div>
            <div class="carrito__producto-precio">
                <small>precio</small>
                <p>$849.99</p>
            </div>
            <div class="carrito__producto-subtotal">
                <small>subtotal</small>
                <p>$849.99</p>
            </div>
            <button class="carrito__producto-eliminar"><i class="bi bi-trash-fill"></i></button>
        `
    });
} else {

}