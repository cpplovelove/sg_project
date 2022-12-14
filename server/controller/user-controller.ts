import UserService from "../services/user-service.js";
import bcrypt from 'bcrypt'

const UserController = {
  async getUsers(req: any, res: any) {
    console.log(req.method, req.path)
    try {
      const userList = await UserService.getUserList();
      res.status(200).json(userList);
    } catch (err) { throw err; }
  },
  async join(req: any, res: any) {
    //이미 가입된 유저인 지 확인 필요 & 토큰 발급 필요
    console.log(req.method, req.path)
    try {
      let { userEmail, userPass, userName } = req.body;
      userPass = await bcrypt.hash(userPass, 10);

      const user: any = await UserService.join(userEmail, userPass, userName);
      if (!user) res.status(400).json({ message: 'User creation failed' });

      else res.status(200).json(user);
    } catch (err) { throw err; }
  },
  async login(req: any, res: any) {
    console.log(req.method, req.path)
    try {
      const { userEmail, userPass } = req.body;

      const userInfo = await UserService.login(userEmail, userPass);

      if (userInfo == false) res.status(200).json({ message: 'User login failed' });
      if (userInfo.isApproved == false) res.status(200).json({ message: 'User is not approved' });
      else {
        res.status(200).json(userInfo);
      }
    } catch (err) { throw err; }
  },
  async logout(req: any, res: any) {
    console.log(req.method, req.path)
    res.clearCookie('sid')
    res.send('logout')
  },
  async approve(req: any, res: any) {
    console.log(req.method, req.path)
    try {
      const { userEmail, authNumber } = req.body;

      const isApproved: Boolean = await UserService.approve(userEmail, authNumber);
      if (!isApproved) res.status(400).json({ message: 'user approve failed' });
      else {
        res.status(200).send({ message: 'User approve success' })
      }
    } catch (err) { throw err; }
  }
};

export default UserController;
