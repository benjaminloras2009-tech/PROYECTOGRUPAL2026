
    // La reserva se envía por WhatsApp. Cambia el número (código de país + número, sin + ni espacios).
    var NUMERO_WHATSAPP = "59175632445";

    var form = document.getElementById("form-reserva");
    var fecha = document.getElementById("fecha");
    fecha.min = new Date().toISOString().split("T")[0];

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var mensaje =
        "Hola, quiero reservar una mesa en Lora's Coffe.\n" +
        "Nombre: " + d.get("nombre") + "\n" +
        "Fecha: " + d.get("fecha") + "\n" +
        "Hora: " + d.get("hora") + "\n" +
        "Personas: " + d.get("personas") + "\n" +
        "Sucursal: " + d.get("sucursal");
      window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje), "_blank", "noopener");
      });