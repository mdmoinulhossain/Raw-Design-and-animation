// Select all anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const initialY = window.pageYOffset;
    const targetY = targetElement.getBoundingClientRect().top + initialY;
    const duration = 1500; // Change this to adjust the scrolling speed
    const easing = (t) => t * (2 - t); // Change this to adjust the scrolling easing

    // Define the animation function
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easing(progress);
      const newY = initialY + (targetY - initialY) * easeProgress;
      window.scrollTo(0, newY);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Call the animation function
    const startTime = performance.now();
    requestAnimationFrame(animateScroll);
  });
});
