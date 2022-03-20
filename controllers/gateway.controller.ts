import repo from '../repositories/gateway.repository';
import { Request, Response } from 'express'
import Gateway from '../models/gateway';
import Device from '../models/devices';
import { v4 as uuidv4 } from 'uuid';

export default class {

    /*GATEWAY CONTROLLER*/
    static async getAllGateways(req: Request, res: Response, next: Function) {
        let gateways = await repo.getAllGateways();
        return res.send({ gateways });
    };

    static async getGatewayBySerialNumber(req: Request, res: Response, next: Function) {
        let gateway = await repo.getGatewayBySerialNumber(req.params.sn)
        if(!gateway){
            return res.status(404).send(gateway);
        }
        return res.send({ gateway });
    }

    static async createGateway(req: Request, res: Response, next: Function) {
        if (!req.body.name || !req.body.ipaddress) {
            const err: Error = new Error("Gateway name and IP address are required.");
            return next(err)
        }
        const newGateway = new Gateway(req.body.name, req.body.ipaddress);
        const success = await repo.createGateway(newGateway);
        return res.send({ success, gateway: newGateway });
    }

    static async updateGateway(req: Request, res: Response, next: Function) {
        if (!req.body.id || !req.body.name || !req.body.ipaddress) {
            const err: Error = new Error("Gateway name and ipaddress are required.");
            return next(err)
        }
        let success = await repo.updateGateway(req.body);
        return res.send({ success, gateway: req.body });
    }

    /*DEVICE CONTROLLER*/
    static async getAllGatewayDevices(req: Request, res: Response, next: Function) {
        if (!req.params.sn) {
            const err: Error = new Error("Gateway serial number is required.");
            return next(err)
        }
        let devices = await repo.getAllGatewayDevices(req.params.sn)
        return res.send({ devices: devices });
    };
    static async createDevice(req: Request, res: Response, next: Function) {
        const deviceUID: string = uuidv4();
        if (!req.body.vendor || !req.body.status || !req.body.dateCreated) {
            const err: Error = new Error("incomplete request, please check for missing fields");
            return next(err)
        }

        if (!req.params.sn) {
            const err: Error = new Error("Gateway serial number is required.");
            return next(err)
        }

        const newDevice = new Device(deviceUID, req.body.vendor, req.body.status, req.body.dateCreated);
        const success = await repo.createDevice(newDevice, req.params.sn);
        return res.send({ success, gateway: newDevice });
    }

    static async deleteGatewayDevice(req: Request, res: Response, next: Function) {
        if (!req.params.sn) {
            const err: Error = new Error("Gateway serial number is required.");
            return next(err)
        }

        if (!req.params.uid) {
            const err: Error = new Error("Device uid is required.");
            return next(err)
        }
        let deleted = await repo.deleteDevice(req.params.uid, Number(req.params.sn));
        return res.send({ success: deleted });
    }

}
