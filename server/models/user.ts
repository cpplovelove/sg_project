import {
    AllowNull,
    AutoIncrement,
    Column,
    Default,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import Purpose from './purpose.js';

@Table({ tableName: 'user', modelName: 'user' })
class User extends Model {
    //userId userEmail userPass userName isApproved
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, field: 'userId' })
    id: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    userEmail: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    userPass: string;

    @Column({ type: DataType.STRING })
    userName: string;

    @AllowNull(false)
    @Default(false)
    @Column({ type: DataType.BOOLEAN })
    isApproved: boolean;

    @Column({ type: DataType.INTEGER })
    authNumber: number;

    @HasMany(() => Purpose)
    ownPurposes: Purpose[];

}

export default User;
