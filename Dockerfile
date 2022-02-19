FROM node:16

WORKDIR /usr/src/app

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000

CMD [ "node", "build/src/server.js" ]