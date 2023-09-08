cd clientSide/Project
npm run build
cd ../../environments
cp frontendEnvLocal.js ../clientSide/Project/src/routes/frontendEnv.js 
firebase emulators:start