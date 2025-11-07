# Step-by-Step Terminal Commands to Run RBAC MERN Application

## Prerequisites
- Node.js 18+ and npm installed
- MongoDB installed and running (or MongoDB Atlas account)

---

## STEP 1: Navigate to Project Directory

```bash
cd "C:\Users\H5CD3\Downloads\Charu Didi Work\rbac-mern\rbac-mern"
```

---

## STEP 2: Setup MongoDB

### Option A: Local MongoDB
Make sure MongoDB is running on your system:
```bash
# Check if MongoDB is running (Windows)
# MongoDB should be running as a service
# If not installed, download from: https://www.mongodb.com/try/download/community
```

### Option B: MongoDB Atlas (Cloud)
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string

---

## STEP 3: Setup Backend

### 3.1 Navigate to Backend Directory
```bash
cd backend
```

### 3.2 Install Backend Dependencies
```bash
npm install
```

### 3.3 Create Environment File
Create a `.env` file in the `backend` directory:

**Windows (PowerShell):**
```powershell
New-Item -Path .env -ItemType File
```

**Windows (CMD):**
```cmd
type nul > .env
```

**Or manually create `.env` file with these contents:**
```env
MONGO_URI=mongodb://localhost:27017/rbac_demo
JWT_SECRET=your_strong_secret_key_here_change_this_in_production
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d
LOG_LEVEL=info
```

**If using MongoDB Atlas, replace MONGO_URI with your Atlas connection string:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/rbac_demo
```

### 3.4 Seed Database (Create Test Users)
```bash
npm run seed
```

This creates three test users:
- **Admin**: username: `admin`, password: `adminpass`
- **Editor**: username: `editor`, password: `editorpass`
- **Viewer**: username: `viewer`, password: `viewerpass`

### 3.5 Start Backend Server

**For Development (with auto-restart):**
```bash
npm run dev
```

**For Production:**
```bash
npm start
```

The backend will run on `http://localhost:5000`

**Keep this terminal window open!**

---

## STEP 4: Setup Frontend (Open a NEW Terminal Window)

### 4.1 Navigate to Frontend Directory
```bash
cd "C:\Users\H5CD3\Downloads\Charu Didi Work\rbac-mern\rbac-mern\frontend"
```

### 4.2 Install Frontend Dependencies
```bash
npm install
```

### 4.3 Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

**Keep this terminal window open!**

---

## STEP 5: Access the Application

1. Open your browser and go to: `http://localhost:5173`
2. Login with one of the test accounts:
   - **Admin**: `admin` / `adminpass`
   - **Editor**: `editor` / `editorpass`
   - **Viewer**: `viewer` / `viewerpass`

---

## Quick Reference Commands

### Backend Commands (from `backend` directory):
```bash
npm install          # Install dependencies
npm run seed         # Seed database with test users
npm start            # Start production server
npm run dev          # Start development server (with auto-restart)
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Frontend Commands (from `frontend` directory):
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running: Check MongoDB service status
- Verify `MONGO_URI` in `.env` file is correct
- For local MongoDB: Ensure it's running on port 27017

### Port Already in Use
- Backend (port 5000): Change `PORT` in `.env` file
- Frontend (port 5173): Vite will automatically use next available port

### Dependencies Installation Issues
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### CORS Errors
- Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Default: `http://localhost:5173`

---

## Stopping the Application

1. **Stop Backend**: In the backend terminal, press `Ctrl + C`
2. **Stop Frontend**: In the frontend terminal, press `Ctrl + C`
3. **Stop MongoDB** (if running locally): Stop MongoDB service

---

## Complete Setup Sequence (Copy-Paste Ready)

```bash
# Navigate to project
cd "C:\Users\H5CD3\Downloads\Charu Didi Work\rbac-mern\rbac-mern"

# Setup Backend
cd backend
npm install
# Create .env file manually or use: type nul > .env
# Then add environment variables to .env file
npm run seed
npm run dev

# In a NEW terminal window:
cd "C:\Users\H5CD3\Downloads\Charu Didi Work\rbac-mern\rbac-mern\frontend"
npm install
npm run dev
```

---

## Environment Variables Template

Copy this into `backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/rbac_demo
JWT_SECRET=your_strong_secret_key_here_change_this_in_production
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d
LOG_LEVEL=info
```

---

## Test Credentials

After running `npm run seed`:

| Role   | Username | Password   |
|--------|----------|------------|
| Admin  | admin    | adminpass  |
| Editor | editor   | editorpass |
| Viewer | viewer   | viewerpass |

