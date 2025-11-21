# PowerShell scripts for Docker operations on Windows

# Function to display help
function Show-Help {
    Write-Host "CSR Docker Management Scripts" -ForegroundColor Green
    Write-Host "=============================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Available commands:" -ForegroundColor Yellow
    Write-Host "  .\docker-scripts.ps1 dev       - Start development server (localhost:5173)" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 prod      - Start production server (localhost:8080)" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 build     - Build both dev and prod images" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 stop      - Stop all containers" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 clean     - Stop containers and remove images/volumes" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 logs      - Show container logs" -ForegroundColor White
    Write-Host "  .\docker-scripts.ps1 status    - Show container status" -ForegroundColor White
    Write-Host ""
}

# Get the command parameter
param(
    [Parameter(Position=0)]
    [string]$Command = "help"
)

switch ($Command.ToLower()) {
    "dev" {
        Write-Host "Starting development server..." -ForegroundColor Green
        Write-Host "The app will be available at: http://localhost:5173" -ForegroundColor Yellow
        docker-compose up csr-dev
    }
    "prod" {
        Write-Host "Starting production server..." -ForegroundColor Green
        Write-Host "The app will be available at: http://localhost:8080" -ForegroundColor Yellow
        docker-compose up csr-prod
    }
    "build" {
        Write-Host "Building Docker images..." -ForegroundColor Green
        docker-compose build
    }
    "stop" {
        Write-Host "Stopping containers..." -ForegroundColor Green
        docker-compose down
    }
    "clean" {
        Write-Host "Cleaning up containers, images, and volumes..." -ForegroundColor Red
        Write-Host "This will remove all CSR Docker data. Continue? (y/N)" -ForegroundColor Yellow
        $confirmation = Read-Host
        if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
            docker-compose down -v --rmi all
            Write-Host "Cleanup completed." -ForegroundColor Green
        } else {
            Write-Host "Cleanup cancelled." -ForegroundColor Yellow
        }
    }
    "logs" {
        Write-Host "Showing container logs..." -ForegroundColor Green
        docker-compose logs -f
    }
    "status" {
        Write-Host "Container status:" -ForegroundColor Green
        docker-compose ps
    }
    default {
        Show-Help
    }
}
