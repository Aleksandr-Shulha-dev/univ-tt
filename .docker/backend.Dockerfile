FROM node:16.16.0-slim

WORKDIR /app

COPY ./package.json ./
COPY ./backend ./backend

RUN npm run install:backend && \
    npm run build:backend

EXPOSE 8001
CMD ["node", "./backend/build/server.js"]