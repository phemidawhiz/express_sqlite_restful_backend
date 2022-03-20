# Musala Gateway RESTful API Service


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
