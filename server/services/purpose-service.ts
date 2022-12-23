import Purpose from "../models/purpose.js";

const PurposeService = {
    async getPurposes() {
        let dataList = {};
        await Purpose.findAll({
            attributes: ['purposeId', 'userId', 'content'],
        }).then(result => {
            dataList = result;
        }).catch(err => { console.log(err); return false })
        return dataList;
    },
    async getPurposesById(userId) {
        let dataList = {};
        await Purpose.findAll({
            attributes: ['purposeId', 'userId', 'content'],
            where: { userId: userId }
        }).then(result => {
            dataList = result;
        }).catch(err => { console.log(err); return false })
        return dataList;
    },
    async getPurposesByPage(pageNo) {
        const countPerPage = 5;
        const startItemNo = ((pageNo - 1) * countPerPage);
        const endItemNo = (pageNo * countPerPage) - 1;
        let resJson = { pageNo, countPerPage, startItemNo, endItemNo };

        await Purpose.findAll({
            attributes: ['purposeId', 'userId', 'content'],
            where: { isVisible: true }
        }).then(result => {
            resJson['dataList'] = result;
            resJson['totalPage'] = Math.ceil(result.length / countPerPage);
        }).catch(err => { console.log(err); return false })
        return resJson;
    },
    async createPurposes(userId: string, purposes: string[]) {
        const purposeList = []
        for (let i = 0; i < purposes.length; i++) {
            const content = purposes[i]["content"]
            const purpose: Purpose = new Purpose({ userId, content });
            const savedPurpose = await purpose.save();
            purposeList.push(savedPurpose)
        }
        return purposeList;
    }

}

export default PurposeService;

