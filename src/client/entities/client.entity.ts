import { Table, Column, Model, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { Effluent_Type, Industry_Category, Membership_Status, Security_Deposit } from '../../core/enum';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Client extends Model<Client> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  contactNo: string;

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.STRING)
  district: string;

  @Column(DataType.STRING)
  state: string;

  @Column(DataType.STRING)
  latitude: string;
  
  @Column(DataType.STRING)
  longitude: string;

  @Column(DataType.STRING)
  gstNo: string;
  
  @Default(Effluent_Type.PICKLING)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Effluent_Type)
  })
  effluentType: string;
  
  @Column(DataType.FLOAT)
  effluentRate: number;

  @Column(DataType.STRING)
  monthlyEffluentGenerated: string;
  
  @Column(DataType.INTEGER)
  storageTank: number;

  @Column( DataType.DATEONLY)
  agreementStartDate: Date;

  @Column(DataType.DATEONLY)
  agreementEndDate: Date;

  @Default(Industry_Category.GREEN)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Industry_Category)
  })
  industryCategory: string

  @Default(Security_Deposit.PENDING)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Security_Deposit)
  })
  securityDeposit: string

  @Default(Membership_Status.ACTIVE)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Membership_Status)
  })
  membershipStatus: string;

  @Column(DataType.STRING)
  qrCode: string;

}
