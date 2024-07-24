# Use a lightweight Node.js image with TypeScript support
# FROM node:lts-alpine AS base
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS builder

RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
# RUN yarn global add turbo
RUN yarn global add turbo
COPY . .
RUN turbo prune backend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
# RUN yarn global add turbo
RUN npm run build --filter=backend...

# Production image, copy all the files and run express
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 express

COPY --from=installer /app .
# COPY --from=builder --chown=express:nodejs /app/dist ./dist
# COPY --from=builder --chown=express:nodejs /app/node_modules ./node_modules
# COPY --chown=express:nodejs package.json ./

USER express

EXPOSE 8000

ENV API_PORT 8000

# Start the application
CMD node apps/backend/dist/index.js
# CMD [ "npm", "start" ]
