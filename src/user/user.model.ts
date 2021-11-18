import { Column, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export default class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true }) id: number;
  @Column({ allowNull: false, unique: true }) username: string;
  @Column({ allowNull: false }) password: string;
  @Column({ allowNull: false }) email: string;
  @Column({ allowNull: false }) firstName: string;
  @Column({ allowNull: false }) lastName: string;
  @Column({ allowNull: true }) avatar: string;
  @Column({ allowNull: true }) age: number;
  @Column({ allowNull: true }) about: string;
  @Column({ allowNull: true }) roles: string;
  @Column({ allowNull: false }) country: string;
  @Column({ allowNull: false }) city: string;
  /**
   * connections for One-to-one or Many-to-many (roles, country/city)
   */
  //   /** Many-to-one */
  //   @ForeignKey(() => UserRole)
  //   @Column({ allowNull: false })
  //   userRoleName: string;
  //   @BelongsTo(() => UserRole, {
  //     targetKey: 'userRoleName',
  //     keyType: DataType.STRING,
  //   })
  //   userRole: UserRole;

  //   /** One-to-many */
  //   @HasMany(() => Agreement) agreements: Agreement[];
  //   @HasMany(() => Session) sessions: Session[];
  //   @HasMany(() => Ward) wards: Ward[];
  //   @HasMany(() => Customer) customers: Customer[];
  //   @HasMany(() => EmployeeBonus) employeeBonuses: EmployeeBonus[];
  //   @HasMany(() => EmployeePosition) EmployeePositions: EmployeePosition[];
}
