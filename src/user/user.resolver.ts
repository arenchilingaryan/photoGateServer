import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserArgsDto } from './dto/args/user.args.dto';
import { UserDto } from './dto/user.dto';
import { UserCreateInputDto } from './dto/input/user-create.input.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDto, { nullable: true })
  async getUserById(@Args() { id }: UserArgsDto) {
    return await this.userService.user(id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: UserCreateInputDto) {
    return await this.userService.userCreate(data);
  }
}
