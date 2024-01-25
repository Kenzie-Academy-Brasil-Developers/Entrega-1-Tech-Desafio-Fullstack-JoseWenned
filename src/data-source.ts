import "reflect-metadata";
import "dotenv/config";
import {DataSource, DataSourceOptions} from "typeorm";
import path from "path"

const DataSourceConfig = (): DataSourceOptions => {

    const entityPath: string = path.join(__dirname, "./src/entities/**.{ts,js}")

    const dburl: string | undefined = process.env.DATABASE_URL

    if(!dburl) {
        throw new Error("Missing env: var DATABASE_URL")
    }

    return {
        type: "postgres",
        url: dburl,
        logging: true,
        entities: [entityPath],
        synchronize: true,
    }
}

export const AppDataSource = new DataSource(DataSourceConfig())