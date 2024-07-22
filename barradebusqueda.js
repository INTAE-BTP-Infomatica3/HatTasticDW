document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        handleSearch(query);
    });

    function handleSearch(query) {
        const searchMap = {
            'lavandas': 'productos.html#lavandas',
            'la noche estrellada': 'productos.html#la-noche-estrellada',
            'tropical': 'productos.html#tropical',
            'girasol radiante': 'productos.html#girasol-radiante',
            'flor de ensueño': 'productos.html#flor-de-ensueño',
            'aventura': 'productos.html#aventura',
            'inicio': 'index.html',
            'tienda': 'productos.html',
            'quienes somos': 'Quienessomos.html',
            'servicio al cliente': 'proyecto.html'
        };

        if (searchMap[query]) {
            window.location.href = searchMap[query];
        } else {
            alert('Producto o página no encontrada.');
        }
    }
});