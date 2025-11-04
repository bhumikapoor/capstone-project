# RBAC MERN Application - Complete Implementation

A comprehensive Role-Based Access Control (RBAC) system built with MERN stack (MongoDB, Express, React, Node.js).

## Features

### ✅ Fully Implemented

- **Role & Permission Matrix** - Fine-grained permissions for Admin, Editor, and Viewer roles
- **JWT Authentication** - Short-lived access tokens with refresh tokens in httpOnly cookies
- **API Enforcement** - Middleware-based authorization with ownership checks
- **Data Scoping** - MongoDB queries filtered by role and ownership
- **Admin Panel** - User management interface for Admins
- **React Router** - Route guards and protected routes
- **Input Validation** - express-validator for request validation and sanitization
- **Structured Logging** - Winston logger with correlation IDs
- **Metrics Collection** - Authorization denial tracking
- **Error Handling** - Centralized error handling middleware
- **Comprehensive Testing** - Unit and integration tests
- **Beautiful UI** - Modern, responsive CSS styling
- **CSRF Protection** - Simplified CSRF protection for cookie-based auth

## Project Structure

```
rbac-mern/
├── backend/
│   ├── config/
│   │   └── roles.js          # Role-permission matrix
│   ├── middleware/
│   │   ├── auth.js           # JWT authentication
│   │   ├── authorize.js     # Permission checking
│   │   ├── validation.js    # Input validation
│   │   ├── errorHandler.js  # Error handling
│   │   └── csrf.js          # CSRF protection
│   ├── models/
│   │   ├── User.js          # User model
│   │   ├── Post.js          # Post model
│   │   └── Audit.js         # Audit log model
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   ├── posts.js         # Post CRUD routes
│   │   └── admin.js         # Admin routes
│   ├── utils/
│   │   ├── logger.js        # Winston logger
│   │   └── metrics.js       # Metrics collection
│   ├── scripts/
│   │   └── seed.js          # Database seeding
│   ├── tests/               # Test suite
│   ├── server.js            # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main app with Router
│   │   ├── Login.jsx        # Login component
│   │   ├── Posts.jsx        # Posts management
│   │   ├── AdminPanel.jsx   # Admin panel
│   │   ├── ProtectedRoute.jsx # Route guard
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── styles.css       # Comprehensive styling
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or cloud)

### Backend Setup

```bash
cd rbac-mern/backend
npm install
cp .env.example .env  # Create .env file with your config
npm run seed          # Seed database with test users
npm start             # Start server (or npm run dev for development)
```

### Frontend Setup

```bash
cd rbac-mern/frontend
npm install
npm run dev           # Start development server
```

### Environment Variables

Create `.env` file in `backend/`:

```env
MONGO_URI=mongodb://localhost:27017/rbac_demo
JWT_SECRET=your_strong_secret_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d
LOG_LEVEL=info
```

## Demo Credentials

After running `npm run seed`:

- **Admin**: `admin` / `adminpass`
- **Editor**: `editor` / `editorpass`
- **Viewer**: `viewer` / `viewerpass`

## Role Permissions

### Admin
- ✅ Create posts
- ✅ Read all posts
- ✅ Update any post
- ✅ Delete any post
- ✅ Manage users

### Editor
- ✅ Create posts
- ✅ Read all posts
- ✅ Update own posts only
- ❌ Delete posts (no permission)
- ❌ Manage users

### Viewer
- ❌ Create posts
- ✅ Read all posts
- ❌ Update posts
- ❌ Delete posts
- ❌ Manage users

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with username/password
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout and clear cookies

### Posts
- `GET /api/posts` - Get all posts (requires `posts:read`)
- `POST /api/posts` - Create post (requires `posts:create`)
- `PUT /api/posts/:id` - Update post (requires `posts:update`, Editors limited to own posts)
- `DELETE /api/posts/:id` - Delete post (requires `posts:delete`, Admin only)

### Admin
- `GET /api/admin/users` - List all users (requires `users:manage`, Admin only)
- `POST /api/admin/users` - Create user (requires `users:manage`, Admin only)

### System
- `GET /api/health` - Health check
- `GET /api/metrics` - System metrics

## Testing

Run tests:

```bash
cd rbac-mern/backend
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # With coverage
```

## Docker Setup

```bash
cd rbac-mern/backend
docker-compose up -d  # Start MongoDB and backend
```

## Features Breakdown

### Frontend Features
- ✅ React Router with protected routes
- ✅ Route guards based on roles
- ✅ Beautiful, responsive UI
- ✅ Permission-based UI controls
- ✅ Admin panel interface
- ✅ Token refresh on expiry
- ✅ Error handling and validation feedback

### Backend Features
- ✅ JWT authentication with refresh tokens
- ✅ Role-based authorization middleware
- ✅ Input validation and sanitization
- ✅ Structured logging with Winston
- ✅ Metrics collection
- ✅ Audit logging
- ✅ Error handling middleware
- ✅ Rate limiting
- ✅ CORS configuration
- ✅ Security headers (Helmet)
- ✅ CSRF protection basics

### Security Features
- ✅ Password hashing with bcrypt
- ✅ httpOnly cookies for refresh tokens
- ✅ Secure cookie settings in production
- ✅ Input validation and sanitization
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Security headers
- ✅ JWT token expiration

## Logging

Logs are stored in:
- Console (structured JSON in production)
- `logs/error.log` - Error logs
- `logs/combined.log` - All logs

All logs include correlation IDs for request tracing.

## Metrics

View metrics at `/api/metrics`:
- Authorization denials/successes
- Authentication failures/successes
- API request counts
- System uptime

## Development

### Backend Development
```bash
npm run dev  # Nodemon for auto-restart
```

### Frontend Development
```bash
npm run dev  # Vite dev server with HMR
```

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use strong `JWT_SECRET`
3. Configure `FRONTEND_URL` for CORS
4. Use secure cookies (`secure: true`)
5. Set up proper MongoDB connection string
6. Configure Winston for production logging
7. Set up monitoring for metrics


