import RedisClient from '../cache';

export class CacheRepository {
  set = async (key: string, value: any): Promise<void> => {
    await RedisClient.set(key, JSON.stringify(value));
    await RedisClient.expire(key, 300);
  };
  get = async (key: string): Promise<any> => {
    return await RedisClient.get(key);
  };
  delete = async (key: string): Promise<void> => {
    await RedisClient.del(key);
  };
  clear = async (): Promise<void> => {
    await RedisClient.flushall();
  };
}
