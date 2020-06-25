@echo off
:: ng build --prod --output-path docs --base-href /wotlk-arena-points/

echo ** Moving to ./docs
cd docs

echo ** Copying index.html into 404.html
copy .\index.html .\404.html

pause
