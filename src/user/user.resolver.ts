import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
  @Query(() => User)
  getAll() {}
}
