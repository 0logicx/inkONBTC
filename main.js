const photos = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
let currentIndex = 0;

function changePhoto(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    } else if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    const currentPhoto = document.getElementById('currentPhoto');
    currentPhoto.style.transform = 'rotateY(180deg)';
    
    setTimeout(() => {
        currentPhoto.src = photos[currentIndex];
        currentPhoto.style.transform = 'rotateY(0deg)';
    }, 500);
}

// Display the first photo on page load
document.getElementById('currentPhoto').src = photos[currentIndex];
