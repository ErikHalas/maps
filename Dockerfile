FROM --platform=$BUILDPLATFORM node:20.14.0-alpine AS builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@15

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG BACKEND_URL
RUN sed -i "s|http://localhost:5000|${BACKEND_URL}|g" src/environment.ts
RUN sed -i "s|http://localhost:5000|${BACKEND_URL}|g" src/environment.prod.ts
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]
