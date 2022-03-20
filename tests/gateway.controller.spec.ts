import { Request, Response } from 'express'
import GatewayController from '../controllers/gateway.controller';

let req, res, next;

describe('Gateway Controller', () => {

    it("Create gateway throws error if no ipaddress in request body", () => {

        req = {
            body: {
                name: "ipaddress",
                ipaddress: "192.34.3.2"
            }
        };
        res = {
            send: jest.fn()
        };
        next = jest.fn();

        GatewayController.createGateway(req, res, next);
        expect(res.send).toHaveBeenCalledTimes(0);
        expect(next).toHaveBeenCalledTimes(1);

    });
});
