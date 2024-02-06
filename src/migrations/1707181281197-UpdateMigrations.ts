import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateMigrations1707181281197 implements MigrationInterface {
    name = 'UpdateMigrations1707181281197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "admin"`);
    }

}
