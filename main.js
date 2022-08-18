function agregarProducto() {
  class Producto {
    constructor(nombreProducto, precioProducto, cantProducto,subtotal) {
      this._nombreProducto = nombreProducto;
      this._precioProducto = precioProducto;
      this._cantProducto = cantProducto;
      this._subtotal = subtotal;
    }
  }
  let nombreProducto = document.getElementById("producto").value;
  let precioProducto = Number(document.getElementById("precio").value);
  let cantProducto = Number(document.getElementById("cantidad").value);
  let subtotal =precioProducto*cantProducto;

  nuevoProducto = new Producto(nombreProducto, precioProducto, cantProducto,subtotal);

  agregar();
  totalSubTotales()
}


var database = [];
function agregar() {
  database.push(nuevoProducto);
  document.getElementById("tabla").innerHTML += `<tbody>
                                                    <td>${nuevoProducto._nombreProducto}</td>
                                                    <td>$${nuevoProducto._precioProducto}</td>
                                                    <td>${nuevoProducto._cantProducto}</td>
                                                    <td>$${nuevoProducto._subtotal}</td>
                                                </tbody>`;
};
console.log({database});

 function totalSubTotales(){
  var varTotalSubTotales = 0;
  for(let sub of database){
    varTotalSubTotales += sub._subtotal;
    let iva = varTotalSubTotales*0.19;
    let totalPagar = varTotalSubTotales+iva
    console.log(sub);
    console.log(varTotalSubTotales);
    console.log(`el iva es ${iva}`);
    console.log(`el total a pagar es ${totalPagar}`);
    document.getElementById("subtotal").innerHTML = `SUBTOTAL = $${varTotalSubTotales} <br> IVA = $${iva} <br>  TOTAL A PAGAR = $${totalPagar}`;
  }
}