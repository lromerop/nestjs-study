import { IProject } from '../../interfaces/project.interface';
import { BaseEntity } from '../../config/base.entity';
import { Column, Entity } from 'typeorm';
import { UsersProjectsEntity } from '../../users/entities/usersProjects.entity';

@Entity({ name: 'projects' })
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;

  usersIncludes: UsersProjectsEntity[];
}
