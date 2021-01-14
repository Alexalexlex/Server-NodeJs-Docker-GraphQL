FROM node:14.5.0

WORKDIR /app

RUN npm i sequelize-cli -g

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start"]