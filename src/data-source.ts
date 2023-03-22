import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const databaseURL: string | undefined = process.env.DATABASE_URL;

  if (!databaseURL) throw new Error("Missing env var: 'DATABASE_URL' ");

  return {
    type: "postgres",
    url: databaseURL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
