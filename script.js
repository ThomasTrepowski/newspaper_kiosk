const diarios = [
    'https://www.lanacion.com.py/',
    'https://www.ultimahora.com/',
    'https://www.abc.com.py/'
];

let currentPageIndex = 0;

const webPage = document.getElementById('webPage');
const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');

function navigateToPage(index) { //el navigateToPage funciona de una manera "circular" porque va desde el ultimo al primero con el uso de los botones.
    if (index < 0) {
        currentPageIndex = diarios.length - 1; //se va a la última página al volver de la primera página
    } else if (index >= diarios.length) { //Se va a la primera página al apretar el boton de adelante desde la última página
        currentPageIndex = 0;
    } else {
        currentPageIndex = index;
    }
    
    webPage.src = diarios[currentPageIndex];
}

atras.addEventListener('click', () => {
    navigateToPage(currentPageIndex - 1);
});

adelante.addEventListener('click', () => {
    navigateToPage(currentPageIndex + 1);
});

navigateToPage(currentPageIndex);
