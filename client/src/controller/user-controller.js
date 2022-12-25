import { UserService } from "../service/user-service";
import cookies from "react-cookies";

export class UserController {
  static async join(userEmail, userPass, userName) {
    try {
      const status = await UserService.join(userEmail, userPass, userName);
      if (status === 200) return true;
      else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }

  static async login(userEmail, userPass) {
    try {
      const resJson = await UserService.login(userEmail, userPass);
      if (resJson.status === 200) {
        if (resJson.data.message) return resJson.data.message;

        const { id, userEmail, userName } = resJson.data;
        const cookieData = { id, userEmail, userName, isLogged: true };
        const expires = new Date();
        expires.setHours(expires.getHours() + 1); //로그인 만료 1시간으로 설정
        cookies.save("userInfo", cookieData, {
          path: "/",
          expires,
          secure: false,
          httpOnly: false,
        });
        return true;
      } else return false;
    } catch (err) {
      throw err;
    }
  }

  static async approve(userEmail, authNumber) {
    try {
      const status = await UserService.approve(userEmail, authNumber);
      return status;
    } catch (err) {
      throw err;
    }
  }

  static async logout() {
    try {
      const status = await UserService.logout();
      if (status === 200) return true;
      else return false;
    } catch (err) {
      throw err;
    }
  }

  static async isLogged() {
    try {
      const isLogged = await UserService.isLogged();
      return isLogged;
    } catch (err) {
      throw err;
    }
  }

  static async getUsers() {
    try {
      const userList = await UserService.getUsers();
      return userList;
    } catch (err) {
      throw err;
    }
  }
}
