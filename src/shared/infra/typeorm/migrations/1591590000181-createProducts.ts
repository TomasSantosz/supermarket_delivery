import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createProducts1591590000181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },{
                        name: 'nome',
                        type: 'varchar',
                    },{
                        name: 'descricao',
                        type: 'varchar',
                    },{
                        name: 'quantidade',
                        type: 'integer',
                    },{
                        name: 'preco',
                        type: 'decimal',
                    },{
                        name: 'promocao',
                        type: 'integer',
                    },{
                        name: 'preco_promocao',
                        type: 'decimal',
                    },{
                        name: 'ativo',
                        type: 'integer',
                    },
                    {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                    },
                    {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                    },           
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
