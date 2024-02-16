import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClientsMigration1708053675934 implements MigrationInterface {
    name = 'UpdateClientsMigration1708053675934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "updateAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "deleteAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "updateAt"`);
    }

}
