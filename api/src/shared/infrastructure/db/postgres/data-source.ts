import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserEntity } from '../../../../users/infrastructure/db/models';
import { DBConfig } from '@/src/shared/config/env';

const { host, port, user, password, db_name, type } = DBConfig;

export const AppDataSource = new DataSource({
  type: type,
  host: host,
  port: port,
  username: user,
  password: password,
  database: db_name,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: [],
});
