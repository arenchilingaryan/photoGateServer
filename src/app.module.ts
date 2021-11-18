import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { UserModule } from './user/user.module';
import User from './user/user.model';
import { databaseConfig } from './common/config/databaseConfig';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      debug: false,
    }),
    SequelizeModule.forRoot({
      ...databaseConfig,
      models: [User],
    }),
  ],
})
export class AppModule {}
