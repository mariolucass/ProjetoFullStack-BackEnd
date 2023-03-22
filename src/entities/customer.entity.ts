import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date | string;

  @UpdateDateColumn()
  updatedAt: Date | string;

  @OneToMany(() => Contact, (contact) => contact.customer, { eager: true })
  contacts: Contact[];

  @BeforeInsert()
  hashPassword = () => {
    this.password = hashSync(this.password, 10);
  };
}
