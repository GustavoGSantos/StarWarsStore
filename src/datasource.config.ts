import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Gustavo',
  password: 'root',
  database: 'starwarsstore',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  migrations: ['dist/src/migration/*{.ts,.js}'],
  migrationsTableName: 'migrations_TypeORM',
});
