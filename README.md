# Project 4 - Interactive React Dashboard

A Vite React project demonstrating components, JSX, props, state, events, conditional rendering, and custom CSS.

## Project Requirements

This project includes:

- Vite React project
- 6 separate React components
- Multiple `useState` values
- More than 3 user interactions
- Conditional rendering
- Reusable components using props
- Custom responsive CSS
- Organized project files
- Sample data with no API or database

## Interactive Features

The dashboard lets the user:

1. Add a new task.
2. Mark a task complete or active.
3. Delete a task.
4. Filter tasks by All, Active, or Completed.
5. Search tasks by name.
6. Reset the dashboard.

## Components

- `Header.jsx` - Dashboard header
- `Dashboard.jsx` - Calculates and displays dashboard statistics
- `StatCard.jsx` - Reusable statistics card using props
- `FilterButtons.jsx` - Task filter controls
- `TaskList.jsx` - Displays tasks or an empty state
- `TaskItem.jsx` - Individual reusable task component

## Run the Project

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Create a Production Build

```bash
npm run build
```

The production files will be placed in the `dist` folder.

## GitHub Upload

Do not upload `node_modules`.

Recommended repository structure:

```text
project-4-interactive-react-dashboard/
├── src/
├── public/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

If using GitHub Pages, enable Pages from the repository's Settings > Pages area after uploading the project and building/deploying it.
