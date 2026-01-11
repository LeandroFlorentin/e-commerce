import { TokenRepositoryInterface } from '@/src/shared/domain/repositories/token.repository.interface';
import { EncryptRepositoryInterface } from '@/src/shared/domain/repositories/encrypt.repository.interface';
import { AuthDTO } from '@/src/auth/interface/dtos/auth.dto';
import { AppError } from '@/src/shared/utils';

export class LoginUseCase {
  constructor(
    private readonly jwtRepository: TokenRepositoryInterface,
    private readonly encryptRepository: EncryptRepositoryInterface,
  ) {
    this.jwtRepository = jwtRepository;
    this.encryptRepository = encryptRepository;
  }

  async login(payload: AuthDTO): Promise<string> {
    const { email, password } = payload;
    const cacheUser = null; // await this.cacheRepository.get(email);
    if (cacheUser) {
      return this.jwtRepository.generateToken(cacheUser);
    }
    const isUserExist = { id: 1, email: 'test@test.com', username: 'test', role: ['user'], password: '123456' }; //await this.userRepository.findByEmailOrUsername(email);
    if (!isUserExist) throw new AppError('Incorrect username', 404);
    const isPasswordValid = await this.encryptRepository.comparePassword(password, isUserExist.password);
    if (!isPasswordValid) throw new AppError('Invalid password', 401);
    const token = this.jwtRepository.generateToken(isUserExist);
    return token;
  }
}
