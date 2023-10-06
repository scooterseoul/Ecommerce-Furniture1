FROM node:16-alpine
WORKDIR /api

COPY package*.json ./

COPY . /api

RUN ["npm", "i"]
CMD ["npm", "start"]