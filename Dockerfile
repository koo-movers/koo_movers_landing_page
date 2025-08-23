# 1. Base image
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Provide build-time env vars
ARG NEXT_PUBLIC_API_URL
ARG NODE_ENV
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NODE_ENV=$NODE_ENV

# 2. Build stage
FROM base AS builder
WORKDIR /app
COPY . . 
RUN npm run build

# 3. Production stage
FROM base AS runner
WORKDIR /app



# Copy only what we need from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
