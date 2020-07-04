import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "./User";
import { Link } from "./Link";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @ManyToOne((type) => User, (user) => user.posts)
  user: User;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  body: string;

  @ManyToOne((type) => Link, (link) => link.posts)
  link: Link;
}
