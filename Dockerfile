FROM node:20-alpine
WORKDIR /app

# Reliable file watching in Docker/WSL
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Copy only the package manifests first for layer caching
COPY package*.json ./

# Install all dependencies (works without a package-lock.json)
RUN npm install

# Expose port for Next.js dev server
EXPOSE 3000

# Bind to all interfaces so host can reach container
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
