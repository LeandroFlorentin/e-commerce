# api/Dockerfile

FROM node:24.11.1-alpine3.22 AS dev
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start:dev"]