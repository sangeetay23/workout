## Health Tracker App Documentation

This documentation outlines the functionality and structure of the health tracker application built using HTML, CSS, and JavaScript. 

### 1.  `index.html`: The Main Structure

- **DOCTYPE declaration**: Specifies the document type as HTML5.
- **HTML tag**: Defines the root element of the HTML document.
- **Head Section:**
    - **Title**: Sets the title of the webpage, displayed in the browser tab.
    - **Links:**
        - **Font Awesome CDN**: Includes the Font Awesome library for icons.
        - **style.css**: Links the external CSS file for styling the page.
- **Body Section:**
    - **app div:** Contains the main content of the application, including:
        - **Heading**: Displays the application title.
        - **inputs div:** Holds input fields for water intake, exercise duration, and blood sugar level.
        - **Submit Button:** Triggers the submission of data.
        - **editSection div (hidden):** Contains buttons for canceling and updating entries, visible only during the edit process.
        - **Table:** Displays the entered workout data with columns for date, water intake, exercise duration, blood sugar level, and options to edit or delete entries.
    - **Script Tags:**
        - **Font Awesome CDN**: Includes the JavaScript file for Font Awesome icons.
        - **script.js**: Links the external JavaScript file containing the application's logic.

### 2.  `script.js`: The Application Logic

- **API_URL**: Defines the endpoint for storing data, assumed to be a backend server running locally on port 5001.
- **Event Listener:**
    - Listens for the click event on the "Submit" button, triggering the `submitForm` function.
- **submitForm Function:**
    - Retrieves values from input fields for water intake, exercise duration, and blood sugar level.
    - Creates an object (`workoutData`) containing the input values and the current date.
    - Sends a POST request to the API endpoint (`API_URL`) using `fetch` to store the data in MongoDB.
    - Calls `addDataToTable` to display the new data in the table.
    - Clears the input fields after submission.
- **addDataToTable Function:**
    - Appends a new row to the table with the provided data.
    - Includes buttons for editing and deleting the entry.
- **editEntry Function (Placeholder):**
    - (Not yet implemented) This function would be responsible for enabling editing an existing entry in the table.
- **deleteEntry Function (Placeholder):**
    - (Not yet implemented) This function would be responsible for deleting an entry from the table and potentially also from the backend database.

### 3.  `style.css`: Styling the Application

- **General Styles:**
    - Resets margins and padding for all elements.
    - Sets default font family, background color, and text color for the body.
- **Heading Styles:**
    - Applies a linear gradient background to the heading elements (h1 and h3) and sets the text color to transparent to reveal the gradient.
- **app Div Styles:**
    - Centers the content horizontally and vertically within the page.
    - Sets width, margin, padding, and gap between elements.
- **inputs Div Styles:**
    - Divides input fields into separate sections using flexbox.
- **Label and Input Styles:**
    - Styles labels, input fields, and provides focus styles.
- **Button Styles:**
    - Styles the submit button with a gradient background, hover effects, and transition.
- **editSection Styles:**
    - Styles the edit section with buttons for updating and canceling.
- **Table Styles:**
    - Sets table width, border collapse, overflow, and background colors for even and odd rows.
- **Edit and Delete Button Styles:**
    - Styles the edit and delete buttons with hover effects.
- **Delete Animation:**
    - Animates the deleted row by translating it to the right with a red background color.

### 4.  Functionality Overview

- **Data Entry:**
    - Users enter water intake, exercise duration, and blood sugar level into the provided input fields.
    - Clicking the "Submit" button sends the data to the backend server.
- **Data Display:**
    - The entered data is displayed in a table with columns for date, water intake, exercise duration, blood sugar level, and actions to edit or delete.
- **Data Editing:**
    - The edit functionality is not yet implemented but would allow users to modify existing data entries.
- **Data Deletion:**
    - The delete functionality is not yet implemented but would allow users to remove existing data entries.

### 5.  Future Enhancements

- **Implement Edit and Delete Functionality:** Implement the `editEntry` and `deleteEntry` functions to allow users to modify and remove data entries.
- **Add Data Visualization:** Incorporate charts or graphs to visually represent the entered data.
- **Add User Authentication:** Implement user accounts to enable personalized data tracking and sharing.
- **Enhance User Interface:** Improve the user interface with more interactive elements and design features.

This documentation provides a comprehensive overview of the health tracker application. The provided code serves as a starting point for further development and customization. 
