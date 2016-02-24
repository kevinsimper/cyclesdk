FROM node

WORKDIR /app

EXPOSE 9000

ADD package.json /app/package.json

RUN npm install && npm rebuild

ADD . /app

CMD node server
