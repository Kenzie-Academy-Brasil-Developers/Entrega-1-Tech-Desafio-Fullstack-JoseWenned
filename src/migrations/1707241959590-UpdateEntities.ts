import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntities1707241959590 implements MigrationInterface {
    name = 'UpdateEntities1707241959590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "admin"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

}
