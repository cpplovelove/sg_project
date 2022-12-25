import { PurposeService } from "../service/purpose-service";

export class PurposeController {
  //getPurposes getPurposesByUserId getPurposesByPage createPurposes

  static async getPurposes() {
    try {
      const purposeList = await PurposeService.getPurposes();
      return purposeList;
    } catch (err) {
      throw err;
    }
  }

  static async getPurposesByPage(pageNo) {
    try {
      const purposeList = await PurposeService.getPurposesByPage(pageNo);
      return purposeList;
    } catch (err) {
      throw err;
    }
  }

  static async getPurposesByUserId(userId) {
    try {
      const purposeList = await PurposeService.getPurposesByUserId(userId);
      return purposeList;
    } catch (err) {
      throw err;
    }
  }

  static async createPurposes(userId, purposes) {
    try {
      let purposeList = [];
      for (let i = 0; i < purposes.length; i++) {
        purposeList.push({ content: purposes[i] });
      }

      const reqJson = { userId, purposes: purposeList };
      const status = await PurposeService.createPurposes(reqJson);
      if (status === 200) return true;
      return status;
    } catch (err) {
      throw err;
    }
  }
}
