const botondeinicidelmenu = document.getElementById('openMenuButton');
const menu = document.getElementById('menu');
const chatMessages = document.getElementById('chat-messages');
const menuOptions = document.querySelectorAll('.menu-option');
const helpButton = document.getElementById('helpButton');
const endConversationButton = document.getElementById('endConversationButton');

// Muestra el menú centrado
botondeinicidelmenu.addEventListener('click', () => {
    menu.style.display = 'block'; // Muestra el menú al hacer clic
    endConversationButton.classList.remove('hidden');
});

// Al hacer clic en una opción del menú, se envía la respuesta y se oculta el menú
menuOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedOption = e.target.getAttribute('data-option');
        menu.style.display = 'none'; // Oculta el menú después de elegir una opción
        addUserMessage(e.target.innerText);
        showResponse(selectedOption);
    });
});

// El botón de ayuda, que también oculta el menú y muestra un mensaje de ayuda
helpButton.addEventListener('click', () => {
    menu.style.display = 'none'; // Oculta el menú
    addUserMessage("Ayuda");
    addBotMessage("Si necesitas ayuda, por favor selecciona una de las opciones del menú o comunícate con nosotros al 03548 42-5824.");
});

// Finaliza la conversación
endConversationButton.addEventListener('click', () => {
    addBotMessage("Gracias por usar el chatbot. ¡Hasta luego!");
    resetChat();
});

// Función para agregar el mensaje del usuario al chat
function addUserMessage(text) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', 'user-message');
    messageBubble.innerText = text;
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para agregar el mensaje del bot al chat
function addBotMessage(text) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', 'bot-message');
    messageBubble.innerHTML = text;
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para mostrar las respuestas basadas en la opción seleccionada
function showResponse(option) {
    let responseText = "";
    switch (option) {
        case '1':
            responseText = "El hospital está ubicado en 13 de Diciembre 596, La Falda, Córdoba.";
            break;
        case '2':
            responseText = "Puedes ingresar en el siguiente link donde te explican cómo sacar un turno: https://teresani.github.io/Integracio_de_paginas/AIntegracion/turnero.html";
            break;
        case '3':
            responseText = "Aquí se mostrarán los horarios de los doctores y qué días están.";
            break;
        case '4':
            responseText = "El horario de atención en el hospital es de 6:00 a 24:00.";
            break;
        case '5':
            responseText = "Aceptamos todas las obras sociales.";
            break;
        default:
            responseText = "Esta opción no está en el menú. Comunícate con el hospital: 03548 42-5824";
            break;
    }
    addBotMessage(responseText);
}

// Función para reiniciar el chat
function resetChat() {
    chatMessages.innerHTML = "";
    menu.style.display = 'none'; // Oculta el menú
    endConversationButton.classList.add('hidden');
    botondeinicidelmenu.classList.remove('hidden');
}
