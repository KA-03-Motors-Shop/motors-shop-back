FROM node:16-alpine

USER root

WORKDIR /app/src/

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]