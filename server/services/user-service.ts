import User from '../models/user.js';
import MailService from './mail-service.js';
import bcrypt from 'bcrypt';

const UserService = {
    async create(userEmail: string, userPass: string, userName: string, authNumber: Number) {
        const user: User = new User({ userEmail, userPass, userName, authNumber });
        return await user.save();
    },
    async join(userEmail: string, userPass: string, userName: string) {
        const isJoined = await this.findUserByEmail(userEmail);
        if (isJoined) return false;

        //회원 가입 난수 && 1분안에 인증 안돼면 유저 삭제하기
        const authNumber = Math.floor(Math.random() * 888888) + 111111;
        const user: User = this.create(userEmail, userPass, userName, authNumber);
        await MailService.sendMail(userEmail, authNumber);

        setTimeout(async () => {
            await User.findOne({ where: { userEmail } }).then(async (data) => {
                if (data) {
                    const isApproved = Boolean(data.getDataValue('isApproved'));
                    console.log(isApproved)
                    if (isApproved == false) {
                        await User.destroy({ where: { userEmail } });
                    }
                }
            });
        }, 60 * 1000);

        return user;
    },
    async login(userEmail: String, userPass: String) {
        const userInfo = await this.findUserByEmail(userEmail);
        if (!userInfo) return false;

        const isEqual = await bcrypt.compare(userPass, userInfo.userPass)
        if (!isEqual) return false
        else return isEqual
    },
    async approve(userEmail: String, authNumber: number) {
        const userInfo = await this.findUserByEmail(userEmail);
        if (!userInfo) return false;

        if (authNumber == userInfo.authNumber) {
            await User.update({ isApproved: true }, { where: { userEmail: userEmail } })
            return true;
        }
        else return false;
    },
    async findUserByEmail(userEmail: String) {
        const user = await User.findOne({ where: { userEmail } });
        if (user) return user;
        else return false;
    }
}

export default UserService;

