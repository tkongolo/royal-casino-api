FROM node:17.5-alpine3.14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY firebase/*.json /usr/src/app/royal_casino.json
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]