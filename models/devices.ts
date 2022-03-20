
export default class {
    constructor(uid: string, vendor: string, status: string, dateCreated: string) {
        this.uid = uid;
        this.vendor = vendor;
        this.status = status;
        this.dateCreated = dateCreated;
    }

    uid!: string;
    vendor!: string;
    status!: string;
    dateCreated!: string;
}
