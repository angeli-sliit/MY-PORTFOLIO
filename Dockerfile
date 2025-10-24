# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
