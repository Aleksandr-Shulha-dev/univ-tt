FROM node:16.16.0-slim

WORKDIR /app

COPY ./package.json ./
COPY ./frontend ./frontend

RUN npm run install:frontend

EXPOSE 3000
CMD ["npm", "run", "start:frontend"]