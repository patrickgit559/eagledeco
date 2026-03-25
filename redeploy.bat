@echo off
cd "c:\Users\acer\Pictures\eagledeco"
echo === Git Status ===
git add .
echo === Git Commit ===
git commit -m "Fix: Hero video autoplay without green flash - preload auto and black background"
echo === Git Push ===
git push origin main
echo === Netlify Deploy ===
netlify deploy --prod --dir .
echo.
echo Deployment completed!
pause
