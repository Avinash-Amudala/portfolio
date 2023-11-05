document.addEventListener('DOMContentLoaded', (event) => {
    let slidesContainer = document.querySelector('.slides-container');
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function changeSlide(newIndex) {
        if (newIndex >= 0 && newIndex < slides.length) {
            slides.forEach((slide, index) => {
                slide.style.display = index === newIndex ? 'block' : 'none';
                if (index === newIndex) {
                    // Log the computed style of the h1 element to see if it's centered
                    console.log(window.getComputedStyle(slide.querySelector('h1')));
                }
            });
            currentIndex = newIndex;
            updateStoryBars(currentIndex);
        }
    }


    // Initialize the first slide as active
    changeSlide(currentIndex);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            changeSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
            changeSlide(currentIndex + 1);
        }
    });

    slides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            let rect = slide.getBoundingClientRect();
            let thirdWidth = rect.width / 3;
            if (e.clientX < rect.left + thirdWidth && currentIndex > 0) {
                // Clicked on the left third of the slide
                changeSlide(currentIndex - 1);
            } else if (e.clientX > rect.right - thirdWidth && currentIndex < slides.length - 1) {
                // Clicked on the right third of the slide
                changeSlide(currentIndex + 1);
            } else {
                // Clicked on the center third of the slide
                openPage(slide.getAttribute('data-detail-url'));
            }
        });
    });

    // Update the story bars to reflect the current slide
    function updateStoryBars(currentIndex) {
        let storyBars = document.querySelectorAll('.story-bar');
        storyBars.forEach((bar, index) => {
            bar.style.width = index === currentIndex ? '100%' : '0%';
        });
    }

    // Open detail page function
    function openPage(url) {
        if (url) {
            window.location.href = url;
        }
    }

    // Disable horizontal drag and touch move events
    slidesContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    document.body.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });

    // Handle touch events for mobile navigation
    document.body.addEventListener('touchstart', handleTouchStart, false);
    document.body.addEventListener('touchend', handleTouchEnd, false);

    let xDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
    }

    function handleTouchEnd(evt) {
        if (!xDown) {
            return;
        }

        let xUp = evt.changedTouches[0].clientX;
        let xDiff = xDown - xUp;
        let yDown = evt.touches[0].clientY;
        let targetRect = evt.target.getBoundingClientRect();

        // Check if the touch is in the center of the screen
        if (Math.abs(xDiff) < targetRect.width / 3 && evt.target.classList.contains('slide')) {
            // It's a tap on the center
            openPage(evt.target.getAttribute('data-detail-url'));
        } else {
            if (xDiff > 0 && currentIndex < slides.length - 1) {
                // Swiped left
                changeSlide(currentIndex + 1);
            } else if (xDiff < 0 && currentIndex > 0) {
                // Swiped right
                changeSlide(currentIndex - 1);
            }
        }

        // Reset values
        xDown = null;
    }
});
