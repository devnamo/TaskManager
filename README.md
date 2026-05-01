Task Manager API

A simple backend project where users can create projects, assign tasks, and track progress.

---------------------------------------------------------

What this project does

- Users can sign up and log in  
- Logged-in users can create projects  
- Tasks can be created under a project  
- Tasks can be assigned to users  
- Dashboard shows basic task stats  

Everything is built using REST APIs and tested with Thunder Client.

----------------------------------------------------------

Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- JWT (for authentication)  
- Bcrypt (for password hashing)  

--------------------------------------------------

How to run locally

1. Clone the repo

git clone https://github.com/devnamo/TaskManager.git  
cd TaskManager  

2. Install dependencies

npm install  

3. Create a .env file in root folder and add:

MONGO_URI = mongodb_connection_string  
JWT_SECRET = secret_key  

4. Start server

npm run dev  

Server will run on:  
http://localhost:5000  

--------------------------------------------------

API Endpoints

Auth

POST /api/auth/signup -> create user  
POST /api/auth/login -> login user  

Projects

POST /api/projects/create -> create project (requires token)  

Tasks

POST /api/tasks/create -> create task (requires token)  
GET /api/tasks/dashboard -> get task stats  

--------------------------------------------------

How authentication works

- On login, a token is returned  
- This token is sent in headers for protected routes  

Example:

Authorization: your_token  

--------------------------------------------------

Deployment

The backend is deployed on Railway.

Live URL:

https://taskmanager-production-8be5.up.railway.app  

--------------------------------------------------

Notes

- .env file is not uploaded for security  
- node_modules is ignored using .gitignore  
- APIs were tested using Thunder Client  

--------------------------------------------------

Demo

The demo shows:

- signup  
- login  
- project creation  
- task creation  
- dashboard  

--------------------------------------------------

End of file
