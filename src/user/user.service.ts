import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import User from './user.model';
import { UserCreateInputDto } from './dto/input/user-create.input.dto';

@Injectable()
export class UserService {
  constructor(
    // @Inject('SEQUELIZE') private readonly SEQUELIZE, // TODO: injection provider database SEQUELIZE
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User, // private readonly sessionService: SessionService, // TODO: разобраться, зачем нужна сессия ?
  ) {}

  async user(id: number): Promise<User> {
    try {
      return await this.USER_REPOSITORY.findOne<User>({
        // include: this.includedModels, // TODO: что-то для ролей
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async userCreate(data: UserCreateInputDto): Promise<User> {
    try {
      return await this.USER_REPOSITORY.create<User>(data as User);
    } catch (error) {
      throw new Error(error.message);
      // TODO: создать обработчик вывода ошибки
      // throw new MessageCodeError('user:validate:notUniqueUserName');
    }
  }
}
