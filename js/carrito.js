let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")

if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito__producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito__producto-titulo">
                <small>nombre</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito__producto-cantidad">
                <small>cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito__producto-precio">
                <small>precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito__producto-subtotal">
                <small>subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito__producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        `;

        contenedorCarritoProductos.append(div);
    });
} else {

}