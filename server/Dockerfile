FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev @types/cors

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]