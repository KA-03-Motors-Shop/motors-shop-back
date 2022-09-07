import { MigrationInterface, QueryRunner } from "typeorm";

export class imageEntity1661551326507 implements MigrationInterface {
    name = 'imageEntity1661551326507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "cpf" character varying(16) NOT NULL, "phone" character varying(16) NOT NULL, "birth_date" TIMESTAMP NOT NULL, "description" text, "cep" character varying(16) NOT NULL, "state" character varying(32) NOT NULL, "city" character varying(32) NOT NULL, "street" character varying(128) NOT NULL, "address_number" character varying(8) NOT NULL, "complement" text, "account_type" character varying(32) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(128) NOT NULL, "color" character varying(32) NOT NULL DEFAULT 'var(--random1)', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "advertisement_type" character varying(128) NOT NULL, "title" character varying(128) NOT NULL, "fabrication_year" character varying(4) NOT NULL, "mileage" character varying(8) NOT NULL, "price" character varying(16) NOT NULL, "description" text NOT NULL, "vehicle_type" character varying(16) NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "userId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" text NOT NULL, "vehicleId" uuid, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
