FROM node:20-alpine AS base
WORKDIR /app

# Install root dependencies
COPY package*.json ./
RUN npm install

# Build backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend ./
RUN npm run build

# Build frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build

WORKDIR /app
EXPOSE 3000 3900

CMD ["npm", "run", "start"]
