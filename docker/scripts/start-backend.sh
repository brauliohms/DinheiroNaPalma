#!/bin/sh

# Executa as migrações do Prisma
npx prisma migrate deploy --schema=/app/apps/backend/src/adapters/database/prisma/schema.prisma

# Inicia a aplicação Express
node apps/backend/dist/index.js