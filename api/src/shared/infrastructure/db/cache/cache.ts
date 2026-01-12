import Redis from 'ioredis';
import { RedisConfig } from '@/src/shared/config/env';

console.log(RedisConfig);

const RedisClient = new Redis({
  host: RedisConfig.host,
  port: RedisConfig.port,
});

RedisClient.on('connect', () => {
  console.log('Connected to Redis');
});
RedisClient.on('error', (err) => {
  console.error('Redis error', err);
  process.exit(1);
});

export default RedisClient;
