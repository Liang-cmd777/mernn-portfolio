# frontend/Dockerfile

FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Serve with a static server
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
