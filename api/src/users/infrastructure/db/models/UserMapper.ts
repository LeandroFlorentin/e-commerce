import { User } from '../../../domain/entity/User';
import { UserEntity } from './UserEntity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    return new User(entity.id, entity.email, entity.password, entity.createdAt, entity.updatedAt);
  }

  static toEntity(domain: User): UserEntity {
    const entity = new UserEntity();
    entity.id = domain.id;
    entity.email = domain.email;
    entity.password = domain.password;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }
}
