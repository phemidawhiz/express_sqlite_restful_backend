import getController from '../controllers/gateway.controller';
import * as express from 'express';
const router = express.Router()

router.get("/", getController.getAllGateways);
router.get("/:sn", getController.getGatewayBySerialNumber);
router.get("/devices/:sn", getController.getAllGatewayDevices);
router.post("/", getController.createGateway);
router.post("/:sn", getController.createDevice);
router.post("/devices/:sn", getController.createDevice);
router.delete("/:sn/:uid", getController.deleteGatewayDevice);


export default router
