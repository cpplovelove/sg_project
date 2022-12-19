import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    Default,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import User from './user.js';

@Table({ tableName: 'purpose', modelName: 'purpose' })
class Purpose extends Model {
    //purposeId userId content review isAchieved isVisible
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, field: 'purposeId' })
    purposeId: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    content: string;

    @Column({ type: DataType.STRING })
    review: string;

    @Column({ type: DataType.STRING })
    userName: string;

    @Default(false)
    @Column({ type: DataType.BOOLEAN })
    isAchieved: boolean;

    @Default(false)
    @Column({ type: DataType.BOOLEAN })
    isVisible: boolean;

    // @BelongsTo(() => User, 'userId')
    // user: User;

}

export default Purpose;
