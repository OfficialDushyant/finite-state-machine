# Use Node 22 alpine image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies (including ts-jest and Jest)
COPY package*.json ./
RUN npm install

# Copy the rest of the project (including jest.config.js, tsconfig.json, source and test files)
COPY . .

# Build the TypeScript project
RUN npm run build

# The default command runs the example (npm start)
CMD ["npm", "start"]