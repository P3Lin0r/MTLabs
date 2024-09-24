const cardCont = document.querySelector(".cards");
const allCard = document.querySelectorAll(".card");
const btns = document.querySelectorAll(".cards-wrapper button");
const captions = document.querySelectorAll(".card p");
const imgText = document.querySelector(".imgtext");

let currentIndex = 0;

btns.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('next')) {
            currentIndex++;
            if (currentIndex >= allCard.length) {
                currentIndex = 0;
            }
        } else {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = allCard.length - 1;
            }
        }
        updateCarousel();
    });
});

function updateCarousel() {
    allCard.forEach((card, index) => {
        card.style.display = index === currentIndex ? "block" : "none";
    });
    captions.forEach((caption, index) => {
        caption.style.display = index === currentIndex ? "block" : "none";
    });
    imgText.value = captions[currentIndex].textContent;
}
updateCarousel();


imgText.addEventListener("input", (event) => {
    captions[currentIndex].textContent = event.target.value;
});
