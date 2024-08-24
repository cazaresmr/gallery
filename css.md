Let’s break down the CSS code line by line:

### Global Styles

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

- **`*`**: The asterisk (`*`) is the universal selector. It targets all elements on the page.
- **`box-sizing: border-box;`**: This CSS property alters the default CSS box model. It ensures that the `padding` and `border` of elements are included within the element's `width` and `height`. This makes it easier to size elements accurately.
- **`margin: 0;`** and **`padding: 0;`**: These properties reset the default margins and padding of all elements to `0`, ensuring consistent spacing across different browsers.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
```

- **`body`**: This selector targets the `<body>` element of the HTML document.
- **`font-family: Arial, sans-serif;`**: This sets the font of the entire page to `Arial`, with `sans-serif` as the fallback font family.
- **`background-color: #f0f0f0;`**: This sets the background color of the page to a light grey (`#f0f0f0`).

### Gallery Container

```css
.gallery-container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}
```

- **`.gallery-container`**: This targets the element with the class `gallery-container`.
- **`max-width: 1200px;`**: This sets the maximum width of the container to `1200px`. The container won't exceed this width even if the screen is larger.
- **`margin: 50px auto;`**: This centers the container horizontally by setting `auto` for left and right margins, and adds `50px` of margin on the top and bottom.
- **`padding: 20px;`**: This adds `20px` of padding inside the container, providing space between the container's content and its border.
- **`background-color: #ffffff;`**: This sets the background color of the container to white (`#ffffff`).
- **`box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);`**: This adds a shadow to the container. The shadow is `2px` below the element and extends `8px` horizontally with a slight blur. The color of the shadow is a semi-transparent black (`rgba(0, 0, 0, 0.1)`).
- **`border-radius: 10px;`**: This rounds the corners of the container by `10px`.
- **`text-align: center;`**: This centers the text and inline elements inside the container.

### Image Gallery

```css
.image-gallery {
  position: relative;
  max-height: 600px;
  overflow: hidden;
}
```

- **`.image-gallery`**: This targets the element with the class `image-gallery`.
- **`position: relative;`**: This positions the gallery relatively to its normal position, allowing absolutely positioned elements inside it to be positioned relative to it.
- **`max-height: 600px;`**: This limits the maximum height of the gallery to `600px`.
- **`overflow: hidden;`**: This hides any content that exceeds the height or width of the `.image-gallery` container.

```css
.gallery-img {
  width: 100%;
  height: auto;
  display: none;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out;
}
```

- **`.gallery-img`**: This targets elements with the class `gallery-img`.
- **`width: 100%;`**: This sets the width of the images to `100%` of their parent container's width.
- **`height: auto;`**: This ensures that the image's height is automatically scaled in proportion to its width, preserving its aspect ratio.
- **`display: none;`**: This hides the images by default.
- **`border-radius: 10px;`**: This rounds the corners of the images by `10px`.
- **`transition: opacity 0.5s ease-in-out;`**: This animates the `opacity` property over `0.5` seconds with an ease-in-out timing function, creating a smooth fade effect when the image's visibility changes.

```css
.gallery-img.active {
  display: block;
  opacity: 1;
}
```

- **`.gallery-img.active`**: This targets elements with both `gallery-img` and `active` classes.
- **`display: block;`**: This changes the display of the active image from `none` to `block`, making it visible.
- **`opacity: 1;`**: This sets the opacity of the active image to fully visible (`1`).

### Gallery Controls

```css
.gallery-controls {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
```

- **`.gallery-controls`**: This targets the element with the class `gallery-controls`.
- **`margin-top: 20px;`**: This adds `20px` of space above the controls.
- **`display: flex;`**: This applies flexbox layout to the controls, making it easier to align and space out the buttons.
- **`justify-content: center;`**: This centers the buttons horizontally within the container.
- **`gap: 15px;`**: This adds `15px` of space between each button.

```css
.btn {
  background-color: #0074d9;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
```

- **`.btn`**: This targets elements with the class `btn`.
- **`background-color: #0074d9;`**: This sets the button's background color to a specific shade of blue (`#0074d9`).
- **`color: #ffffff;`**: This sets the button's text color to white (`#ffffff`).
- **`font-size: 18px;`**: This sets the button's font size to `18px`.
- **`padding: 10px 25px;`**: This adds `10px` of padding vertically and `25px` horizontally inside the button.
- **`border: none;`**: This removes any border around the button.
- **`border-radius: 5px;`**: This rounds the corners of the button by `5px`.
- **`cursor: pointer;`**: This changes the cursor to a pointer (hand icon) when hovering over the button, indicating it's clickable.
- **`transition: background-color 0.3s ease;`**: This animates the `background-color` property over `0.3` seconds with an ease timing function, creating a smooth color change effect when hovered.

```css
.btn:hover {
  background-color: #005fa3;
}
```

- **`.btn:hover`**: This targets buttons with the class `btn` when they are hovered over.
- **`background-color: #005fa3;`**: This changes the button's background color to a darker blue (`#005fa3`) when hovered.

```css
.btn:disabled {
  background-color: #666666;
  cursor: not-allowed;
  opacity: 0.6;
}
```

- **`.btn:disabled`**: This targets buttons with the class `btn` when they are disabled.
- **`background-color: #666666;`**: This changes the background color of disabled buttons to grey (`#666666`), indicating that they are inactive.
- **`cursor: not-allowed;`**: This changes the cursor to a "not-allowed" symbol (usually a circle with a line through it), indicating that the button cannot be clicked.
- **`opacity: 0.6;`**: This reduces the opacity of disabled buttons to `60%`, making them appear faded.

### Summary:

This CSS code defines the layout and styling of a gallery page, including global resets, container styling, image display, and interactive controls. The use of flexbox for layout and CSS transitions for animations ensures a smooth and responsive user experience. The code is modular, making it easy to adjust and maintain.
