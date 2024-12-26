# Mobile To-Do Application

A simple and responsive to-do list application built using HTML, JavaScript, and styled with Tailwind CSS. This app helps users manage their tasks efficiently while offering a clean and modern design.

---

## Features
- **Add, Edit, and Delete Tasks:** Easily manage your to-do items.
- **Responsive Design:** Optimized for both mobile and desktop devices.
- **Lightweight and Fast:** No unnecessary bloat, built with simplicity in mind.
- **Customizable Styles:** Tailwind CSS allows you to modify the design with minimal effort.

---

## Prerequisites
Before running or deploying the project, ensure you have the following installed:
1. **Node.js and npm** (Node Package Manager): Required for dependency management.
2. A modern web browser for testing the application.

---

## Installation and Usage

### 1. Clone the Repository
Clone this project to your local machine:
```bash
git clone https://github.com/amaanp32/To-Do-App.git
```

```bash
cd To-Do-App
```

### 2. Install Dependencies
Install the required dependencies by running:
```bash
npm install
```

### 3. Compile Tailwind CSS
If you need to modify or customize the styles, recompile Tailwind CSS:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
This will watch for any changes in the `input.css` file and generate an updated `output.css`.

### 4. Run the Application
Open the `src/index.html` file in your browser. You can do this by:
- Double-clicking the file.
- Using a live server (e.g., the VS Code Live Server extension).

---

### Live Demo
[View Live Project](https://amaanp32.github.io/To-Do-App/)

---

## Tools and Technologies Used
- **HTML5**: Structuring the content.
- **Tailwind CSS**: Modern utility-first CSS framework for styling.
- **JavaScript**: Adding interactivity and application logic.
- **Node.js and npm**: For managing dependencies and Tailwind CSS.

---

## Customization
You can easily customize the project:
1. **Modify Tailwind Config:** Edit `tailwind.config.js` to add custom colors, fonts, or utilities.
2. **Edit Styles:** Add custom CSS in `input.css` and recompile using Tailwind.
3. **Extend Functionality:** Add more features by modifying `script.js` or creating additional JavaScript files.

---

## Future Enhancements
Potential improvements that can be added to the project:
- **Dark Mode:** Toggle between light and dark themes.
- **Task Prioritization:** Add priority levels to tasks.
- **Persistent Storage:** Save tasks in the browser using LocalStorage or a database.
- **Authentication:** Allow users to log in and sync tasks across devices.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
