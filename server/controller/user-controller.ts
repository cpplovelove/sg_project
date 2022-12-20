import UserService from "../services/user-service.js";

const UserController = {

  async base(req: any, res: any) {
    const { userEmail, userPass, userName } = req.body;

    const user: any = await UserService.create(userEmail, userPass, userName);
    if (!user) res.status(400).json({ message: 'User creation failed' });

    res.status(200).json(user);
  }
};

export default UserController;
