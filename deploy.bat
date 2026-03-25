@echo off
echo Installation de Vercel CLI...
npm install -g vercel

echo.
echo Connexion à Vercel...
vercel login

echo.
echo Déploiement sur Vercel...
vercel --prod

echo.
echo Déploiement terminé !
pause