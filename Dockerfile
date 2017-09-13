FROM node:8.5-alpine
ADD index.js /
WORKDIR /
CMD [ "node", "index.js" ]
