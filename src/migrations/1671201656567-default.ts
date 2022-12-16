import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671201656567 implements MigrationInterface {
    name = 'default1671201656567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "colaboradores" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "nomeCompleto" text NOT NULL, "Cpf" text NOT NULL, "isAtivo" integer NOT NULL, CONSTRAINT "PK_49ea45fb56900f452e7fd4cbf18" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "EnderecoCLiente" ("cliente_uuid" uuid NOT NULL, "Endereco" text NOT NULL, "Rua" text NOT NULL, "Bairro" text NOT NULL, "Cidade" text NOT NULL, "Estado" text NOT NULL, "Cep" text NOT NULL, "Pais" text NOT NULL, CONSTRAINT "PK_053f6d250cf845d3ae0d4a53d44" PRIMARY KEY ("cliente_uuid"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nomeCompleto" text NOT NULL, "Cpf" text NOT NULL, "isAtivo" integer NOT NULL, "idColaborador" uuid, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "EnderecoCLiente" ADD CONSTRAINT "FK_053f6d250cf845d3ae0d4a53d44" FOREIGN KEY ("cliente_uuid") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD CONSTRAINT "FK_05fd2c58213f7fffde08fbb4f26" FOREIGN KEY ("idColaborador") REFERENCES "colaboradores"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" DROP CONSTRAINT "FK_05fd2c58213f7fffde08fbb4f26"`);
        await queryRunner.query(`ALTER TABLE "EnderecoCLiente" DROP CONSTRAINT "FK_053f6d250cf845d3ae0d4a53d44"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "EnderecoCLiente"`);
        await queryRunner.query(`DROP TABLE "colaboradores"`);
    }

}
