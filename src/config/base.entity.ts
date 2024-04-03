import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'update_at',
  })
  updateAt: Date;
}
