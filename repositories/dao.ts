import * as sqlite from 'sqlite3'
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./db/sqlite.db');

export default class {

    static setupDbForDev() {
        db.serialize(function () {
            
            /*CREATE TABLES*/
            //Gateway table
            const createUsersTable = "CREATE TABLE IF NOT EXISTS gateways (sn INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, ipaddress TEXT)";
            db.run(createUsersTable);

            //table for peripheral devices
            const createItemsTable = "CREATE TABLE IF NOT EXISTS devices (device_uid TEXT, gateway_sn INTEGER, vendor TEXT, date_created                TEXT, status TEXT, FOREIGN KEY (gateway_sn) REFERENCES gateways(sn) ON DELETE CASCADE ON UPDATE NO ACTION)";
            db.run(createItemsTable);

        });
    }

    static all(stmt, params) {
        return new Promise((res, rej) => {
            db.all(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }
    static get(stmt, params) {
        return new Promise((res, rej) => {
            db.get(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }

    static run(stmt, params) {
        return new Promise((res, rej) => {
            db.run(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }


}
