import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('student')
class Student {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  key: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Student }
