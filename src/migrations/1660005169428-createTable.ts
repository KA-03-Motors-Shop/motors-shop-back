import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1660005169428 implements MigrationInterface {
    name = 'createTable1660005169428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "advertisement_type" character varying(128) NOT NULL, "title" character varying(128) NOT NULL, "fabrication_year" character varying(4) NOT NULL, "mileage" character varying(64) NOT NULL, "price" character varying(32) NOT NULL, "description" text NOT NULL, "vehicle_type" character varying(128) NOT NULL, "is_active" boolean NOT NULL, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
