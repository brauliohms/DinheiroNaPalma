#!/bin/sh

# Executa as migrações do Prisma
npx prisma migrate deploy --schema=/app/apps/backend/src/adapters/database/prisma/schema.prisma

echo 
echo # ------------------------------ #
echo

# Exibe status das migrações
npx prisma migrate status --schema=/app/apps/backend/src/adapters/database/prisma/schema.prisma

echo 
echo # ------------------------------ #
echo

# Inicia a aplicação Express
node apps/backend/dist/index.js