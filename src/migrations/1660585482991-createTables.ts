import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1660585482991 implements MigrationInterface {
    name = 'createTables1660585482991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "advertisement_type" character varying(128) NOT NULL, "title" character varying(128) NOT NULL, "fabrication_year" character varying(4) NOT NULL, "mileage" character varying(64) NOT NULL, "price" character varying(32) NOT NULL, "description" text NOT NULL, "vehicle_type" character varying(128) NOT NULL, "is_active" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "cpf" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "birth_date" TIMESTAMP NOT NULL, "description" text, "cep" character varying(20) NOT NULL, "state" character varying(128) NOT NULL, "city" character varying(128) NOT NULL, "street" character varying(128) NOT NULL, "address_number" character varying(10) NOT NULL, "complement" text, "account_type" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(128) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
