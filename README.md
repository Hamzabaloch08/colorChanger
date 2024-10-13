# JavaScript Background Color Switcher

This is a simple web project that allows users to change the background color of the page by clicking on different colored buttons. Each button corresponds to a specific color, and the background color of the page changes dynamically based on the button selected.

## Project Structure

The project consists of three main files:

1. **index.html** - The main HTML file that sets up the page structure.
2. **style.css** - The CSS file that styles the buttons and page layout.
3. **app.js** - The JavaScript file that handles the functionality of changing the background color.

## How It Works

- The `index.html` file contains a set of `span` elements, each with a class of `.button` and a unique `id` corresponding to a color.
- The `style.css` file defines the size and initial colors of the buttons using the `id` attribute.
- The `app.js` file adds an event listener to each button. When a button is clicked, the `body` background color is changed according to the `id` of the clicked button.
  - For certain backgrounds like grey, yellow, and dark, the text color is also adjusted for better contrast.

## How to Run the Project

1. Download the project files or clone the repository.
2. Ensure that all three files (`index.html`, `style.css`, and `app.js`) are in the same directory.
3. Open the `index.html` file in a web browser.
4. Click on any of the color buttons to change the background color of the page.

## Future Improvements

- Add more colors to the switcher.
- Implement smooth transitions between color changes.
- Add an option for users to input their own color codes.
