FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN npm i

RUN cd packages/docs/ && npm i

RUN npm run build

FROM node:16-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/docs/ ./build

CMD ["cp","-r", "./build/*","./app"]