document.addEventListener("DOMContentLoaded", () => {
  let currentlySelected = 0;
  const galleryImages = document.querySelectorAll(".gallery-img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const updateButtons = () => {
    prevBtn.disabled = currentlySelected === 0;
    nextBtn.disabled = currentlySelected === galleryImages.length - 1;
  };

  const updateGallery = (newIndex) => {
    galleryImages[currentlySelected].classList.remove("active");
    currentlySelected = newIndex;
    galleryImages[currentlySelected].classList.add("active");
    updateButtons();
  };

  prevBtn.addEventListener("click", () => {
    if (currentlySelected > 0) {
      updateGallery(currentlySelected - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentlySelected < galleryImages.length - 1) {
      updateGallery(currentlySelected + 1);
    }
  });

  updateButtons(); // Initialize button states on page load
});
