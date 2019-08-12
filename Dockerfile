FROM node:12.8.0-stretch-slim

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
RUN npm build

EXPOSE 8080
CMD [ "npm", "start" ]
