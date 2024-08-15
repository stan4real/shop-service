FROM node:20.9.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i && npm install -g serve
COPY . .
EXPOSE 10666
CMD ["serve", "-s", "build"]