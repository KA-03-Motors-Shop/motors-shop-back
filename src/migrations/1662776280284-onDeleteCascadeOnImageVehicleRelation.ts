import { MigrationInterface, QueryRunner } from "typeorm";

export class onDeleteCascadeOnImageVehicleRelation1662776280284 implements MigrationInterface {
    name = 'onDeleteCascadeOnImageVehicleRelation1662776280284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427"`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427"`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_5f21c4268f97c67e2f05b27d427" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
