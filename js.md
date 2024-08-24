```javascript
document.addEventListener("DOMContentLoaded", () => {
```

- **`document.addEventListener("DOMContentLoaded", ...)`**: This line attaches an event listener to the `document`. The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The `() => { ... }` is an arrow function that runs when the event is triggered. This ensures that the JavaScript code runs only after the DOM is fully loaded.

```javascript
let currentlySelected = 0;
```

- **`let currentlySelected = 0;`**: This declares a variable `currentlySelected` using `let` (which allows the variable to be re-assigned later). It is initialized to `0`, meaning the first image in the gallery (at index `0`) is currently selected.

```javascript
const galleryImages = document.querySelectorAll(".gallery-img");
```

- **`const galleryImages = document.querySelectorAll(".gallery-img");`**: This line selects all elements in the document with the class `gallery-img` and stores them in a constant variable `galleryImages`. The `querySelectorAll` method returns a `NodeList` (which is similar to an array) containing all matching elements. Since `const` is used, `galleryImages` cannot be reassigned.

```javascript
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
```

- **`const prevBtn = document.querySelector(".prev");`** and **`const nextBtn = document.querySelector(".next");`**: These lines select the buttons for navigating through the gallery. The `prevBtn` variable holds the element with the class `prev` (the "Previous" button), and `nextBtn` holds the element with the class `next` (the "Next" button). These buttons will be used to trigger the navigation between images.

```javascript
const updateButtons = () => {
  prevBtn.disabled = currentlySelected === 0;
  nextBtn.disabled = currentlySelected === galleryImages.length - 1;
};
```

- **`const updateButtons = () => { ... };`**: This defines a function `updateButtons` that checks the current state of the `currentlySelected` index and enables or disables the navigation buttons accordingly.
  - **`prevBtn.disabled = currentlySelected === 0;`**: This disables the "Previous" button if the `currentlySelected` index is `0`, meaning the first image is selected and there's no previous image to navigate to.
  - **`nextBtn.disabled = currentlySelected === galleryImages.length - 1;`**: This disables the "Next" button if the `currentlySelected` index is equal to the last index in the `galleryImages` list (`galleryImages.length - 1`), meaning the last image is selected and there's no next image to navigate to.

```javascript
const updateGallery = (newIndex) => {
  galleryImages[currentlySelected].classList.remove("active");
  currentlySelected = newIndex;
  galleryImages[currentlySelected].classList.add("active");
  updateButtons();
};
```

- **`const updateGallery = (newIndex) => { ... };`**: This defines a function `updateGallery` that updates the displayed image in the gallery.
  - **`galleryImages[currentlySelected].classList.remove("active");`**: This removes the `active` class from the currently selected image, hiding it.
  - **`currentlySelected = newIndex;`**: This updates the `currentlySelected` variable to the new index passed as an argument (`newIndex`).
  - **`galleryImages[currentlySelected].classList.add("active");`**: This adds the `active` class to the new image at the updated `currentlySelected` index, making it visible.
  - **`updateButtons();`**: This calls the `updateButtons` function to enable or disable the "Previous" and "Next" buttons based on the new `currentlySelected` index.

```javascript
prevBtn.addEventListener("click", () => {
  if (currentlySelected > 0) {
    updateGallery(currentlySelected - 1);
  }
});
```

- **`prevBtn.addEventListener("click", () => { ... });`**: This attaches a `click` event listener to the `prevBtn` ("Previous" button).
  - **`if (currentlySelected > 0) { ... }`**: This checks if the current selection is greater than `0` (i.e., not the first image). If true:
  - **`updateGallery(currentlySelected - 1);`**: Calls the `updateGallery` function with the index of the previous image (`currentlySelected - 1`), effectively moving back one image in the gallery.

```javascript
nextBtn.addEventListener("click", () => {
  if (currentlySelected < galleryImages.length - 1) {
    updateGallery(currentlySelected + 1);
  }
});
```

- **`nextBtn.addEventListener("click", () => { ... });`**: This attaches a `click` event listener to the `nextBtn` ("Next" button).
  - **`if (currentlySelected < galleryImages.length - 1) { ... }`**: This checks if the current selection is less than the last index in `galleryImages` (i.e., not the last image). If true:
  - **`updateGallery(currentlySelected + 1);`**: Calls the `updateGallery` function with the index of the next image (`currentlySelected + 1`), effectively moving forward one image in the gallery.

```javascript
updateButtons(); // Initialize button states on page load
```

- **`updateButtons();`**: This line calls the `updateButtons` function immediately after setting up the event listeners to ensure that the button states (enabled/disabled) are correctly initialized based on the current selection (`currentlySelected`). This ensures that the "Previous" button is disabled when the page first loads if the first image is selected.

```javascript
});
```

- **`});`**: This closes the arrow function that was passed to the `DOMContentLoaded` event listener, concluding the script.

### Summary:

This JavaScript code controls a simple image gallery. It initializes the gallery by selecting the first image, enables or disables the navigation buttons based on the current selection, and allows the user to navigate through the images using "Previous" and "Next" buttons. The code is wrapped in a `DOMContentLoaded` event listener to ensure it runs only after the DOM has fully loaded, preventing errors due to elements not being available when the script runs.
