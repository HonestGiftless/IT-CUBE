const colorBox = document.getElementById('colorBox');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

function changeColor() {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
}

colorBox.addEventListener('click', changeColor);
// setInterval(changeColor, 3000);