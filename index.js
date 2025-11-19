const images = [
    './assets/img-content/1-img.png',
    './assets/img-content/2-img.png',
    './assets/img-content/3-img.png',
    './assets/img-content/4-img.png',
    './assets/img-content/5-img.png',
    './assets/img-content/6-img.png'
];

const imageContent = document.querySelector('.img-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

let currentIndex = 0;

function updateImage() {
    imageContent.style.opacity = 0;

    const img = new Image();
    img.src = images[currentIndex];

    img.onload = () => {
        imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;

        imageContent.style.opacity = 1;
    };
}

updateImage();

mainButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex < images.length) {
        updateImage();
    }

    if (currentIndex === images.length - 1) {
        mainButton.style.display = 'none';
        finalMessage.style.display = 'block';
    }
});