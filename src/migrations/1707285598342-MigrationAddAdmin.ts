import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationAddAdmin1707285598342 implements MigrationInterface {
    name = 'MigrationAddAdmin1707285598342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "admin"`);
    }

}
