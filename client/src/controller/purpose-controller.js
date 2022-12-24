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
}
