const { Client } = require('pg');

const conexion = new Client({
    host: 'localhost',
    database: 'Prueba',
    user: 'postgres',
    password: 'Juank831'
});

async function obtenerDatos() {
    try {
        await conexion.connect();
        console.log('CONEXION EXITOSA');

        const nadadoresQuery = "SELECT * FROM nadadores";

        const resultado = await conexion.query(nadadoresQuery);
        const datosNadadores = resultado.rows;

        // Llamar a la función para mostrar datos en la tabla
        mostrarDatosEnTabla(datosNadadores);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Siempre cerrar la conexión después de usarla
        await conexion.end();
    }
}

// Lógica para mostrar datos en la tabla
function mostrarDatosEnTabla(datos) {
    $(document).ready(function() {
        // Obtener referencia al cuerpo de la tabla
        var cuerpoTabla = $('#example tbody');

        // Limpiar contenido existente en el cuerpo de la tabla
        cuerpoTabla.empty();

        // Iterar sobre los datos y agregar filas a la tabla
        datos.forEach(function(fila) {
            cuerpoTabla.append(`
                <tr>
                    <td>${fila.id_nadador}</td>
                    <td>${fila.Nombre}</td>
                    <td>${fila.Apellido}</td>
                    <td>${fila.Edad}</td>
                    <td>${fila.Equipo}</td>
                </tr>
            `);
        });

        // Inicializar DataTables después de cargar los datos
        $('#example').DataTable();
    });
}

// Llamar a la función para obtener y mostrar datos
obtenerDatos();

