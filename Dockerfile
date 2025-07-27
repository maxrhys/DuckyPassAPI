# Use official Node.js LTS image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port (Cloud Run and most hosts use 8080 by default)
ENV PORT=8080
EXPOSE 8080

# Start the app
CMD ["node",