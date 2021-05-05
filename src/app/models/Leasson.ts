import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('leasson')
class Leasson {
  @PrimaryColumn()
  id: string;

  @Column()
  idClass: string;

  @Column()
  description: string;

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

export { Leasson }
