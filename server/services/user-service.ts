import User from '../models/user.js';
import MailService from './mail-service.js';

const UserService = {
    async create(userEmail: string, userPass: string, userName: string, authNumber: Number) {
        try {
            const user: User = new User({ userEmail, userPass, userName, authNumber });
            return await user.save();
        }
        catch (err) { throw err; }
    },

    async join(userEmail: string, userPass: string, userName: string) {
        try {
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
        }
        catch (err) {
            throw err;
        }
    }
}

export default UserService;

