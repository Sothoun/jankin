# Use an official Node.js LTS image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (so npm install is cached unless these change)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app's source code
COPY . .

# Expose the port the app listens on (match this to your server.js!)
EXPOSE 5000

# Command that starts the app
CMD ["node", "server.js"]