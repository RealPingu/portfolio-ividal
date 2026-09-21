# builld static export with alpine
FROM node:20-alpine AS builder

#set root web project as working directory
WORKDIR /app

# pnpm, with corepack
RUN corepack enable && corepack prepare pnpm@11.5.1 --activate

# definitiions files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

# rest of app
COPY . .
RUN pnpm build

# nginx serve
FROM nginx:alpine AS runner

# copy export
COPY --from=builder /app/out /usr/share/nginx/html

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
