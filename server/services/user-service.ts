import User from '../models/user.js';

const UserService = {
    async create(userEmail: string, userPass: string, userName: string) {
        try {
            const user: User = new User({ userEmail, userPass, userName });
            return await user.save();
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}

export default UserService;

