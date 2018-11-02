// função para o sidenav
$(function () {
    $(".button-collapse").sideNav({
        menuWidth: 250,
        edge: 'right'
        
    });
    
});


// Função para scrollspy
$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 40
    });
});

