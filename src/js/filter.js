$(document).ready(function() {
    $('.filter__header').click(function(event) {
        $(this).toggleClass('filterActive').next().slideToggle(300);
    });
});