FROM node

ENV BOT_TOKEN=$BOT_TOKEN
ENV OPENAI_API_KEY=$OPENAI_API_KEY

COPY . .

RUN npm install

ENTRYPOINT ["/usr/local/bin/npm", "start"]