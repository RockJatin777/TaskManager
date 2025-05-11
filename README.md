# 📝 MERN Task Manager App

This is a simple **Task Management Web Application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) with **Redux Toolkit** for state management.

## 📌 Features

- ✅ Add a new task with title, description, and due date
- 🔄 Mark tasks as **Pending** or **Completed**
- 🗑️ Delete a task
- 📦 State managed with Redux Toolkit
- 📡 Connects frontend and backend using RESTful API
- 💡 Simple and responsive UI

---

## 🛠 Tech Stack

### Frontend:
- React + Vite
- Redux Toolkit
- Axios
- CSS Modules

### Backend:
- Node.js
- Express.js
- MongoDB (using Mongoose)

---

## 📂 Project Structure

/backend
├── server.js
├── routes/
├── models/
└── controllers/

/frontend
├── src/
├── components/
├── redux/
├── middleware/
└── App.jsx


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RockJatin777/TaskManager
cd task-manager

2. Start Backend

'''bash
cd backend
npm install
npm start
Make sure MongoDB is running on your system.

3. Start Frontend
cd frontend
npm install
npm run dev


📬 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update task status
DELETE	/tasks/:id	Delete a task by ID

📸 UI Preview
![image](https://github.com/user-attachments/assets/67c96172-9a80-40b1-bb3c-c64d53041e5f)


📄 License
This project is open-source and free to use.

🙋‍♂️ Author
Developed by Jitin Gupta – MCA Student



---
