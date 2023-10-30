import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Gustavo',
  password: 'root',
  database: 'starwarsstore',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  migrations: ['dist/src/migration/*{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'migrations_TypeORM',
  synchronize: false,
  logging: true,
};
