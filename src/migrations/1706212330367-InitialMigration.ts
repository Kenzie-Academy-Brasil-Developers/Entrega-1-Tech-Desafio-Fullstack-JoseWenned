import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706212330367 implements MigrationInterface {
    name = 'InitialMigration1706212330367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "telephone" character varying(15) NOT NULL, "date_register" date NOT NULL, CONSTRAINT "UQ_43ad4cb7f6a1d67a5dd9dd24bf9" UNIQUE ("full_name"), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "full_name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(200) NOT NULL, "telephone" character varying(15) NOT NULL, "date_register" date NOT NULL, CONSTRAINT "UQ_862add8c9d8b0dfb58f3ca16ba7" UNIQUE ("full_name"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_d1118d13c9c73a8b90a2dcf39e7" UNIQUE ("password"), CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
