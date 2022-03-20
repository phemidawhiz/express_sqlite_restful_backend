# Node-JWT-Sqlite-TypeScript-Starter


[![React-App-CI](https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter/actions/workflows/node.js.yml)

This is an updated version of my older <a taret="_blank" href="https://github.com/mwolfhoffman/node-jwt-sqlite-starter">node-jwt-sqlite starter</a> repo that was written using vanilla JS. I just about always use TypeScript now for my node APIs so this repo includes TS and a few new features.

This is a fast, simple, and lightweight starter for node.js REST APIs. It uses `sqlite3` for data storage and `njwt` and `bcrypt` for safe authentication with hashed passwords and JWT. 

**This project is meant to be a template for quickly spinning up MVPs for side projects, and should not be used in production without modification.**

<br />

<br />


# Get Started

## Required Environment Variables:
```
APP_SECRET=
```

## Install and Run:

With npm:

```
npm install
npm run dev
```

With yarn:

```
yarn install
yarn start
```



<br/>

# Features

## TypeScript Watcher

This code base includes a TS watcher when running the `dev` command that will pick up changes automatically. Use `npm run dev` or `yarn dev` to take advantage of this feature.

## Data Persistence

This template uses `sqlite3`  

There is a default script `setupDbForDev` in the `dao.ts` file that will run to create tables, insert values, etc. 


## Creating and retrieving Gateways

The `gateway.controller.ts` will use the 'gateways' table created in the `dao.ts`. 

To create a gateway a POST request to `/api/gateway`. 

The request body should be:

```
{
    "name":"Frand Edwards",
    "ipaddress":"192.168.12.22"
}
```

To get a gateway send a GET request to `/api/gateway/{gateway_sn}`.

To get all gateways send a GET request to `/api/gateway`.


## Creating and retrieving gateway devices
The `gateway.controller.ts` will use the 'devices' table created in the `dao.ts`.

To create a device under a gateway send a POST request to `/gateway/{gateway_sn}`.

The request body should be like this:

```
{
    "vendor": "Microsoft",
    "status": "Casing",
    "dateCreated": "21/12/2022"
}
```

To get all gateway devices send a GET request to `/api/gateway/devices/{gateway_sn}`.

To delete a gateway device send a DELETE request to `/api/gateway/{sn}/{uid}`.

## Unit Tests

I added unit tests as well. These tests use `jest` and they reside in the `/tests/` directory.
