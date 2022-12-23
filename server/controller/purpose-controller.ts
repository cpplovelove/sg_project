import PurposeService from "../services/purpose-service.js";

const PurposeController = {
    async getPurposes(req: any, res: any) {
        try {
            const dataList = await PurposeService.getPurposes();
            res.status(200).json(dataList);
        } catch (err) { throw err; }
    },
    async getPurposesById(req: any, res: any) {
        try {
            const userId = req.params.userId;
            const dataList = await PurposeService.getPurposesById(userId);
            res.status(200).json(dataList);
        } catch (err) { throw err; }
    },
    async getPurposesByPage(req: any, res: any) {
        try {
            console.log('emfdjdha')
            const page = req.params.page;
            const dataList = await PurposeService.getPurposesByPage(page);
            res.status(200).json(dataList);
        } catch (err) { throw err; }
    },
    async createPurpose(req: any, res: any) {
        try {
            const { userId, purposes } = req.body;
            const dataList = await PurposeService.createPurposes(userId, purposes);
            res.status(200).json(dataList);
        } catch (err) { throw err; }
    },
};

export default PurposeController;
