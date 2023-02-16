var div = document.getElementById("back");
function getRandomColor() {
    var letters = 'ABCDEF0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,600);
