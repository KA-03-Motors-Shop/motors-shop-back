FROM node:16

RUN apt-get update

#Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available

COPY ["package*.json", "yarn.lock"] .

RUN yarn 

COPY . .

EXPOSE 3030

USER node

CMD [ "yarn", "start" ]