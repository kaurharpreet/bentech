import { Table, Column, Model, DataType, Default, AllowNull, Unique } from 'sequelize-typescript';
@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class User extends Model<User> {
  @Column(DataType.BIGINT)
  clientId: number;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: ['lifter', 'client', 'admin'],
  })
  clientType: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  contactNo?: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  isActive: boolean;
}
