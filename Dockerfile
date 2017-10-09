FROM node:8.6.0-alpine

EXPOSE 8080
WORKDIR /app

ADD app.js /app/
ADD node_modules /app/node_modules

CMD [ "node", "app.js" ]
