import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Bookmark {
  @ObjectIdColumn()
  _id: string;

  @Column()
  url: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  tags?: string[];

  @Column()
  createdAt: Date = new Date();
}
