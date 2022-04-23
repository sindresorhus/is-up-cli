FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
RUN npm install -g
#CMD ["is-up"]
ENTRYPOINT ["is-up"]
