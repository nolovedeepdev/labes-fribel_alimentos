$(document).ready(function(){
    var controle = 0;
    var filter = $('#filter');
    var ordenador = $('#ordenador');
    var listaFilter = document.getElementById("filter");
    var listaOrdenador = document.getElementById("ordenador");
    
    if(controle=0){
        var baseUrl = window.location.href;
    }

    (filter).change(function() {
        controle = controle + 1;
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    });

    (ordenador).change(function() {
        var ordenador = $(this).val();
        //window.onload(ordenador.val($("#ordenador option").eq(ordenador.val).val()));
        window.location.href = baseUrl + '?ordenador=' + ordenador;
    });
});