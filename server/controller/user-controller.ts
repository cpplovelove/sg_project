import UserService from "../services/user-service.js";
import bcrypt from 'bcrypt'

const UserController = {
  async join(req: any, res: any) {
    //이미 가입된 유저인 지 확인 필요 & 토큰 발급 필요
    let { userEmail, userPass, userName } = req.body;
    userPass = await bcrypt.hash(userPass, 10);

    const user: any = await UserService.create(userEmail, userPass, userName);
    if (!user) res.status(400).json({ message: 'User creation failed' });
    res.status(200).json(user);
  },
};

export default UserController;
