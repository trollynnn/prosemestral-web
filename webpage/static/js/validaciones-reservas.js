$(document).ready(function() {
    $("#reservaForm").submit(function(event) {
        event.preventDefault(); 

        const nombre = $("#nombre").val();
        const fecha = $("#fecha").val();
        const hora = $("#hora").val();

        $("#fechaReserva").text(fecha);
        $("#horaReserva").text(hora);

        $("#nombre").val("");
        $("#apellido").val("");
        $("#fecha").val("");
        $("#hora").val("");
        $("#telefono").val("");
        $("#num_personas").val("");

        $("#reservaConfirmadaModal").modal("show");
    });

    $("#aceptarModal").click(function() {
        window.location.href = "index.html";
    });
});
