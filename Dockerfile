FROM oven/bun:1-alpine
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install all dependencies
RUN bun install --frozen-lockfile

# Copy project files
COPY . .

# Build the application
ENV NODE_ENV=production
RUN bun run build

# Expose the application port
EXPOSE 3000

# Start the application using custom server
CMD ["bun", "run", "start"]
