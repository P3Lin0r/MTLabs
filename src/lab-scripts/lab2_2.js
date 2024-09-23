const img = document.querySelector('.movimg');
const container = document.querySelector('.container');

const targetX = 0; 
const targetY = container.clientHeight - img.clientHeight;
let posX = container.clientWidth - img.clientWidth;
let posY = 0;
let velX = (targetX - posX) / 100;
let velY = (targetY - posY) / 100;

function moveImage() {
    posX += velX;
    posY += velY;

    if (posX <= targetX && posY >= targetY) {
        posX = targetX;
        posY = targetY;
        return;
    }
    img.style.left = `${posX}px`;
    img.style.top = `${posY}px`;
    requestAnimationFrame(moveImage);
}
requestAnimationFrame(moveImage);