FROM node

COPY . .

RUN npm install

ENTRYPOINT ["/usr/local/bin/npm", "start"]