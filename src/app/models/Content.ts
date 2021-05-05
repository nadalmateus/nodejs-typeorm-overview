import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('content')
class Content {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  linkContent: string

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

export { Content }
