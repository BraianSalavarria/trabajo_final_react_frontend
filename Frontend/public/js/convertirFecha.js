export const convertirFecha = (fechaMongoDB) =>{

// Convertir a objeto Date
const fecha = new Date(fechaMongoDB);

// Obtener día, mes y año
const dia = String(fecha.getDate()).padStart(2, '0');
const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
const año = fecha.getFullYear();

// Formatear como DD-MM-YYYY
const fechaFormateada = `${dia}-${mes}-${año}`;

return fechaFormateada
}