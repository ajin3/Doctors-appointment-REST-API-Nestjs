import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../../users/entities/user.entity'

@Table
export class UserData extends Model<UserData> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userDiagnostics: string;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
