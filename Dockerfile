FROM --platform=$BUILDPLATFORM node:20.14.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html

COPY --from=builder /app/dist/maps /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
