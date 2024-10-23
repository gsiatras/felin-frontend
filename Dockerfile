# Use an official Node.js runtime as a base image
FROM node:18-alpine as build-stage

# Set the working directory inside the container
WORKDIR /felin-frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

RUN chmod -R 755 /felin-frontend

# Build the Next.js app
RUN npm run build

# Use Node.js 18 for production image
FROM node:18-alpine

WORKDIR /felin-frontend

COPY --from=build-stage /felin-frontend .


# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
