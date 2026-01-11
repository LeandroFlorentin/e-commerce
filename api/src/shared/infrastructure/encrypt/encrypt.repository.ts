import { hash, compare } from 'bcrypt';
import { EncryptRepositoryInterface } from '@/src/shared/domain/repositories/encrypt.repository.interface';

export class EncryptRepository implements EncryptRepositoryInterface {
  async hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
