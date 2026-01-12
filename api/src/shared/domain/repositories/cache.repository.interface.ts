export interface CacheRepositoryInterface {
  set(key: string, value: any): Promise<void>;
  get(key: string): Promise<any>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}
