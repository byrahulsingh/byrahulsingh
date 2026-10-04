# ── Build: Astro → static files in /app/dist ─────────────────────────
# Pinned to the Bun version used locally, so bun.lock resolves identically.
FROM oven/bun:1.4.2 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
# Fonts are fetched from Google at build time and self-hosted, so this step needs network access.
RUN bun run build

# ── Serve: plain nginx, no Node at runtime ───────────────────────────
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Same port the previous (TanStack Start) container used.
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO /dev/null http://127.0.0.1:3000/me || exit 1
