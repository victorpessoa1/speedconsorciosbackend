import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671217723047 implements MigrationInterface {
    name = 'default1671217723047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "DPessoaisCliente" ("cliente_uuid" uuid NOT NULL, "Nascimento" TIMESTAMP NOT NULL, "Sexo" text NOT NULL, "RG" text NOT NULL, "DataEmissao" TIMESTAMP NOT NULL, "Oexpedidor" text NOT NULL, "ECivel" text NOT NULL, CONSTRAINT "PK_df5164ec4e5548b20ec30e62388" PRIMARY KEY ("cliente_uuid"))`);
        await queryRunner.query(`ALTER TABLE "DPessoaisCliente" ADD CONSTRAINT "FK_df5164ec4e5548b20ec30e62388" FOREIGN KEY ("cliente_uuid") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "DPessoaisCliente" DROP CONSTRAINT "FK_df5164ec4e5548b20ec30e62388"`);
        await queryRunner.query(`DROP TABLE "DPessoaisCliente"`);
    }

}
