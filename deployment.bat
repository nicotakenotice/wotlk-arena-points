@echo off

echo =========================
echo AUTO-DEPLOYMENT TO GITHUB
echo =========================

:: echo ** Building project
:: ng build --prod --output-path docs --base-href /wotlk-arena-points/

echo ** Moving to ./docs
cd docs

echo ** Copying index.html into 404.html
copy .\index.html .\404.html

echo ** Moving back to main folder
cd ..

echo ** Stage changes
git add .

echo ** Commit changes
git commit -m "auto-deployment via script"

echo ** Push changes
git push origin master

echo ** Deployment finished!
pause
