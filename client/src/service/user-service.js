/* eslint-disable */
import instance from "./axios-config";

export class UserService {
  static async join(userEmail, userPass, userName) {
    let resultStatus = 0;
    await instance
      .post("/user/join", { userEmail, userPass, userName })
      .then((res) => {
        resultStatus = res.status;
      });
    return resultStatus;
  }

  static async login(userEmail, userPass) {
    await instance.post("/user/login", { userEmail, userPass }).then((res) => {
      return res.status;
    });
  }

  static async approve(userEmail, authNumber) {
    let statusCode;
    await instance
      .post("/user/approve", { userEmail, authNumber })
      .then((res) => {
        statusCode = res.status;
      });
    return statusCode;
  }

  static async isLogged() {
    await instance.get("/isLogged").then((res) => {
      const { isLogged } = res.data;
      if (isLogged) return true;
      else return false;
    });
  }

  static async logout() {
    await instance.post("/logout").then((res) => {
      return res.status;
    });
  }

  static async getUsers() {
    await instance.get("/users").then((res) => {
      return res.data;
    });
  }
}
