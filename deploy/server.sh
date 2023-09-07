cd clientSide/project 
npm run build
cd ../../environments
cp frontendEnvProd.js frontendEnv.js
firebase deploy