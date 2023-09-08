cd clientSide/Project 
npm run build
cd ../../environments
cp frontendEnvProd.js ../clientSide/Project/src/routes/frontendEnv.js
firebase deploy