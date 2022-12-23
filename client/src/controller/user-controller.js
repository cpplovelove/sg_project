import { UserService } from "../service/user-service";

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
      const status = await UserService.login(userEmail, userPass);
      if (status === 200) return true;
      else return false;
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
