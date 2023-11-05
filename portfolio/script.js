document.addEventListener('DOMContentLoaded', (event) => {
    let slidesContainer = document.querySelector('.slides-container');
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function changeSlide(newIndex) {
        if (newIndex >= 0 && newIndex < slides.length) {
            // Update the story bars first
            let storyBars = document.querySelectorAll('.story-bar');
            storyBars.forEach((bar, index) => {
                bar.style.width = index <= newIndex ? '100%' : '0%';
            });

            // Now, handle the display of slides
            slides.forEach((slide, index) => {
                slide.style.display = index === newIndex ? 'flex' : 'none';  // Set to 'flex' to maintain centering
            });
            currentIndex = newIndex;
        }
    }


    // Initialize story bars and the first slide as active
    initializeStoryBars();
    changeSlide(currentIndex);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            changeSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
            changeSlide(currentIndex + 1);
        }
    });

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            let detailURL = slide.getAttribute('data-detail-url');
            if (detailURL) {
                openPage(detailURL);
            }
        });
    });

    // Open detail page function
    function openPage(url) {
        window.location.href = url;
    }

    // Initialize story bars function
    function initializeStoryBars() {
        let storyBars = document.querySelectorAll('.story-bar');
        storyBars.forEach((bar, index) => {
            bar.style.width = '0%';
            bar.addEventListener('click', () => changeSlide(index));
        });
    }

    // Close instruction bubble on click anywhere
    let instructionBubble = document.getElementById('instruction-bubble');
    if (instructionBubble) {
        document.body.addEventListener('click', () => {
            instructionBubble.style.display = 'none';
        });
    }

    // Handle touch events for mobile navigation
    let touchStartX;

    document.body.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    document.body.addEventListener('touchend', (e) => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchStartX > touchEndX + 100 && currentIndex > 0) {
            changeSlide(currentIndex - 1);
        } else if (touchStartX < touchEndX - 100 && currentIndex < slides.length - 1) {
            changeSlide(currentIndex + 1);
        }
    });
    // Assuming slidesContainer is already defined

    slidesContainer.addEventListener('mousedown', (e) => {
        e.preventDefault(); // This prevents the default click behavior which is the start of a drag event
    });

    document.body.addEventListener('touchmove', (e) => {
        e.preventDefault(); // This prevents touch-based scrolling
    }, { passive: false }); // Use passive: false to ensure the prevention works

});
