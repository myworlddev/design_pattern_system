FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./packages/docs/storybook-static .

CMD [ "cp","-r","./storybook-static","./app" ]