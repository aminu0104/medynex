# Fix nested medynex project structure
# This script consolidates the project and fixes React/Swiper issues

$innerRoot = "C:\Users\GINBAZZ\Desktop\medynex\medynex"
$outerRoot = "C:\Users\GINBAZZ\Desktop\medynex"

Write-Host "=== Medynex Project Fix ===" -ForegroundColor Cyan

# Check React and React-DOM versions
Write-Host "`n1. Checking React installation..." -ForegroundColor Yellow
cd $innerRoot
npm list react react-dom --depth=0 2>&1 | Select-String "react|react-dom"

# Check for Swiper
Write-Host "`n2. Checking Swiper installation..." -ForegroundColor Yellow
npm list swiper 2>&1 | Select-String "swiper"

# If swiper not installed, install it
if ($LASTEXITCODE -ne 0 -or $(npm list swiper 2>&1) -like "*not installed*") {
    Write-Host "`n3. Installing Swiper..." -ForegroundColor Green
    npm install swiper
}

# Clean install node_modules
Write-Host "`n4. Cleaning and reinstalling dependencies..." -ForegroundColor Green
Remove-Item "$innerRoot\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$innerRoot\package-lock.json" -Force -ErrorAction SilentlyContinue
npm install

# Verify installation
Write-Host "`n5. Verifying installations..." -ForegroundColor Yellow
npm list react react-dom swiper --depth=0

Write-Host "`n=== Fix Complete ===" -ForegroundColor Green
