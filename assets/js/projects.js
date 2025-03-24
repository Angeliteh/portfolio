$(document).ready(function() {
    // Inicializar Isotope
    var $grid = $('.isotope-box').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });

    // Filtrado
    $('.item-filter input').on('change', function() {
        var filterValue = this.id === 'all' ? '*' : '[data-type="' + this.id + '"]';
        $grid.isotope({ filter: filterValue });
        
        // Efecto visual para los botones
        $('.item-filter label').removeClass('active');
        $(this).next('label').addClass('active');
    });
});
