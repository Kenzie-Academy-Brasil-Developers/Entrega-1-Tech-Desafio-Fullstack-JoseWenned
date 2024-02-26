import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1708938797205 implements MigrationInterface {
    name = 'InitialMigration1708938797205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "full_name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(200) NOT NULL, "confirmPassword" character varying(200) NOT NULL, "typeAccount" character varying(20) NOT NULL DEFAULT 'accountNormal', "telephone" character varying(15) NOT NULL, "date_register" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deleteAt" date, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "telephone" character varying(15) NOT NULL, "date_register" date NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
