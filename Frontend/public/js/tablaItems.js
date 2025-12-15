export function agregarItemTabla(item) {
    const tabla = document.getElementById('tabla-productos-body');
    
    // Buscar si el item ya existe en la tabla
    const filas = tabla.getElementsByTagName('tr');
    let itemExistente = false;
    
    for (let i = 0; i < filas.length; i++) {
        const celdaDescripcion = filas[i].cells[0];
        
        // Si encontramos el item, actualizamos la cantidad y subtotal
        if (celdaDescripcion.textContent === item.descripcion) {
            itemExistente = true;
            
            // Obtener cantidad actual y sumar la nueva
            const celdaCantidad = filas[i].cells[2];
            const cantidadActual = parseFloat(celdaCantidad.textContent);
            const nuevaCantidad = item.cantidad
            celdaCantidad.textContent = nuevaCantidad;
            
            // Recalcular subtotal
            const precioUnitario = parseFloat(filas[i].cells[1].textContent);
            const nuevoSubtotal = precioUnitario * nuevaCantidad;
            filas[i].cells[3].textContent = nuevoSubtotal.toFixed(2);
            
            break;
        }
    }
    
    // Si el item no existe, crear nueva fila
    if (!itemExistente) {
        const nuevaFila = tabla.insertRow();
        nuevaFila.className = 'border-t border-b';

        const celda1 = nuevaFila.insertCell(0);
        celda1.textContent = item.descripcion;
        celda1.className = 'py-2 text-center';

        const celda2 = nuevaFila.insertCell(1);
        celda2.textContent = item.precioUnitario.toFixed(2);
        celda2.className = 'py-2 text-center';

        const celda3 = nuevaFila.insertCell(2);
        celda3.textContent = item.cantidad;
        celda3.className = 'py-2 text-center';

        const celda4 = nuevaFila.insertCell(3);
        celda4.textContent = item.subTotal.toFixed(2);
        celda4.className = 'py-2 text-center';
        
        const celda5 = nuevaFila.insertCell(4);
        celda5.className = 'py-2 text-center';

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-700 transition';
        
        // Asociar el evento click para eliminar la fila
        btnEliminar.onclick = function() {
            removerItemPorDescripcion(item.descripcion);
        };
        
        // Agregar el botón a la celda
        celda5.appendChild(btnEliminar);
    }
}

export function removerItemPorDescripcion(descripcion) {
    const tabla = document.getElementById('tabla-productos-body');
    const filas = tabla.getElementsByTagName('tr');
    
    for (let i = 0; i < filas.length; i++) {
        if (filas[i].cells[0].textContent === descripcion) {
            tabla.deleteRow(i);
            break;
        }
    }
}