function color() {
    let max = 256;
    let min = 0;

    let X = Math.floor(Math.random() * (max - min) + min);

    let Y = Math.floor(Math.random() * (max - min) + min);

    let Z = Math.floor(Math.random() * (max - min) + min);

    let colores = '';
    colores = `rgb(${X}, ${Y}, ${Z})`;
    return colores;
}

// console.log(color());

const parrafos = document.querySelectorAll(' .container p');

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = color();
}