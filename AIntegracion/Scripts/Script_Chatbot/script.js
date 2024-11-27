const botondeinicidelmenu = document.getElementById('openMenuButton');
const menu = document.getElementById('menu');
const chatMessages = document.getElementById('chat-messages');
const menuOptions = document.querySelectorAll('.menu-option');
const helpButton = document.getElementById('helpButton');
const endConversationButton = document.getElementById('endConversationButton');

botondeinicidelmenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    endConversationButton.classList.remove('hidden');
});

menuOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedOption = e.target.getAttribute('data-option');
        menu.classList.add('hidden');
        addUserMessage(e.target.innerText);
        showResponse(selectedOption);
    });
});

helpButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    addUserMessage("Ayuda");
    addBotMessage("Si necesitas ayuda, por favor selecciona una de las opciones del menú o comunícate con nosotros al 03548 42-5824.");
});

endConversationButton.addEventListener('click', () => {
    addBotMessage("Gracias por usar el chatbot. ¡Hasta luego!");
    resetChat();
});

function addUserMessage(text) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', 'user-message');
    messageBubble.innerText = text;
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(text) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', 'bot-message');
    messageBubble.innerHTML = text;
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showResponse(option) {
    let responseText = "";
    switch (option) {
        case '1':
            responseText = "El hospital está ubicado en 13 de Diciembre 596, La Falda, Córdoba.";
            break;
        case '2':
            responseText = "Puedes ingresar en el siguiente link donde te explican cómo sacar un turno.";
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

function resetChat() {
    chatMessages.innerHTML = "";
    menu.classList.add('hidden');
    endConversationButton.classList.add('hidden');
    botondeinicidelmenu.classList.remove('hidden');
}
