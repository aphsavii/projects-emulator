cd clientSide/Project
npm run build
cd environments
cp frontendEnvLocal.js frontendEnv.js 
firebase emulators:start