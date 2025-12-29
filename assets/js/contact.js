function sendToWhatsApp() {
    // 1. Obtenemos los valores del formulario
    const name = document.getElementById('ws_name').value;
    const email = document.getElementById('ws_email').value;
    const message = document.getElementById('ws_message').value;

    // 2. Tu número de teléfono (ya lo he puesto con el 34 delante)
    const phone = "34687253671";

    // 3. Validamos que el nombre y el mensaje no estén vacíos
    if (name.trim() === "" || message.trim() === "") {
        alert("Por favor, rellena tu nombre y el mensaje para poder ayudarte.");
        return;
    }

    // 4. Creamos el texto del mensaje para WhatsApp
    // El %0A es para hacer un salto de línea en WhatsApp
    const text = "⚓ *Nuevo contacto desde la Web* ⚓" + "%0A" +
                 "*Nombre:* " + name + "%0A" +
                 "*Email:* " + email + "%0A" +
                 "*Mensaje:* " + message;

    // 5. Creamos la URL final
    const url = "https://wa.me/" + phone + "?text=" + text;

    // 6. Abrimos WhatsApp en una nueva pestaña
    window.open(url, '_blank').focus();
}