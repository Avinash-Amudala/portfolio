document.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.querySelectorAll('.slide');
    let storyBars = document.querySelectorAll('.story-bar');
    let currentIndex = 0;
    let progressTimeout;

    function changeSlide(newIndex) {
        slides[currentIndex].style.display = 'none'; // Hide current slide
        slides[newIndex].style.display = 'block'; // Show new slide
        currentIndex = newIndex;
        updateProgress();
        window.location.hash = 'slide' + newIndex;
    }
    window.addEventListener('hashchange', function() {
        // When the hash changes (e.g., when using the back button), read the new hash and change to that slide
        var slideIndex = window.location.hash.replace('#slide', '');
        changeSlide(parseInt(slideIndex));
    });

    // On page load, check if there's a hash and navigate to that slide
    document.addEventListener('DOMContentLoaded', function() {
        if(window.location.hash) {
            var slideIndex = window.location.hash.replace('#slide', '');
            changeSlide(parseInt(slideIndex));
        }
    });
    function updateProgress() {
        clearTimeout(progressTimeout); // Clear any existing timeout
        storyBars.forEach(bar => bar.style.width = '0%'); // Reset all bars
        // Immediately start filling the current bar
        storyBars[currentIndex].classList.add('story-bar-active');
        // Set a timeout to reset the bar after 30 seconds
        progressTimeout = setTimeout(() => {
            storyBars[currentIndex].classList.remove('story-bar-active');
            storyBars[currentIndex].style.width = '0%';
            // Restart the fill animation by re-adding the class
            setTimeout(() => {
                storyBars[currentIndex].classList.add('story-bar-active');
            }, 10);
        }, 30000); // Timeout set to 30 seconds
    }

    // Set initial slide visibility and start the first progress bar
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
    updateProgress();

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
