import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';

import { Client } from '../../client/entities/client.entity';
@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class ServiceRequest extends Model<ServiceRequest> {

  @AllowNull(false)
  @Column(DataType.DATE)
  requestedTime: Date;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  requestedQty: number;

  @ForeignKey(() => Client)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;

  
  @Default(true)
  @Column(DataType.BOOLEAN)
  isActive: boolean;
}
