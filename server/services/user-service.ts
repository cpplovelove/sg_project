import User from '../models/user.js';
import MailService from './mail-service.js';

const UserService = {
    async create(userEmail: string, userPass: string, userName: string) {
        try {
            console.log('들어옴')
            const authNumber = Math.floor(Math.random() * 888888) + 111111;
            //이거 디비에 저장해주기
            //10분안에 인증 안돼면 유저 삭제하기
            const user: User = new User({ userEmail, userPass, userName, authNumber });
            await MailService.sendMail(userEmail, authNumber);
            return await user.save();
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}

export default UserService;

