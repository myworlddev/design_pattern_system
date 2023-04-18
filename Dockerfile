FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN npm i

RUN cd packages/docs/ && npm i

RUN npm build

FROM node:16-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/docs/storybook-static ./

CMD ["cp","-r", "./storybook-static","./app"]