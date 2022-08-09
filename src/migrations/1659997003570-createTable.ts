import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1659997003570 implements MigrationInterface {
    name = 'createTable1659997003570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "cpf" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "birth_date" TIMESTAMP NOT NULL, "description" text, "cep" character varying(20) NOT NULL, "state" character varying(128) NOT NULL, "city" character varying(128) NOT NULL, "street" character varying(128) NOT NULL, "address_number" character varying(10) NOT NULL, "complement" text NOT NULL, "account_type" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(128) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "advertisement_type" character varying(128) NOT NULL, "title" character varying(128) NOT NULL, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
