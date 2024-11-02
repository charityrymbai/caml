# Cognitia 2024 Hackathon Website

A project developed for the Cognitia 2024 hackathon. This website serves as a platform for students, providing resources such as student projects, previous year exams, and notes across universities to promote peer learning and innovation.

## Demo
[Deployment Link](https://caml.vercel.app/) 

## Features
- **User Authentication** - Secure login and registration system for users.
- **Dashboard** - User-specific dashboard for managing uploaded projects and resources.
- **Collaborative Resources** - Students can share notes, past exams, and projects across universities.
- **Search and Filter** - Easy-to-use search and filter functionality for specific resources by keywords and other attributes.
- **Hashtags and Categories** - Classify resources using hashtags for better accessibility.
- **AI Integrated learning** - Using AI to develop more resources to study plus making it interactive and fun.

## Tech Stack
The website was built using a full-stack architecture. Here are the key technologies used:

### Frontend
- **React**: Frontend framework for building user interfaces
- **Tailwind CSS**: For responsive, utility-first CSS styling

### Backend
- **Prisma**: ORM for database management
- **Prisma-Accelerate**: Used for connection pooling for our serverless deployment of our app 
- **Cloudflare Workers and Hono**: For serverless API handling
- **PostgreSQL**: Database for persistent data storage from neon tech website

### File Storage
- **ImageKit**: File hosting and management solutions for image and document uploads.

## Environment Variables
To run this project, you will need to set up the following environment variables:

- `DATABASE_URL` - PostgreSQL database URL
- `IMAGEKIT_URL` - ImageKit API URL
- `VITE_REACT_APP_API_URL` - Base URL for the backend API
- `GEMINI_API_KEY` - Base URL for the backend API
- `JWT_SECRET` - JWT secret key to sign and verify tokens


