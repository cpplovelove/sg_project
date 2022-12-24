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

  static test() {
    return new Promise((resolve, reject) => {
      instance.get("/purposes/").then((res) => {
        if (!res.data) reject(new Error(500));
        resolve(res.data);
      });
    });
  }

  static async getPurposesByPage(pageNo) {
    await instance
      .get("/purposes/page", { params: { page: pageNo } })
      .then((res) => {
        return res.data;
      });
  }
}
