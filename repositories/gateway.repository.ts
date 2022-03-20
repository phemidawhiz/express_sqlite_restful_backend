import dao from './dao';
import Gateway from '../models/gateway';
import Device from '../models/devices';

export default class {

    /*GATEWAY OPERATIONS*/
    static async getAllGateways(): Promise<Gateway[]> {
        const gateways = await dao.all("SELECT * FROM gateways", [])
        return <Gateway[]>gateways
    }

    static async getGatewayBySerialNumber(sn: string): Promise<Gateway> {
        const gateway = await dao.get("SELECT * FROM gateways WHERE sn = ?", [sn])
        return <Gateway>gateway;
    }

    static async createGateway(gateway: Gateway): Promise<boolean> {
        const stmt = `INSERT INTO gateways (name, ipaddress) VALUES (?,?);`
        try {
            await dao.run(stmt, [gateway.name, gateway.ipaddress]);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }

    }

    /*DEVICE OPERATIONS*/
    static async createDevice(device: Device, gatewaySerialNumber): Promise<boolean> {
        const stmt = `INSERT INTO devices (vendor, date_created, device_uid, gateway_sn) VALUES (?,?,?,?);`
        try {
            await dao.run(stmt, [device.vendor, device.dateCreated, device.uid, gatewaySerialNumber]);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }

    }

    static async deleteDevice(deviceUID: string, gatewaySerialNumber: number) {
        const stmt = `DELETE FROM devices WHERE device_uid = ? AND gateway_sn = ?;`
        try {
            await dao.run(stmt, [deviceUID, gatewaySerialNumber]);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    static async getAllGatewayDevices(sn: number): Promise<Device[]> {
        const devices = await dao.all(`SELECT * FROM devices WHERE gateway_sn = ?`, [sn])
        return <Device[]>devices
    }
}
