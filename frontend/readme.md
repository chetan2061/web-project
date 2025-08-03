# Todo List Web Application

A modern, responsive todo list application with a clean kanban-style interface. Built with vanilla HTML, CSS, JavaScript frontend and Express.js backend.

## Features

- ✅ **Kanban Board Layout**: TO-DO, Doing, Done columns
- ➕ **Task Management**: Add, edit, delete, and move tasks
- 🔍 **Search Functionality**: Find tasks quickly
- 📱 **Responsive Design**: Works on desktop and mobile
- 🎨 **Modern UI**: Clean design inspired by your Figma mockup
- 🗂️ **Drag & Drop**: Move tasks between columns
- ⌨️ **Keyboard Shortcuts**: Ctrl+N (new task), Ctrl+F (search)
- 💾 **Data Persistence**: JSON file storage with localStorage fallback

## Project Structure

```
todo-app/
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styling
│   └── script.js           # JavaScript functionality
├── backend/
│   ├── server.js           # Express.js server
│   ├── package.json        # Backend dependencies
│   └── data/
│       └── tasks.json      # Task storage (auto-created)
└── README.md
```

## Setup Instructions

### Backend Setup

1. **Navigate to the project directory**:

   ```bash
   mkdir todo-app
   cd todo-app
   ```

2. **Create backend folder and files**:

   ```bash
   mkdir backend
   cd backend
   ```

3. **Copy the backend files**:

   - Copy `server.js` to the backend folder
   - Copy `package.json` to the backend folder

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the backend server**:

   ```bash
   npm start
   ```

   Or for development with auto-restart:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

### Frontend Setup

1. **Create frontend folder**:

   ```bash
   cd ..  # Go back to project root
   mkdir frontend
   cd frontend
   ```

2. **Copy the frontend files**:

   - Copy `index.html` to the frontend folder
   - Copy `styles.css` to the frontend folder
   - Copy `script.js` to the frontend folder

3. **Serve the frontend**:

   **Option A: Live Server (Recommended)**

   - Install Live Server extension in VS Code
   - Right-click on `index.html` → "Open with Live Server"

   **Option B: Python HTTP Server**

   ```bash
   # Python 3
   python -m http.server 8080

   # Python 2
   python -m SimpleHTTPServer 8080
   ```

   **Option C: Node.js HTTP Server**

   ```bash
   npx http-server -p 8080
   ```

4. **Open in browser**:
   Visit `http://localhost:8080`

## API Endpoints

The backend provides the following REST API endpoints:

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get specific task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/status` - Update task status only

### Utility

- `GET /api/health` - Health check
- `GET /api/stats` - Task statistics
- `POST /api/tasks/bulk` - Create multiple tasks
- `DELETE /api/tasks?confirm=true` - Delete all tasks

### Example API Usage

**Create a task**:

```javascript
fetch("http://localhost:3000/api/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Buy groceries",
    description: "Milk, bread, eggs",
    status: "todo",
  }),
});
```

**Update task status**:

```javascript
fetch("http://localhost:3000/api/tasks/123/status", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ status: "done" }),
});
```

## Development Features

### Detailed Comments

- **HTML**: Semantic structure with accessibility considerations
- **CSS**: Organized with sections, responsive design, modern styling
- **JavaScript**: Comprehensive comments explaining functionality
- **Backend**: Well-documented Express.js routes and middleware

### Error Handling

- Network error fallbacks to localStorage
- User-friendly error messages
- Validation on both frontend and backend
- Graceful degradation when backend is unavailable

### Performance

- Minimal external dependencies
- Efficient DOM manipulation
- Local storage backup
- Responsive design for all devices

## Customization

### Styling

- Modify `styles.css` to change colors, fonts, layout
- CSS variables for easy theme customization
- Mobile-first responsive design

### Functionality

- Add new task fields in the modal forms
- Implement additional task statuses
- Add due dates, priorities, categories
- Integrate with external APIs

### Database

- Currently uses JSON file storage
- Easy to migrate to MongoDB, PostgreSQL, etc.
- Database abstraction ready in the backend

## Keyboard Shortcuts

- `Ctrl + N` / `Cmd + N` - Add new task
- `Ctrl + F` / `Cmd + F` - Focus search
- `Escape` - Close modals

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Troubleshooting

### Backend not starting

- Check if port 3000 is available
- Ensure Node.js is installed (`node --version`)
- Run `npm install` to install dependencies

### Frontend not connecting to backend

- Verify backend is running on port 3000
- Check browser console for CORS errors
- Ensure API_BASE_URL is correct in `script.js`

### Tasks not saving

- Check if `data` folder exists in backend directory
- Verify file permissions for writing
- Check backend logs for errors

## Future Enhancements

- [ ] User authentication and multiple users
- [ ] Real-time collaboration with WebSockets
- [ ] Task due dates and reminders
- [ ] File attachments to tasks
- [ ] Task categories and tags
- [ ] Advanced search and filtering
- [ ] Dark/light theme toggle
- [ ] Mobile app version
- [ ] Integration with calendar apps
- [ ] Backup and export functionality

## License

MIT License - feel free to use this project for learning and development!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Happy task managing! 🚀**
