## Client

The client folder holds all the react-related code and is considered the frontend.

## Server

The root folder holds all the backend-related code, and within this, there is a `public` folder containing the `npm run build` of our react app (client).

> All of this will be automated by a Dockerfile

## Ideology behind this setup

Our main aim is to ensure everything is in a single machine, so we are better off with a single code base rather than splitting this individually. This will help in the maintenance and managing of dependencies.

Moreover, we are about containerizing our application, so a single codebase is mandatory to create our Dockerfile and create CI/CD pipelines.

## Quick Overview

Using this code base, we will create a multiple interlined Dockerfile. For example, react build folder and backend server in the same server but in numerous docker containers within a single dokku instance.

We install MongoDB as a separate dokku instance and link it with our other dokku instance, which contains the APIs and Frontend.

### How to start a development server

It is similar to how we usually start any react application; all you have to do is `cd client` from the root directory and then `npm start`

### How to test a production Server in a local machine using

From the root directory,
`cd client`
`npm run build`
`cd ..`
`npm start`
