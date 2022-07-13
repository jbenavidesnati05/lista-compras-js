function agregarProducto() {
  class Producto {
    constructor(nombreProducto, precioProducto, cantProducto) {
      this._nombreProducto = nombreProducto;
      this._precioProducto = precioProducto;
      this._cantProducto = cantProducto;
    }
  }
  let nombreProducto = document.getElementById("producto").value;
  let precioProducto = document.getElementById("precio").value;
  let cantProducto = document.getElementById("cantidad").value;
  nuevoProducto = new Producto(nombreProducto, precioProducto, cantProducto);
  subtotal = precioProducto*cantProducto;
  agregar();
}

var database = [];
function agregar() {
    
  database.push(nuevoProducto);
  document.getElementById("tabla").innerHTML += `<tbody>
                                                    <td>${nuevoProducto._nombreProducto}</td>
                                                    <td>$${nuevoProducto._precioProducto}</td>
                                                    <td>${nuevoProducto._cantProducto}</td>
                                                    <td>$${subtotal}</td>
                                                </tbody>`;
}
