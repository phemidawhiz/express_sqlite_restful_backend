// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();
// @ts-ignore
import express from 'express';
import dao from './repositories/dao';
import gatewayRoutes from './routes/gateways.routes';

const port = 4100;
export const app = express();

app.listen(port, () => console.log(`RESTful API Service listening on port ${port}!`));
app.use(express.json())


//  Script to setup sqlite DB in memory //
dao.setupDbForDev();
////////////////////////////////////

app.use('/gateway', gatewayRoutes);
