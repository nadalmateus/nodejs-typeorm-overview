import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateLeasson1620240226363 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(

      new Table(
        {
          name: 'leasson',
          columns: [
            {
              name: 'idClass',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'description',
              type: 'varchar'

            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('leasson')
  }
}
