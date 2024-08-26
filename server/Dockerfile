FROM node:alpine3.20

COPY package.json package.json
RUN npm install

COPY . .

CMD ["npm", "run", "build"]