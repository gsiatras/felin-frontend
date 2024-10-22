# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /felin-frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
