# Animated Cool Search Bar

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-cool-search-bar/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete, responsive recreation of the uploaded 13.07-second screen recording.

## What appears in the video

- Title: **Animated Cool Search Bar**
- Black title strip with bright lime-green heading.
- Light-grey demo canvas.
- A compact white search control with a dark outline and a magnifying-glass button.
- The search control expands smoothly from **50px** to **300px** when focused.
- The input is hidden while collapsed and appears when the search container receives focus.
- The lower caption reads: **Comment "Search" for code**.

## Code visibly transcribed from the recording

### HTML shown on screen

```html
<div class="search-box">
  <input type="text" placeholder="Search...">
  <button type="submit">⌕</button>
</div>
```

### CSS shown on screen (readable portions, spacing normalized)

```css
body {
  background-color: #ccc;
  margin: 20%;
}

.search-box {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  transition: width 0.4s ease-in-out;
  overflow: hidden;
  border: 2px solid #333;
}

.search-box:focus-within {
  width: 300px;
}

.search-box input {
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0 15px;
  font-size: 16px;
  display: none;
}

.search-box:focus-within input {
  display: block;
}

.search-box button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0 15px;
}
```

The code above preserves the CSS declarations that are legible in the video. The runnable version adjusts the outer page spacing for a responsive viewport, uses an SVG magnifier in place of the tiny text glyph, and adds a small demo submit response.

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. Click the small magnifier or focus the search control. It expands.
4. Type a query and press Enter or click the magnifier to see demo feedback.
5. Click outside the search bar to see it collapse again.

No npm packages, build tools, or server are required.

## Project files

- `index.html` — search form and page structure
- `style.css` — animated width, focus-within behavior and responsive layout
- `script.js` — demo submit feedback and focus interaction

## Source fidelity

The video exposes a short HTML snippet and much of the CSS, which are transcribed above. The full original source is not completely visible; the remainder is a working implementation based on the rendered reference, not a byte-for-byte extraction of hidden source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
