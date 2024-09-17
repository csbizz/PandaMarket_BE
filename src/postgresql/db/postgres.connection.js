import { postgresConnectionConfig } from '../configs/postgres.config.js';
import { PrismaClient } from '@prisma/client';

const { host, port, database, username, password } = postgresConnectionConfig;

const connectionString = `postgresql://${username}:${password}@${host}:${port}/${database}?schema=public`;
const connectionOption = { datasourceUrl: connectionString };

export const prismaClient = new PrismaClient();
