# ASW-2024-2025-2

# npm init --y

# Instalar TypeScript y demás dependencias

npm i -D typescript @types/node ts-node-dev rimraf

# crear carpetas src y dist

# Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

npx tsc --init --outDir dist/ --rootDir src

# Crear scripts para dev, build y start (Más sobre TS-Node-dev aquí)

  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
