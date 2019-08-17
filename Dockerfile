FROM node:10.16.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install 

COPY . .

EXPOSE 4000

CMD ["yarn", "dev"]