FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY storybook-static ./build

CMD [ "cp","./build","./app" ]