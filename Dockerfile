# 1. build the front-end
FROM node:latest AS build-react
RUN mkdir /temp-build
WORKDIR /temp-build
COPY client/package*.json ./
RUN npm ci
COPY client/. ./
RUN npm run prod

# 2. prepare the back-end
FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY --from=build-react /temp-build/build/ /app/public/

# 3. run this web-application
EXPOSE 8092
ENV NODE_ENV production

CMD [ "npm", "run", "start" ]