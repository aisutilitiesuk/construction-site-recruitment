# Docker Deployment Guide

This guide explains how to deploy the CSR (Construction Site Recruitment) website using Docker for local testing and development.

## 🐳 Docker Setup

### Prerequisites

- Docker Desktop installed and running
- Git (to clone the repository)

### Quick Start

1. **Clone and navigate to the project**:
   ```bash
   git clone <your-repo-url>
   cd CSR
   ```

2. **Start development server**:
   ```bash
   # Using npm scripts
   npm run docker:dev
   
   # Or using PowerShell script (Windows)
   .\docker-scripts.ps1 dev
   
   # Or using docker-compose directly
   docker-compose up csr-dev
   ```

3. **Access the application**:
   - Development: http://localhost:5173
   - Production: http://localhost:8080

## 🚀 Available Commands

### NPM Scripts
```bash
npm run docker:dev          # Start development server
npm run docker:prod         # Start production server
npm run docker:build        # Build both images
npm run docker:build:dev    # Build development image only
npm run docker:build:prod   # Build production image only
npm run docker:down         # Stop containers
npm run docker:clean        # Clean up everything
```

### PowerShell Scripts (Windows)
```powershell
.\docker-scripts.ps1 dev     # Start development server
.\docker-scripts.ps1 prod    # Start production server
.\docker-scripts.ps1 build   # Build images
.\docker-scripts.ps1 stop    # Stop containers
.\docker-scripts.ps1 clean   # Clean up everything
.\docker-scripts.ps1 logs    # View logs
.\docker-scripts.ps1 status  # Check status
```

### Direct Docker Compose
```bash
docker-compose up csr-dev    # Development mode
docker-compose up csr-prod   # Production mode
docker-compose down          # Stop containers
docker-compose build         # Build images
docker-compose logs -f       # View logs
```

## 🔧 Configuration Details

### Development Mode
- **Port**: 5173
- **Hot Reload**: Enabled
- **Volume Mounting**: Source code is mounted for live editing
- **Target**: `development` stage in Dockerfile

### Production Mode
- **Port**: 8080
- **Server**: Nginx
- **Optimizations**: Gzip compression, caching headers, security headers
- **Target**: `production` stage in Dockerfile

## 📁 Docker Files Structure

```
CSR/
├── Dockerfile              # Multi-stage build configuration
├── docker-compose.yml      # Service definitions
├── nginx.conf             # Nginx configuration for production
├── .dockerignore          # Files to exclude from Docker context
├── docker-scripts.ps1     # PowerShell helper scripts
└── README-Docker.md       # This file
```

## 🛠️ Dockerfile Stages

### 1. Builder Stage
- Uses Node.js 18 Alpine
- Installs dependencies
- Builds the React application

### 2. Production Stage
- Uses Nginx Alpine
- Serves built files
- Includes optimized nginx configuration

### 3. Development Stage
- Uses Node.js 18 Alpine
- Runs Vite dev server
- Enables hot module replacement

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Check what's using the port
   netstat -ano | findstr :5173
   # Kill the process or change the port in docker-compose.yml
   ```

2. **Permission issues on Windows**:
   ```powershell
   # Run PowerShell as Administrator
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Build failures**:
   ```bash
   # Clean Docker cache
   docker system prune -a
   # Rebuild without cache
   docker-compose build --no-cache
   ```

4. **Container won't start**:
   ```bash
   # Check logs
   docker-compose logs csr-dev
   # Or for production
   docker-compose logs csr-prod
   ```

### Performance Tips

1. **Use .dockerignore**: Already configured to exclude unnecessary files
2. **Multi-stage builds**: Reduces final image size
3. **Layer caching**: Dependencies are installed before copying source code

## 🌐 Accessing the Application

### Development Mode (localhost:5173)
- Full React development experience
- Hot module replacement
- Source maps enabled
- Development tools available

### Production Mode (localhost:8080)
- Optimized build
- Nginx serving static files
- Gzip compression enabled
- Security headers configured
- Client-side routing handled

## 📊 Health Checks

The production nginx configuration includes a health check endpoint:
- **URL**: http://localhost:8080/health
- **Response**: "healthy" with 200 status code

## 🔒 Security Features

Production mode includes several security headers:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📝 Notes

- The development server binds to `0.0.0.0` to allow access from the host
- Production builds are optimized for performance and security
- Both modes support the React Router client-side routing
- Static assets are cached appropriately in production mode
