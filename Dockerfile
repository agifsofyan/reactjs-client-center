FROM node:14-alpine

WORKDIR ./

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn build

RUN yarn global add serve

# Running on port 5000
CMD ["serve", "-l", "5000", "-s", "build"]