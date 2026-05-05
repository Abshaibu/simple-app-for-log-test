# Use Node 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose backend port
EXPOSE 4000

# Start backend
CMD ["node", "index.js"]
