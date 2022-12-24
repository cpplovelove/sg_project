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

  static async createPurposes(userEmail, purposes) {
    try {
      const status = await PurposeService.createPurposes(userEmail, purposes);
      return status;
    } catch (err) {
      throw err;
    }
  }
}
