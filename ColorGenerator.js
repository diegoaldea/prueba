const button = document.getElementById('ClickMe');
const body = document.getElementById('body');
const colorText = document.getElementById('color');

function generateHexColor(){
    const hexChars = '0123456789ABCDEF';
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    }

    return hexColor;
}

button.addEventListener('click', function(){
    const hexColor = generateHexColor();
    body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
})