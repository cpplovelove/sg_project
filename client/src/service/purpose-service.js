/* eslint-disable */
import instance from "./axios-config";

export class PurposeService {
  static async getPurposes() {
    let purposes;
    await instance.get("/purposes").then((res) => {
      purposes = res.data;
    });
    return purposes;
  }

  static async getPurposesByPage(pageNo) {
    let purposes;
    await instance.get("/purposes/page/" + pageNo).then((res) => {
      purposes = res.data;
    });
    return purposes;
  }
}
