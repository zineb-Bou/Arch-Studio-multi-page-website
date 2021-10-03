// Implement the carousel
// varaibles
const carousel = document.querySelector('.carousel__tracker');
const slides = Array.from(carousel.children);
const button_list = document.querySelector('.btn-list');
const carousel_button = Array.from(button_list.children);
// Get the slide width
const slideWidth = slides[0].getBoundingClientRect().width;
// Arrange the slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Functions
// Funciton that show slides
function showSlides(carousel, targetSlide, currentSlide) {
  // Move the slide
  carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// Function that select a button using Id
function changeButtonStyle(activeButtonId, targetButtonId) {
  const activeButton = button_list.querySelector(activeButtonId);
  const targetButton = button_list.querySelector(targetButtonId);
  activeButton.classList.remove('active');
  targetButton.classList.add('active');
}

// Function that changes slides automatically every 3 seconds
function autoShowSlide() {
  let i = 0;
  setInterval(() => {
    if (i == slides.length) {
      i = 0;
    } else {
      let targetSlide = slides[i + 1];
      let currentSlide = slides[i];
      let activeButtonId = `#btn-${i + 1}`;
      let targetButtonId = `#btn-${i + 2}`;
      if (i + 1 == 4) {
        targetSlide = slides[0];
        targetButtonId = `#btn-${1}`;
      }
      showSlides(carousel, targetSlide, currentSlide);
      changeButtonStyle(activeButtonId, targetButtonId);
      i++;
    }
  }, 3000);
}
// Function that shows a silde when a specific button is clicked
function showSildeWhenButtonClicked() {
  // Add click event to all buttons
  button_list.addEventListener('click', (e) => {
    // Find out which button was clicked on?
    const targetButton = e.target;
    const currentSlide = carousel.querySelector('.current-slide');
    const activeButton = button_list.querySelector('.active');
    // update button style when is clicked
    activeButton.classList.remove('active');
    targetButton.classList.add('active');
    // when the specific button is clicked move to the specific slide
    const targetIndex = carousel_button.findIndex((b) => b === targetButton);
    const targetSlide = slides[targetIndex];
    showSlides(carousel, targetSlide, currentSlide);
  });
}

// Implementation
showSildeWhenButtonClicked();
autoShowSlide();
