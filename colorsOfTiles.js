const tiles = document.querySelectorAll('.tile');

let i = 0;
tiles.forEach(tile => {
    tile.style.background = getColor(i);
    i++;
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getColor(number){
    return number%2 === 0 ? "#fff" : "#000";
}

