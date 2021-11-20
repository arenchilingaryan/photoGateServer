import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { userProviders } from './user.providers';

@Module({
  providers: [UserService, UserResolver, ...userProviders],
})
export class UserModule {}
