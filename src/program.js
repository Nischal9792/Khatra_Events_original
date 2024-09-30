function handleMenu() {
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle("hidden");
  }

// Array of image URLs and titles
const images = [
    { url: "https://picsum.photos/800/600?image=1", title: "VIEWS" },
    { url: "https://picsum.photos/800/600?image=2", title: "EPIC INTERIOR DESIGN" },
    { url: "https://picsum.photos/800/600?image=3", title: "HANGOUT AREA" },
    { url: "https://picsum.photos/800/600?image=4", title: "THE EPIC HOUSE VIEW" },
    { url: "https://picsum.photos/800/600?image=5", title: "MAIN DISCUSSION AREA" },
];

// Select the slider and pagination elements
const slider = document.getElementById('slider');
const pagination = document.getElementById('pagination');

// Create image elements and append them to the slider
images.forEach((image, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'flex-shrink-0 w-full md:w-1/3 lg:w-1/4 px-2';

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.title;
    img.className = 'w-full h-auto object-cover';

    const caption = document.createElement('div');
    caption.className = 'text-center text-green-500 mt-2';
    caption.innerText = image.title;

    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    slider.appendChild(imgContainer);

    // Clone the image and append it to the slider for infinite loop
    const clonedImgContainer = imgContainer.cloneNode(true);
    slider.appendChild(clonedImgContainer);

    // Create pagination dot
    const dot = document.createElement('span');
    dot.className = 'h-3 w-3 bg-gray-400 rounded-full cursor-pointer';
    dot.addEventListener('click', () => {
        index = index;
        slideImages(index);
    });
    pagination.appendChild(dot);
});

let currentIndex = 0;
const dots = pagination.children;

function updatePagination() {
    Array.from(dots).forEach(dot => dot.classList.remove('bg-green-500'));
    dots[currentIndex].classList.add('bg-green-500');
}

// Function to slide the images
function slideImages(index = currentIndex) {
    if (index >= images.length) {
        index = 0;
        slider.style.transform = `translateX(0%)`;
    } else if (index < 0) {
        index = images.length - 1;
        slider.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
    } else {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
    currentIndex = index;
    updatePagination();
}

// Auto slide the images every 3 seconds
let interval = setInterval(() => {
    slideImages(currentIndex + 1);
}, 3000);

// Navigation buttons
document.getElementById('prev').addEventListener('click', () => {
    clearInterval(interval);
    slideImages(currentIndex - 1);
    interval = setInterval(() => {
        slideImages(currentIndex + 1);
    }, 3000);
});

document.getElementById('next').addEventListener('click', () => {
    clearInterval(interval);
    slideImages(currentIndex + 1);
    interval = setInterval(() => {
        slideImages(currentIndex + 1);
    }, 3000);
});

// Initialize slider
slideImages();
