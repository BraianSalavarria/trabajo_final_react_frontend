export function filtrarProductos() {
  // Obtener el texto del input
  const busqueda = document.getElementById('buscar-input').value.toLowerCase();
  
  // Obtener todas las filas de la tabla
  const filas = document.querySelectorAll('#tabla-productos-body tr');
  
  // Recorrer cada fila
  filas.forEach(fila => {
    // Obtener el texto de la columna descripción (segunda columna)
    const descripcion = fila.cells[1].textContent.toLowerCase();
    
    // Mostrar u ocultar la fila según coincida
    if (descripcion.includes(busqueda)) {
      fila.style.display = '';  // Mostrar
    } else {
      fila.style.display = 'none';  // Ocultar
    }
  });
}

export function filtrarClientes() {
  // Obtener el texto del input
  const busqueda = document.getElementById('buscar-input').value.toLowerCase();
  
  // Obtener todas las filas de la tabla
  const filas = document.querySelectorAll('#tabla-clientes-body tr');
  
  // Recorrer cada fila
  filas.forEach(fila => {
    // Obtener el texto de la columna descripción (segunda columna)
    const descripcion = fila.cells[1].textContent.toLowerCase();
    
    // Mostrar u ocultar la fila según coincida
    if (descripcion.includes(busqueda)) {
      fila.style.display = '';  // Mostrar
    } else {
      fila.style.display = 'none';  // Ocultar
    }
  });
}

export function filtrarVentas() {
  // Obtener el texto del input
  const busqueda = document.getElementById('buscar-input').value.toLowerCase();
  
  // Obtener todas las filas de la tabla
  const filas = document.querySelectorAll('#tabla-ventas-body tr');
  
  // Recorrer cada fila
  filas.forEach(fila => {
    // Obtener el texto de la columna descripción (segunda columna)
    const descripcion = fila.cells[0].textContent.toLowerCase();
    
    // Mostrar u ocultar la fila según coincida
    if (descripcion.includes(busqueda)) {
      fila.style.display = '';  // Mostrar
    } else {
      fila.style.display = 'none';  // Ocultar
    }
  });
}