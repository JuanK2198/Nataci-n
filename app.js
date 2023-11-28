const resultados = [
    { nombre: 'Nadador1', edad: 25, estilo: 'libre', tiempo: 60 },
    { nombre: 'Nadador2', edad: 22, estilo: 'espalda', tiempo: 65 },
    // Agrega más datos según sea necesario
];

function buscar() {
    const nombre = document.getElementById('searchInput').value;
    const edad = document.getElementById('ageFilter').value;
    const estilo = document.getElementById('styleFilter').value;

    // Filtra los resultados según los criterios de búsqueda
    const resultadosFiltrados = resultados.filter(result => 
        (nombre === '' || result.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
        (edad === '' || result.edad == edad) &&
        (estilo === 'todos' || result.estilo === estilo)
    );

    // Muestra el gráfico con los resultados filtrados
    mostrarGrafico(resultadosFiltrados);
}

function mostrarGrafico(resultados) {
    const labels = resultados.map(result => result.nombre);
    const tiempos = resultados.map(result => result.tiempo);

    const ctx = document.getElementById('chartContainer').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tiempo (segundos)',
                data: tiempos,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
