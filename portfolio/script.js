let slidesContainer = document.querySelector('.slides-container');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let homepage = document.querySelector('#homepage');
let homepageContent = document.querySelector('.homepage-content');
let currentIndex = 0;

// Call this function once at the start
changeSlide(currentIndex);

homepage.addEventListener('click', () => {
    homepageContent.classList.toggle('active'); // Use toggle here to show/hide on repeated clicks
});

function changeSlide(newIndex) {
    if (newIndex >= 0 && newIndex < slides.length) {
        let offset = -newIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}vw)`;

        // Remove active class from all headers and dots
        slides.forEach(slide => {
            slide.querySelector('h1').classList.remove('active-header');
        });
        dots[currentIndex].classList.remove('active');

        // Set the active slide
        currentIndex = newIndex;
        slides[currentIndex].querySelector('h1').classList.add('active-header');
        dots[currentIndex].classList.add('active');
    }
}

dots[currentIndex].classList.add('active');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
});

slides.forEach((slide) => {
    slide.addEventListener('click', (e) => {
        if (slide.id === "homepage") {
            let content = slide.querySelector('.slide-content');
            if (content) {
                content.classList.toggle('active');  // Toggle the content up and down
            }
        }
    });
});


document.getElementById('exit-btn').addEventListener('click', () => {
    let content = document.querySelector('.slide-content.active');
    if (content) {
        content.classList.remove('active');  // Slide the content down
    }
});




document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(currentIndex + 1);
    }
});

slidesContainer.addEventListener('mousedown', (e) => {
    let startX = e.clientX;

    slidesContainer.addEventListener('mouseup', (e) => {
        let endX = e.clientX;
        let distance = endX - startX;

        // Slide to the right
        if (distance > 50) {
            changeSlide(currentIndex - 1);
        }
        // Slide to the left
        else if (distance < -50) {
            changeSlide(currentIndex + 1);
        }
    }, { once: true });
});

homepage.addEventListener('click', () => {
    homepageContent.classList.toggle('active');
    homepage.classList.toggle('active-slide');
});

document.getElementById('exit-btn').addEventListener('click', () => {
    homepageContent.classList.remove('active');
    homepage.classList.remove('active-slide');
});

function openPage(url) {
    window.location.href = url;
}
document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'index.html';  // Assuming the main page with slides is named 'index.html'
});

const instructionBubble = document.getElementById('instruction-bubble');

document.body.addEventListener('click', () => {
    if (instructionBubble) {
        instructionBubble.style.display = 'none';
    }
});

// Handle swipe left to close the instruction
let startX;

document.body.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
});

document.body.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;

    // Check for a swipe left action
    if (startX > endX + 100) {
        if (instructionBubble) {
            instructionBubble.style.display = 'none';
        }
    }
});
