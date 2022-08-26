import { MigrationInterface, QueryRunner } from "typeorm";

export class imageEntity21661546468334 implements MigrationInterface {
    name = 'imageEntity21661546468334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cep" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(128) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cep" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying(32) NOT NULL`);
    }

}
